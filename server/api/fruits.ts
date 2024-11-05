import { GetEveryFruit } from "~/composables/api/fruits";

export default defineEventHandler(async (event) => {
    const fruits = await GetEveryFruit();
    return fruits;
});
