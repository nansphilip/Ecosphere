import {
  UpdateWeeklyChallenge,
  UpdateWeeklyChallengeProps,
} from "~/composables/api/dailychallenge";

export default defineEventHandler(async (event) => {
  const body: UpdateWeeklyChallengeProps = await readBody(event);
  await UpdateWeeklyChallenge(body);
});
