import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function getArticles() {
  return prisma.article.findMany({
    orderBy: {
      publishedAt: "desc",
    },
  });
}

export async function getArticleByUrl(url: string) {
  return prisma.article.findUnique({
    where: {
      url,
    },
  });
}

export async function createArticle(data: Prisma.ArticleCreateInput) {
  return prisma.article.upsert({
    where: {
      url: data.url,
    },
    update: {},
    create: data,
  });
}
