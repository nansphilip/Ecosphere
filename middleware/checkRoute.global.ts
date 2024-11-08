import { defineNuxtRouteMiddleware, useRouter } from '#app';

export default defineNuxtRouteMiddleware((to) => {
  const router = useRouter();
  const availableRoutes = router.getRoutes().map(route => route.path); 


  if (!availableRoutes.includes(to.path)) {
    return navigateTo('/404'); 
  }
});
