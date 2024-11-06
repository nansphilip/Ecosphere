import { AddFruit } from "~/composables/api/fruit";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const newFruit = await AddFruit(body);

    return newFruit;
});
