import { prisma } from "@/lib/prisma";
import { ArticleProps } from "@/types/article";

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

export async function createArticle(data: ArticleProps) {
  return prisma.article.upsert({
    where: {
      url: data.url,
    },
    update: {},
    create: data,
  });
}
