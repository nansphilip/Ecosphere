import { GetEveryArticle } from "~/composables/api/article";

export default defineEventHandler(async () => {
  const userList = await GetEveryArticle();
  return userList;
});
