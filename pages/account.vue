<template>
  <Header />
  <div class="account-container">
    <div class="account-part account-part-1">
      Hello <span class="pseudo">{{ user.pseudo }}</span> !
    </div>
    <div class="account-part account-part-2">
      <h3>Mon compte</h3>
      <ul>
        <li><a class="link" href="/wip">Mes informations</a></li>
        <hr />
        <li><a class="link" href="/wip">Modifier mon mot de passe</a></li>
        <hr />
        <li><a class="link" href="/wip">Parrainage</a></li>
      </ul>
    </div>
    <div class="account-part account-part-3 link">
      <h3>Support / Aide</h3>
      <ul>
        <li><a class="link" href="/wip">Contactez le support</a></li>
        <hr />
        <li><a class="link" href="/wip">Politique de confidentialité</a></li>
        <hr />
        <li><a class="link" href="/wip">Parrainage</a></li>
        <hr />
        <li><a class="link" href="/wip">Supprimer mon compte</a></li>
      </ul>
    </div>
    <button class="deconnect-button">Se déconnecter</button>
  </div>
  <Footer />
</template>

<script lang="ts" setup>
useHead({
  title: "Account - Ecosphere",
  meta: [{ name: "description", content: "This is the Account page" }],
});

definePageMeta({
  middleware: "auth",
});

const user = reactive({
  pseudo: "Michel",
});
</script>

<style scoped>
.account-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 75%;

  .account-part {
    background-color: #2e563f;
    width: 100%;
    color: #fff;
    border-radius: 10px;
    padding: 20px;

    .pseudo {
      color: #85dd72;
    }

    h3 {
      font-weight: bold;
    }

    .link {
      font-size: 0.8em;
      transition: 0.4;
    }
    .link:hover {
      color: #85dd72;
    }
  }

  .account-part-1 {
    font-weight: bold;
    font-size: 1.5em;
  }

  .deconnect-button {
    width: 80%;
    background-color: #2e563f;
    border-radius: 20px;
    padding: 10px;
    color: #fff;
    font-weight: bold;
    font-size: 0.9em;
    transition: 0.4s;
  }

  .deconnect-button:hover {
    background-color: #85dd72;
    color: #2e563f;
  }
}
</style>
