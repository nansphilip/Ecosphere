import prisma from "~/lib/prisma";

export const GetEveryFruit = async () => {
    const fruits = await prisma.fruit.findMany();
    return fruits;
};
