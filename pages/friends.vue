<template>
  <Header />
  <div class="trophee-container">
    <div class="filtre-container">
      <ul>
        <li><a href="/trophee">Classement mondial</a></li>
        <li>
          <a href="#" :class="{ active: activeTab === 'friends' }" @click="switchTab('friends')">Mes amis</a>
        </li>
      </ul>
      <div v-if="activeTab === 'friends'" class="autocomplete-container">
        <input type="text" v-model="searchQuery" @input="fetchSuggestions" placeholder="ajouter un ami..."
          class="autocomplete-input" />
        <!-- Affiche la liste des suggestions si elle n'est pas vide -->
        <div v-if="suggestions.length" class="suggestions-overlay">
          <div v-for="user in suggestions" :key="user.id" class="suggestion-item">
            <span>{{ user.username }}</span>
            <button @click="addFriend(user)">ajouter</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Affiche la table uniquement si aucune suggestion n'est disponible -->
    <table v-if="activeTab === 'friends' && !suggestions.length" class="leaderboard-table">
      <thead>
        <tr>
          <th>Rang</th>
          <th>User</th>
          <th>Feuille</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in sortedFriends" :key="user.id">
          <td v-if="index + 1 <= 3">
            <img :src="getMedalImage(index + 1)" :alt="`medaille de rang ${index + 1}`" class="medals" />
          </td>
          <td v-else>{{ index + 1 }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.points }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <Footer />
</template>

<script setup>
import { ref, computed } from "vue";

definePageMeta({
  middleware: "auth",
});
useHead({
  title: "Trophées - Mes Amis",
  meta: [
    {
      name: "description",
      content: "Page de classement des amis sur Ecosphere",
    },
  ],
});

const cookie = useCookie("auth_token");

const { data: dataUser, error } = await useFetch(
  "/api/get-every-user-friends",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      id: cookie.value.id,
    },
  }
);

const friendList = ref([]);

if (dataUser.value) {
  friendList.value = dataUser.value;
} else {
  console.log(error.value);
}

const { data: allUsers } = await useFetch("/api/get-every-user");

const activeTab = ref("friends");
const searchQuery = ref("");
const suggestions = ref([]);


const filteredFriends = allUsers.value.filter((user) =>
  friendList.value.some((friend) => user.id === friend.id) || cookie.value.id === user.id
);

const sortedFriends = computed(() => {
  return filteredFriends.sort((a, b) => b.points - a.points);
});

const fetchSuggestions = () => {
  if (searchQuery.value) {
    suggestions.value = allUsers.value.filter((user) =>
      !friendList.value.some((friend) => user.id === friend.id) && cookie.value.id !== user.id
    );
  } else {
    suggestions.value = [];
  }
};

const addFriend = async (user) => {
  if (!friendList.value.some((friend) => friend.id === user.id)) {
    const friendIdList = friendList.value.map((friend) => friend.id);

    // Add to database
    await useFetch("/api/add-user-friend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        userId: cookie.value.id,
        newFriendList: [...friendIdList, user.id],
      },
    });

    // Add to current list
    friendList.value.push(user);

    // Reset input
    searchQuery.value = "";
    suggestions.value = [];
  }
};

// Chemin des images de médailles basé sur le rang
const getMedalImage = (rank) => {
  if (rank === 1) return "/imgs/medailles/or.png";
  if (rank === 2) return "/imgs/medailles/argent.png";
  if (rank === 3) return "/imgs/medailles/bronze.png";
  return ""; // Pas d'image pour les rangs supérieurs à 3
};

const switchTab = (tab) => {
  activeTab.value = tab;
};
</script>

<style scoped>
.trophee-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  height: 100%;
}

.filtre-container ul {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  justify-content: center;
}

.filtre-container ul li a {
  color: #333;
  text-decoration: none;
  font-size: 1em;
  padding-bottom: 5px;
}

.filtre-container ul li a.active {
  font-weight: bold;
  border-bottom: 2px solid #333;
  /* Ligne sous "Mes Amis" */
}

.autocomplete-container {
  position: relative;
  width: 90%;
  margin-top: 10px;
}

.autocomplete-input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  background-color: #c6c6c6;
  border: 1px solid #d3d3d3;
  font-size: 1em;
}

.suggestions-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  max-height: 150px;
  overflow-y: auto;
  border-radius: 8px;
  margin-top: 5px;
}

.suggestion-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  cursor: pointer;
}

.suggestion-item:hover {
  background-color: #f0f0f0;
}

.suggestion-item button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8em;
}

.leaderboard-table {
  width: 90%;
  margin-top: 10px;
  border-collapse: collapse;
}

.leaderboard-table th,
.leaderboard-table td {
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.medals {
  width: 30px;
  height: 30px;
  margin: auto;
  display: block;
}
</style>
