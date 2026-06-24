import Parser from "rss-parser";
import { ArticleInput } from "@/types/article";

type RSSItem = Parser.Item;

export function mapRssToArticle(item: RSSItem): ArticleInput {
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