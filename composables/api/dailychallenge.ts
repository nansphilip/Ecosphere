import prisma from "~/lib/prisma";

export type AddDailyChallengeProps = {
  name: string;
  description: string;
  difficulty: number;
  points: number;
};

export const AddDailyChallenge = async (props: AddDailyChallengeProps) => {
  const { name, description, difficulty, points } = props;
  const dailyChallenge = await prisma.dailyChallenge.create({
    data: {
      name,
      description,
      difficulty,
      points,
    },
  });
  return dailyChallenge;
};

export type UpdateDailyChallengeProps = {
  status: boolean;
  userId: number;
  dailyChallengeId: number;
};

export const UpdateDailyChallenge = async (
  props: UpdateDailyChallengeProps
) => {
  const { status, userId, dailyChallengeId } = props;
  console.log(status, userId, dailyChallengeId);
  await prisma.dailyUser.update({
    data: {
      status,
    },
    where: {
      userId_dailyChallengeId: {
        userId,
        dailyChallengeId
      }
    },
  });
};

export type UpdateWeeklyChallengeProps = {
  status: boolean;
  userId: number;
  weeklyChallengeId: number;
};

export const UpdateWeeklyChallenge = async (
  props: UpdateWeeklyChallengeProps
) => {
  const { status, userId, weeklyChallengeId } = props;
  console.log(status, userId, weeklyChallengeId);
  await prisma.weeklyUser.update({
    data: {
      status,
    },
    where: {
      userId_weeklyChallengeId: {
        userId,
        weeklyChallengeId
      }
    },
  });
};

export type GetDailyChallengeByIdProps = {
  id: number;
};

export const GetDailyChallengeById = async (
  props: GetDailyChallengeByIdProps
) => {
  const { id } = props;
  const dailyChallenge = await prisma.dailyChallenge.findUnique({
    where: {
      id,
    },
  });
  return dailyChallenge;
};

export const GetEveryDailyChallenge = async () => {
  const dailyChallengeList = await prisma.dailyChallenge.findMany();
  return dailyChallengeList;
};
