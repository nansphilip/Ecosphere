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
      points: 100,
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
      id,
    },
    include: {
      daily: {
        select: {
          status: true,
          date: true,
          DailyChallenge: {
            select: {
              name: true,
              description: true,
              difficulty: true,
              points: true,
              image: true,
            },
          },
        },
      },
      weekly: {
        select: {
          status: true,
          date: true,
          WeeklyChallenge: {
            select: {
              name: true,
              description: true,
              difficulty: true,
              points: true,
              image: true,
            },
          },
        },
      },
    },
  });

  if (!user) {
    return null;
  }

  return user;

  // const userFormatted = {
  //   ...user,
  //   daily: {
  //     ...user.daily[0],
  //     ...user.daily[0].DailyChallenge,
  //     AddDailyChallenge: false,
  //   },
  //   weekly: {
  //     ...user.weekly[0],
  //     ...user.weekly[0].WeeklyChallenge,
  //     AddWeeklyChallenge: false,
  //   },
  // };

  // return userFormatted;
};

export type GetUserByUsernameProps = {
  username: string;
};

export const GetUserByUsername = async (props: GetUserByUsernameProps) => {
  const { username } = props;
  const user = await prisma.user.findUnique({
    select: {
      id: true,
      username: true,
      password: true,
    },
    where: {
      username,
    },
  });
  if (!user) {
    return null;
  }
  return user;
};

export const GetEveryUser = async () => {
  const userList = await prisma.user.findMany();
  return userList;
};
