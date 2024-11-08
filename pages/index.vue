<template>
  <Header />
  <div class="news-container">
    <!-- <div class="challenges">
      <ul>
        <li>
          <input
            type="checkbox"
            v-model="isWeeklyChallengeDone"
            class="custom-checkbox"
          />
          <div class="challenge-content">
            <span class="highlight">Défi de la semaine :</span>
            <p class="challenge-text">{{ defiSemaine }}</p>
          </div>
        </li>
        <li>
          <input
            type="checkbox"
            v-model="isDailyChallengeDone"
            class="custom-checkbox"
          />
          <div class="challenge-content">
            <span class="highlight">Défi du jour :</span>
            <p class="challenge-text">{{ defiJour }}</p>
          </div>
        </li>
      </ul>
    </div> -->

    <main class="main-content">
      <h2>Actualités</h2>
      <div class="news-grid">
        <NuxtLink
          :to="{ name: 'article', params: { id: article.id } }"
          :style="`background-image: url(${article.image}); background-size: cover; background-position: center; backdrop-filter: blur(16px);`"
          class="news-item cursor-pointer relative"
          v-for="article in articleList"
          :key="article.id"
        >
          <p
            class="text-white font-bold line-clamp-3"
            style="text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.7)"
          >
            {{ article.title }}
          </p>
        </NuxtLink>
      </div>
    </main>
  </div>
  <Footer />
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});

const { data: articleList } = await useFetch("/api/get-every-article");
</script>

<style scoped>
.news-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex: 1 1 0%;
  overflow: auto;
}

.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  color: #204b35;
  margin-bottom: 27px;
  height: 100%;
}

.challenges {
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  background-color: #2e563f;
  color: white;
  width: 90%;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.challenges ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.challenges li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}

.challenges li:last-child {
  margin-bottom: 0;
}

.custom-checkbox {
  appearance: none;
  width: 18px;
  height: 18px;
  margin-right: 10px;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 3px;
  position: relative;
  flex-shrink: 0;
}

.custom-checkbox:checked {
  background-color: #85dd72;
  border-color: white;
}

.custom-checkbox:checked::after {
  content: "✔";
  color: white;
  font-size: 14px;
  position: absolute;
  top: -1px;
  left: 3px;
}

.challenge-content {
  display: flex;
  flex-direction: column;
}

.highlight {
  font-weight: bold;
  color: #85dd72;
  font-size: 0.85em;
  white-space: nowrap;
}

.challenge-text {
  font-size: 0.8em;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.4;
  margin: 0;
}

.main-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  text-align: center;
  align-self: center;
  margin-bottom: 20px;
}

.main-content h2 {
  font-size: 1.8em;
  font-weight: bold;
  margin-bottom: 20px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.news-item {
  background-color: #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  font-size: 0.9em;
  color: #333;
}
</style>
