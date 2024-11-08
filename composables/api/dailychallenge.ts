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
  userId_dailyChallengeId: any;
  status: boolean;
};

export const UpdateDailyChallenge = async (
  props: UpdateDailyChallengeProps
) => {
  const { userId_dailyChallengeId, status } = props;
  await prisma.dailyUser.update({
    data: {
      status,
    },
    where: {
      userId_dailyChallengeId,
    },
  });
};
export type UpdateWeeklyChallengeProps = {
  userId_weeklyChallengeId: any;
  status: boolean;
};

export const UpdateWeeklyChallenge = async (
  props: UpdateWeeklyChallengeProps
) => {
  const { userId_weeklyChallengeId, status } = props;
  await prisma.weeklyUser.update({
    data: {
      status,
    },
    where: {
      userId_weeklyChallengeId,
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
