import { Register, RegisterProps } from "~/composables/api/user";

export default defineEventHandler(async (event) => {
    const body: RegisterProps = await readBody(event);
    const register = await Register(body);
    // If
    // Else
});
