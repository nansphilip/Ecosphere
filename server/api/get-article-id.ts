import { GetArticleById, GetArticleByIdProps } from "~/composables/api/article";

export default defineEventHandler(async (event) => {
  const body: GetArticleByIdProps = await readBody(event);
  const user = await GetArticleById(body);
  return user;
});
