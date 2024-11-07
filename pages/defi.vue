<template>
  <div class="defi-container">
    <Header />
    <div class="challenge-in-progress">
      <h3>Défi Quotidien</h3>
      <button>{{ dailyChallenge }}</button>
      <h3>Défi Hebdomadaire</h3>
      <button>{{ weeklyChallenge }}</button>
    </div>
    <div class="challenge-finished">
      <h3>Défis terminés</h3>
      <div class="challenge" v-for="challenge in listFinishedChallenges">
        <img src="/public/imgs/checked.png" alt="icon checked" />{{
          challenge.name
        }}
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
useHead({
  title: "defis - Ecosphere",
  meta: [{ name: "description", content: "This is the défis page" }],
});

const user = ref("");

const cookie = useCookie("auth_token");

const data = toRaw(cookie.value);
console.log(data.password);

const dailyChallenge = ref(`Eteindre l'eau en se brossant les dents`);
const weeklyChallenge = ref("Ramasser 100 bouteilles en plastique");

const listFinishedChallenges = reactive([
  {
    name: "Défi numero 1",
  },
  {
    name: "Défi numero 2",
  },
  {
    name: "Défi numero 3",
  },
]);
</script>

<style scoped>
.defi-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 1.5em;
    font-weight: bold;
  }

  .challenge-in-progress {
    display: flex;
    gap: 10px;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    button {
      width: 100%;
      height: 50px;
      background-color: #85dd72;
      color: #112413;
      font-weight: bold;
      border-radius: 10px;
      font-size: 0.9em;
      transition: 0.4s;
    }

    button:hover {
      background-color: #aeeca1;
    }
  }

  .challenge-finished {
    display: flex;
    gap: 10px;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .challenge {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 50px;
      background-color: #2e5632;
      border-radius: 10px;
      font-size: 0.9em;
      color: #85dd72;
      font-weight: bold;

      img {
        width: 25px;
      }
    }
  }
}
</style>
