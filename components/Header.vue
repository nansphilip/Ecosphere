<template>
  <div class="header-container">
    <img class="" src="/public/imgs/logo-ecosphere.png" alt="logo ecosphere" />
    <div class="title">
      <h1>Ecosphere</h1>
      <span>Votre assistant écologique</span>
    </div>
    <a href="/wip"
      ><span class="points"
        ><span class="points-typo">{{ user.points }}</span>
        <img src="/public/imgs/coeurfeuille.png" alt="feuille icon" /></span
    ></a>
  </div>
</template>

<script setup>
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
</script>

<style scoped>
.header-container {
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  img {
    width: 80px;
    height: 80px;
  }
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      font-weight: 900;
      font-size: 1.4em;
      color: #2e563f;
    }
    span {
      font-size: 0.7em;
      font-weight: bold;
      color: #85dd72;
    }
  }
  .points {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 85px;
    height: 33px;
    background-color: #2e563f;
    border-radius: 5px;
    .points-typo {
      color: #85dd72;
      font-family: "Bebas Neue", sans-serif;
      font-size: 18px;
      transform: scale(1, 1.3);
      font-weight: bold;
    }

    img {
      width: 22px;
      height: 22px;
      color: #fff;
    }
  }
}
</style>
