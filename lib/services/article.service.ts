import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { ARTICLES_PER_PAGE } from "../constants/pagination";

export async function getArticles(page: number, category?: string) {
  return prisma.article.findMany({
    where: category
      ? {
          category,
        }
      : undefined,

    orderBy: {
      publishedAt: "desc",
    },

    skip: (page - 1) * ARTICLES_PER_PAGE,

    take: ARTICLES_PER_PAGE,
  });
}

export async function getArticlesTotalPages(category?: string) {
  const totalArticles = await prisma.article.count({
    where: category
      ? {
          category,
        }
      : undefined,
  });

  return Math.max(1, Math.ceil(totalArticles / ARTICLES_PER_PAGE));
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
