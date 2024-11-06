<template>
  <div class="container">
    <Header />

    <div class="milieu">
      <h1 class="titre">Erreur 404</h1>

      <br />

      <img
        class="creusement"
        src="/public/imgs/interdire.png"
        alt="icon interdiction"
      />

      <br />

      <p class="explication">La page n’existe pas</p>

      <br />

      <button><NuxtLink> </NuxtLink> Accueil</button>
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style>
.container {
  display: flex;
  padding-top: 5px;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
.milieu {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-bottom: 50px;
}

.creusement {
  width: 80px;
}

button {
  border-radius: 20px;
  background-color: #2e5632;
  color: #fff;
  font-weight: bold;
  width: 210px;
  height: 51px;
  font-weight: bold;
  font-size: 1.5em;
  margin: 5px;
}
.titre {
  font-weight: bold;
  font-size: 2.6em;
  color: #2e563f;
}
p {
  font-weight: bold;
  font-size: 1.5em;
}
</style>
