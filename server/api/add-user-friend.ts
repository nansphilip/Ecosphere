import { AddUserFriend, AddUserFriendProps } from "~/composables/api/user";

export default defineEventHandler(async (event) => {
  const body: AddUserFriendProps = await readBody(event);
  const user = await AddUserFriend(body);
  return user;
});
