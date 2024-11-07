import {
  GetUserFriendsByIdProps,
  GetUserFriendsById,
} from "~/composables/api/user";

export default defineEventHandler(async (event) => {
  const body: GetUserFriendsByIdProps = await readBody(event);
  const friendList = await GetUserFriendsById(body);
  console.log("HEllo", friendList);
  return friendList;
});
