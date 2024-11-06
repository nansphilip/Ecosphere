import prisma from "~/lib/prisma";
import { articleData, dailyChallengeData, dailyUserData, fruitData, recommendedChallengeData, userData, weeklyChallengeData, weeklyUserData } from "./data";

const main = async () => {
    for (const { id, username, password, points, friends } of userData) {
        await prisma.user.create({
            data: { id, username, password, points, friends },
        });
    }

    for (const { id, name, description, difficulty, points } of dailyChallengeData) {
        await prisma.dailyChallenge.create({
            data: { id, name, description, difficulty, points },
        });
    }
    
    for (const { id, name, description, difficulty, points } of weeklyChallengeData) {
        await prisma.weeklyChallenge.create({
            data: { id, name, description, difficulty, points },
        });
    }
    for (const { date, userId, dailyChallengeId } of recommendedChallengeData) {
        await prisma.recommendedChallenge.create({
            data: { date, userId, dailyChallengeId },
        });
    }

    for (const { status, date, userId, weeklyChallengeId } of weeklyUserData) {
        await prisma.weeklyUser.create({
            data: { status, date, userId, weeklyChallengeId },
        });
    }
    
    for (const { status, date, userId, dailyChallengeId } of dailyUserData) {
        await prisma.dailyUser.create({
            data: { status, date, userId, dailyChallengeId },
        });
    }

    for (const { title, image, text, createdAt, updatedAt } of articleData) {
        await prisma.article.create({
            data: { title, image, text, createdAt, updatedAt },
        });
    }
    
    for (const { name, description } of fruitData) {
        await prisma.fruit.create({
            data: { name, description },
        });
    }
};

// Execute script
main();
