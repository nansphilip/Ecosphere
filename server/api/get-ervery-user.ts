import { GetEveryUser } from "~/composables/api/user";

export default defineEventHandler(async () => {
    const userList = await GetEveryUser();
    return userList;
});
