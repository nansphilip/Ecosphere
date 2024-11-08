import {
  UpdateDailyChallenge,
  UpdateDailyChallengeProps,
} from "~/composables/api/dailychallenge";

export default defineEventHandler(async (event) => {
  const body: UpdateDailyChallengeProps = await readBody(event);
  await UpdateDailyChallenge(body);
});
