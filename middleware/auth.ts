import { useCookie } from "#app";

export default defineNuxtRouteMiddleware(() => {
  const authToken = useCookie("auth_token"); // Vérifie le cookie auth_token

  // Si le cookie est absent, redirige vers la page de connexion
  if (!authToken.value) {
    return navigateTo("/login");
  }
});
