import { AddFruit } from "~/composables/api/fruits";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const fruit = await AddFruit(body);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fruit);
        }, 1000);
    });
});
