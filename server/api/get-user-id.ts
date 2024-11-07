import { GetUserById, GetUserByIdProps } from "~/composables/api/user";

export default defineEventHandler(async (event) => {
  const body: GetUserByIdProps = await readBody(event);
  const user = await GetUserById(body);
  return user;
});
