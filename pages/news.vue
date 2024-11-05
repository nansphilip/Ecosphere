<template>
  <div class="connexion-container">
    <Header />
    <div>
      <ul>
        <li>
          <span>Défi de la semaine : </span>Ramasser 30 bouteilles en plastique
          dans la rue
        </li>
        <li>
          <span>Défi de la semaine : </span>Se laver les dents sans laisser
          couler l'eau
        </li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Login - Ecosphere",
  meta: [{ name: "description", content: "This is the login page" }],
});
</script>
<style scoped>
.connexion-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
