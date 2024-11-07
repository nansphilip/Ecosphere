<template>
  <Header />
  <div class="trophee-container">
    <div class="filtre-container">
      <ul>
        <li><a href="/trophee">Classement mondial</a></li>
        <li>
          <a
            href="#"
            :class="{ active: activeTab === 'friends' }"
            @click="switchTab('friends')"
            >Mes amis</a
          >
        </li>
      </ul>
      <div v-if="activeTab === 'friends'" class="autocomplete-container">
        <input
          type="text"
          v-model="searchQuery"
          @input="fetchSuggestions"
          placeholder="ajouter un ami..."
          class="autocomplete-input"
        />
        <!-- Affiche la liste des suggestions si elle n'est pas vide -->
        <div v-if="suggestions.length" class="suggestions-overlay">
          <div
            v-for="user in suggestions"
            :key="user.id"
            class="suggestion-item"
          >
            <span>{{ user.username }}</span>
            <button @click="addFriend(user)">ajouter</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Affiche la table uniquement si aucune suggestion n'est disponible -->
    <table
      v-if="activeTab === 'friends' && !suggestions.length"
      class="leaderboard-table"
    >
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
            <img
              :src="getMedalImage(index + 1)"
              :alt="`medaille de rang ${index + 1}`"
              class="medals"
            />
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

const activeTab = ref("friends");
const searchQuery = ref("");
const suggestions = ref([]);

const friendList = ref([
  { id: 1, username: "Alice", points: 1000 },
  { id: 2, username: "Bob", points: 900 },
  { id: 3, username: "Charlie", points: 850 },
  { id: 4, username: "Diana", points: 800 },
  { id: 5, username: "Eve", points: 750 },
]);

const sortedFriends = computed(() => {
  return [...friendList.value].sort((a, b) => b.points - a.points);
});

const allUsers = [
  { id: 6, username: "Fred" },
  { id: 7, username: "George" },
  { id: 8, username: "Hannah" },
  { id: 9, username: "Ian" },
  { id: 10, username: "Jack" },
];

const fetchSuggestions = () => {
  if (searchQuery.value) {
    suggestions.value = allUsers.filter((user) =>
      user.username.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  } else {
    suggestions.value = [];
  }
};

const addFriend = (user) => {
  if (!friendList.value.some((friend) => friend.id === user.id)) {
    friendList.value.push({
      ...user,
      points: Math.floor(Math.random() * 500 + 500),
    });
    alert(`${user.username} a été ajouté à vos amis !`);
  } else {
    alert(`${user.username} est déjà dans votre liste d'amis.`);
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
  border-bottom: 2px solid #333; /* Ligne sous "Mes Amis" */
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
