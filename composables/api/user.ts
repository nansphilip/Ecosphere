import prisma from "~/lib/prisma";

export type AddUserProps = {
    username: string;
    password: string;
};

export const AddUser = async (props: AddUserProps) => {
    const { username, password } = props;
    const user = await prisma.user.create({
        data: {
            username,
            password,
            points: 100
        },
    });
    return user;
};

export type GetUserByIdProps = {
    id: number;
};

export const GetUserById = async (props: GetUserByIdProps) => {
    const { id } = props;
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    });
    if (!user) {
        return null;
    }
    return user;
}

export type GetUserByUsernameProps = {
    username: string;
};

export const GetUserByUsername = async (props: GetUserByUsernameProps) => {
    const { username } = props;
    const user = await prisma.user.findUnique({
        where: {
            username
        }
    });
    return user;
}

export const GetEveryUser = async () => {
    const userList = await prisma.user.findMany();
    return userList;
};
