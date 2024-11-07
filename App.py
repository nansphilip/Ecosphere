import mysql.connector
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from datetime import datetime
import random




conn = mysql.connector.connect(
    host="localhost",      
    user="root",   
    password="Vlad1slav17",  
    database="ecosphere-db",
    charset='utf8mb4'
)

cursor = conn.cursor(dictionary=True)


def fetch_user_challenge_data():
    query = """
        SELECT u.id AS user_id, d.id AS challenge_id, d.difficulty, du.status
        FROM DailyUser du
        JOIN User u ON du.userId = u.id
        JOIN DailyChallenge d ON du.dailyChallengeId = d.id
    """
    cursor.execute(query)
    data = cursor.fetchall()
    return pd.DataFrame(data)

def fetch_difficulty_levels():
    cursor.execute("SELECT DISTINCT difficulty FROM DailyChallenge")
    levels = cursor.fetchall()
    return [level['difficulty'] for level in levels]

# On excite les données pour pouvoir rentrer hehe
data = fetch_user_challenge_data()
if data.empty:
    print("Aucune donnée trouvée pour l'entraînement.")
else:

    user_success_rates = data.groupby('user_id')['status'].mean().rename("success_rate")
    user_challenge_counts = data.groupby('user_id')['challenge_id'].count().rename("challenge_count")
    user_data = user_success_rates.to_frame().join(user_challenge_counts)


    data = data.join(user_data, on="user_id")
    
    X = data[['difficulty', 'success_rate', 'challenge_count']]
    y = data['status']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)



    # ET LA ON BAISE
    model = RandomForestClassifier(random_state=42)
    model.fit(X_train, y_train)

    #ON APPELE NOTRE POTE POUR LUI DIRE L EVALUATION DU MODELE A BAISE
    accuracy = model.score(X_test, y_test)
    print(f"Précision du modèle : {accuracy:.2f}")


    difficulty_levels = fetch_difficulty_levels()




    def recommend_challenge(user_id):
  
        delete_query = "DELETE FROM RecommendedChallenge WHERE userId = %s"
        cursor.execute(delete_query, (user_id,))
        conn.commit()


        user_info = user_data.loc[user_id]
        user_success_rate = user_info['success_rate']
        user_challenge_count = user_info['challenge_count']


        recommended_difficulties = []
        for difficulty in difficulty_levels:
            prediction_input = pd.DataFrame({
                'difficulty': [difficulty],
                'success_rate': [user_success_rate],
                'challenge_count': [user_challenge_count]
            })
            success_prob = model.predict_proba(prediction_input)[0][1]
            recommended_difficulties.append((difficulty, success_prob))

  
        recommended_difficulties.sort(key=lambda x: x[1], reverse=True)
        best_difficulty = recommended_difficulties[0][0]


        query = "SELECT * FROM DailyChallenge WHERE difficulty = %s"
        cursor.execute(query, (best_difficulty,))
        challenges = cursor.fetchall()

        if challenges:
            challenge = random.choice(challenges)  
            insert_query = """
                INSERT INTO RecommendedChallenge (userId, dailyChallengeId, date, createdAt, updatedAt)
                VALUES (%s, %s, %s, %s, %s)
            """
            current_time = datetime.now()
            values = (user_id, challenge['id'], current_time, current_time, current_time)
            cursor.execute(insert_query, values)
            conn.commit()
            print(f"Recommandation pour l'utilisateur {user_id}: {challenge['name']} - {challenge['description']}")
        else:
            print(f"Aucun défi disponible pour le niveau de difficulté {best_difficulty} de l'utilisateur {user_id}.")


    for user_id in user_data.index:
        recommend_challenge(user_id)


cursor.close()
conn.close()
