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

export type AddUserFriendProps = {
  userId: number;
  newFriendList: string[];
};

export const AddUserFriend = async (props: AddUserFriendProps) => {
  const { userId, newFriendList } = props;

  // Convert array to string joined by comma
  const newFriendListFormatted = newFriendList.join(",");

  const user = await prisma.user.update({
    data: {
      friends: newFriendListFormatted,
    },
    where: {
      id: userId,
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

  const userFormatted = {
    id: user.id,
    username: user.username,
    password: user.password,
    points: user.points,
    friends: user.friends,
    dailys: user.daily.map((daily) => ({
      name: daily.DailyChallenge.name,
      description: daily.DailyChallenge.description,
      difficulty: daily.DailyChallenge.difficulty,
      points: daily.DailyChallenge.points,
      image: daily.DailyChallenge.image,
      status: daily.status,
      date: daily.date,
    })),
    weeklys: user.weekly.map((weekly) => ({
      name: weekly.WeeklyChallenge.name,
      description: weekly.WeeklyChallenge.description,
      difficulty: weekly.WeeklyChallenge.difficulty,
      points: weekly.WeeklyChallenge.points,
      image: weekly.WeeklyChallenge.image,
      status: weekly.status,
      date: weekly.date,
    })),
  };

  return userFormatted;
};

export type GetUserFriendsByIdProps = {
  id: number;
};

export const GetUserFriendsById = async (props: GetUserFriendsByIdProps) => {
  const { id } = props;
  const user = await prisma.user.findUnique({
    select: {
      friends: true,
    },
    where: {
      id,
    },
  });
  if (!user || !user.friends) {
    return null;
  }

  const friendList = await Promise.all(
    user.friends.split(",").map(async (friendId) =>
      prisma.user.findUnique({
        where: {
          id: Number(friendId),
        },
        select: {
          id: true,
          username: true,
          points: true,
        },
      })
    )
  );

  return friendList;
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
