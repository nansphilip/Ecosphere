import { GetEveryFruit } from '~/composables/api/fruit';

export default defineEventHandler(async (event) => {
  const fruits = await GetEveryFruit();
  return fruits;
});