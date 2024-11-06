<template>
  <div class="container">
    <Header />

    <div class="milieu">
      <h1 class="titre">Coming soon ...</h1>

      <br />

      <img
        class="creusement"
        src="/public/imgs/creusement.png"
        alt="icon travaux"
      />

      <br />

      <p class="explication">
        Page en cours de <br />
        développement
      </p>

      <br />

      <button><a href=""></a>Accueil</button>
    </div>

    <Footer />
  </div>
</template>

<script lang="ts" setup></script>

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
  font-size: 1.2em;
  margin: 5px;
}
.titre {
  font-weight: bold;
  font-size: 2.6em;
  color: #2e563f;
}
p {
  font-weight: bold;
  font-size: 1.2em;
}
</style>
