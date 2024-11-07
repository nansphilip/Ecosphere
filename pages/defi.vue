<template>
  <div class="defi-container">
    <Header />
    <div class="challenge-in-progress">
      <h3>Défi Quotidien</h3>
      <button>{{ mostRecentTaskWithStatusFalse.name }}</button>
      <h3>Défi Hebdomadaire</h3>
      <button>{{ user.weeklys[0].name }}</button>
    </div>
    <div class="challenge-finished">
      <h3>Défis terminés</h3>
      <div class="challenge" v-for="recentTask in recentTasks">
        <img src="/public/imgs/checked.png" alt="icon checked" /><span
          class="line-clamp-2"
          >{{ recentTask.name }}</span
        >
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

const recentTasks = computed(() => {
  return user.value.dailys
    .filter((task) => task.status === true)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
});

// console.log(recentTasks);
// console.log(mostRecentTaskWithStatusFalse);
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
