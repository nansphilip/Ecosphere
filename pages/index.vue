<template>
  <div class="connexion-container">
    <img src="/public/imgs/logo-ecosphere.png" alt="logo ecosphere" />
    <h1 class="title">ECOSPHERE</h1>
    <hr />
    <span class="subtitle">Votre assistant écologique</span>
    <div class="form-container">
      <form action="/submit" method="GET">
        <span>Se connecter</span>
        <div>
          <input
            v-model="pseudoGet"
            type="text"
            id="username"
            name="username"
            placeholder="Pseudo"
            required
          />
        </div>

        <div>
          <input
            v-model="passwordGet"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <button type="submit">Connexion</button>
        <div class="separation">
          <hr />
        </div>
      </form>
      <form action="/submit" method="POST">
        <span>S'inscrire</span>
        <div>
          <input
            v-model="pseudoPost"
            type="text"
            id="username"
            name="username"
            placeholder="Pseudo"
            required
          />
        </div>

        <div>
          <input
            v-model="passwordPost"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <button type="submit">Inscription</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Login - Ecosphere",
  meta: [{ name: "description", content: "This is the login page" }],
});

const pseudoGet = ref("");
const passwordGet = ref("");

const pseudoPost = ref("");
const passwordPost = ref("");
</script>

<style scoped>
.connexion-container {
  display: flex;
  padding-top: 5px;
  flex-direction: column;

  align-items: center;
  background-color: #2e5632;
  width: 100%;
  height: 100%;
  .title {
    font-size: 1.8em;
    font-weight: bold;
    color: #fff;
  }
  img {
    width: 190px;
  }
  span {
    color: #fff;
    font-weight: bold;
    font-size: 1.2em;
  }
  hr {
    border: 1px solid #fff;
    width: 190px;
    margin-bottom: 5px;
  }
  .separation {
    color: #fff;
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  .subtitle {
    color: #fff;
    font-size: 0.7em;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .form-container {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 15px;
    padding: 15px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    input {
      border-radius: 5px;
      padding-left: 10px;
      margin: 5px;
      background-color: rgb(141, 141, 141);
      color: #2e5632;
    }
    input::placeholder {
      color: rgb(214, 214, 214);
      font-size: 0.8em;
      font-weight: bold;
    }
    button {
      border-radius: 20px;
      background-color: #2e5632;
      color: #fff;
      font-weight: bold;
      width: 130px;
      height: 28px;
      font-size: 0.8em;
      margin: 5px;
    }
  }
}
</style>
