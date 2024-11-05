import { Login, LoginProps } from "~/composables/api/user";

export default defineEventHandler(async (event) => {
    const body: LoginProps = await readBody(event);
    const login = await Login(body);
    // If
    // Else
});
