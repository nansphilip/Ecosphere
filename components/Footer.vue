<template>
  <nav class="footer-container flex flex-row gap-4 justify-center">
    <NuxtLink to="#"
      ><img src="/public/imgs/home.png" alt="logo home"
    /></NuxtLink>
    <NuxtLink to="#"
      ><img src="/public/imgs/target.png" alt="logo defi"
    /></NuxtLink>
    <NuxtLink to="#"
      ><img src="/public/imgs/trophee.png" alt="logo trophee"
    /></NuxtLink>
    <NuxtLink to="#"
      ><img src="/public/imgs/user.png" alt="logo account"
    /></NuxtLink>
  </nav>
</template>

<script lang="ts" setup></script>

<style scoped>
.footer-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-left: 30px;
  padding-right: 30px;
  align-items: center;
  background-color: #2e5632;
  height: 60px;
  margin-bottom: 0;

  img {
    height: 35px;
  }
}
</style>
