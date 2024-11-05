import { GetUserById, GetUserByIdProps } from "~/composables/api/user";

export default defineEventHandler(async (event) => {
    const body: GetUserByIdProps = await readBody(event);
    const newFruit = await GetUserById(body);
    return newFruit;
});
