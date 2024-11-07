<template>
  <div class="connexion-container">
    <img src="/public/imgs/logo-ecosphere.png" alt="logo ecosphere" />
    <h1 class="title">ECOSPHERE</h1>
    <hr />
    <span class="subtitle">Votre assistant écologique</span>
    <div class="form-container">
      <form @submit.prevent="Login">
        <span>Se connecter</span>
        <div>
          <input
            v-model="usernameLogin"
            type="text"
            id="username"
            name="username"
            placeholder="Pseudo"
            required
          />
        </div>
        <div>
          <input
            v-model="passwordLogin"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button v-if="loadingLogin" type="submit" disabled>
          Chargement...
        </button>
        <button v-else type="submit">Connexion</button>
        <div class="separation">
          <hr />
        </div>
      </form>
      <form action="/submit" method="POST">
        <span>S'inscrire</span>
        <div>
          <input
            v-model="usernameRegister"
            type="text"
            id="username"
            name="username"
            placeholder="Pseudo"
            required
          />
        </div>
        <div>
          <input
            v-model="passwordRegister"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <button v-if="loadingRegister" type="submit" disabled>
          Chargement...
        </button>
        <button v-else type="submit">Inscription</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();

useHead({
  title: "Login - Ecosphere",
  meta: [{ name: "description", content: "This is the login page" }],
});

// Login
const usernameLogin = ref("");
const passwordLogin = ref("");
const loadingLogin = ref(false);
const authToken = useCookie("auth_token");

const Login = async () => {
  // Start loading
  loadingLogin.value = true;

  // Send POST request to login
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: usernameLogin.value,
      password: passwordLogin.value,
    }),
  });

  // if (response.ok) {
  //   if (response.status) {
  //     // User created
  //     //   authToken.value = response.token;
  //     // Redirect
  //     router.push("/news");
  //   } else {
  //     // Can't create user (already exists)
  //     alert("Pseudo ou mot de passe incorrect !");
  //     // Show a feedback
  //     // Reset form values
  //     usernameLogin.value = "";
  //     passwordLogin.value = "";
  //   }
  // } else {
  //   alert("Erreur lors de la connexion !");
  //   console.error("Failed to login");
  // }

  // Stop loading
  loadingLogin.value = false;
};

///////////////////////////////Register/////////////////////////////////////////
const usernameRegister = ref("");
const passwordRegister = ref("");
const loadingRegister = ref(false);

const Register = async () => {
  // Start loading
  loadingLogin.value = true;

  // Send POST request to register
  const response = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: usernameLogin.value,
      password: passwordLogin.value,
    }),
  });

  if (response.ok) {
    if (response.status) {
      // Valid credentials
      // Redirect
    } else {
      // Invalid credentials
      // Show a feedback

      // Reset form values
      usernameRegister.value = "";
      passwordRegister.value = "";
    }
  } else {
    console.error("Failed to register");
  }

  // Stop loading
  loadingLogin.value = false;
};
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
