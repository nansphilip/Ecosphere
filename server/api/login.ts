import { GetUserByUsername } from "~/composables/api/user";
import { ComparePassword } from "~/composables/lib/bcrypt";

export default defineEventHandler(async (event) => {
  const body: { username: string; password: string } = await readBody(event);

  // Get user by username
  const user = await GetUserByUsername(body);

  if (!user) {
    return null;
  }

  const { password: hashedPassword } = user;
  const { password } = body;

  // Check password
  const arePasswordSame = await ComparePassword({ password, hashedPassword });

  return arePasswordSame ? user : null;
});
