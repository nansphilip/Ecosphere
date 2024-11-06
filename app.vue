<template>
  <div class="container-phone">
    <NuxtLayout>
      <!-- <NuxtRouteAnnouncer /> -->
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
  font-family: "Montserrat", sans-serif;
  .container-phone {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 375px;
    height: 667px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #fff;
    overflow-y: auto;
  }
}
</style>
