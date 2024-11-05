import prisma from "~/lib/prisma";

export type AddFruitProps = {
    name: string;
    description: string;
};

export const AddFruit = async (props: AddFruitProps) => {
    const { name, description } = props;
    const fruit = await prisma.fruit.create({
        data: {
            name,
            description,
        },
    });
    return fruit;
};

export const GetEveryFruit = async () => {
    const fruits = await prisma.fruit.findMany();
    return fruits;
};
