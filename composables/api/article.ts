import prisma from "~/lib/prisma";

export type GetArticleByIdProps = {
  id: number;
};

export const GetArticleById = async (props: GetArticleByIdProps) => {
  const { id } = props;
  const article = await prisma.article.findUnique({
    where: {
      id,
    },
  });
  if (!article) {
    return null;
  }
  return article;
};

export const GetEveryArticle = async () => {
  const articleList = await prisma.article.findMany({
    take: 8,
  });
  return articleList;
};
