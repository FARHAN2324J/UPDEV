import { ArticleInput } from "@/types/article";

export function mapRssToArticle(item: any): ArticleInput {
  return {
    title: item.title ?? "",
    description: item.contentSnippet ?? null,
    url: item.link ?? "",
    category: "Next.js",
    source: "Next.js Blog",
    publishedAt: new Date(
      item.isoDate ?? item.pubDate ?? Date.now()
    ),
  };
}