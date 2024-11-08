<template>
  <div class="defi-container">
    <Header />
    <div class="challenge-in-progress">
      <h3>Défi Quotidien</h3>
      <!-- <button>{{ mostRecentTaskWithStatusFalse.name }}</button> -->
      <button @click="updateDaily(mostRecentTaskWithStatusFalse)">
        <img
          v-if="mostRecentTaskWithStatusFalse.difficulty === 1"
          src="/public/imgs/numbers/number1.png"
          alt="icon number"
        />
        <img
          v-else-if="mostRecentTaskWithStatusFalse.difficulty === 2"
          src="/public/imgs/numbers/number2.png"
          alt="icon number"
        />
        <img
          v-else-if="mostRecentTaskWithStatusFalse.difficulty === 3"
          src="/public/imgs/numbers/number3.png"
          alt="icon number"
        />
        <img
          v-else-if="mostRecentTaskWithStatusFalse.difficulty === 4"
          src="/public/imgs/numbers/number4.png"
          alt="icon number"
        />
        <img
          v-else-if="mostRecentTaskWithStatusFalse.difficulty === 5"
          src="/public/imgs/numbers/number5.png"
          alt="icon number"
        />
        <span class="line-clamp-2">{{
          mostRecentTaskWithStatusFalse.name
        }}</span>
      </button>
      <h3>Défi Hebdomadaire</h3>
      <button @click="updateWeekly(recentWeeklyTasks[0])">
        <img
          v-if="recentWeeklyTasks[0].difficulty === 1"
          src="/public/imgs/numbers/number1.png"
          alt="icon number"
        />
        <img
          v-else-if="recentWeeklyTasks[0].difficulty === 5"
          src="/public/imgs/numbers/number5.png"
          alt="icon number"
        />
        <img
          v-else-if="recentWeeklyTasks[0].difficulty === 5"
          src="/public/imgs/numbers/number5.png"
          alt="icon number"
        />
        <img
          v-else-if="recentWeeklyTasks[0].difficulty === 5"
          src="/public/imgs/numbers/number5.png"
          alt="icon number"
        />
        <img
          v-else-if="recentWeeklyTasks[0].difficulty === 5"
          src="/public/imgs/numbers/number5.png"
          alt="icon number"
        />{{ recentWeeklyTasks[0].name }}
      </button>
    </div>
    <div class="challenge-finished">
      <h3>Défis terminés</h3>
      <div class="challenge" v-for="recentTask in finalArrayTasks">
        <img src="/public/imgs/checked.png" alt="icon checked" />
        <span class="line-clamp-2">{{ recentTask.name }}</span>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
useHead({
  title: "Defis - Ecosphere",
  meta: [{ name: "description", content: "This is the défis page" }],
});

const user = ref(null);

const cookie = useCookie("auth_token");

const updateDaily = async (daily) => {
  await useFetch("/api/update-daily-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      status: true,
      id: daily.userId_dailyChallengeId,
    },
  });
};
const updateWeekly = async (weekly) => {
  await useFetch("/api/update-weekly-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      status: true,
      id: weekly.userId_WeeklyChallengeId,
    },
  });
};

const { data: userData, error } = await useFetch("/api/get-user-id", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    id: cookie.value.id,
  },
});

if (userData.value) {
  user.value = userData.value;
  // console.log(toRaw(user.value.dailys));
} else {
  console.log(error.value);
}

// const recentTasks2 = user.value.dailys
//   .filter((task) => task.status === true)
//   .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
//   .slice(0, 3);

// const mostRecentTaskWithStatusFalse2 = user.value.dailys
//   .filter((task) => task.status === false)
//   .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

const mostRecentTaskWithStatusFalse = computed(() => {
  return user.value.dailys
    .filter((task) => task.status === false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
});

const recentDalyTasks = computed(() => {
  return user.value.dailys
    .filter((task) => task.status === true)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
});

const recentWeeklyTasks = computed(() => {
  return user.value.weeklys
    .filter((task) => task.status === true)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
});

const mergedArray = ref([...recentDalyTasks.value, ...recentWeeklyTasks.value]);

const finalArrayTasks = computed(() => {
  return mergedArray.value
    .filter((task) => task.status === true)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
});
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

    img {
      width: 25px;
    }

    button {
      width: 100%;
      height: 50px;
      background-color: #85dd72;
      color: #112413;
      font-weight: bold;
      border-radius: 10px;
      font-size: 0.9em;
      transition: 0.4s;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      padding-left: 10px;
      gap: 10px;
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
      justify-content: flex-start;
      width: 100%;
      height: 50px;
      background-color: #2e5632;
      border-radius: 10px;
      font-size: 0.9em;
      color: #85dd72;
      font-weight: bold;
      padding-left: 10px;

      img {
        width: 25px;
      }
    }
  }
}
</style>
