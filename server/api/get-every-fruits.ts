import { GetEveryFruit } from "~/composables/api/fruit";

export default defineEventHandler(async () => {
    const fruitList = await GetEveryFruit();
    return fruitList;
});
