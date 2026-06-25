import { ArticleProps } from "@/types/article";
import Parser from "rss-parser";

type RSSItem = Parser.Item;

export function mapRssToArticle(
  item: RSSItem,
  category: string,
): ArticleProps {
  return {
    title: item.title ?? "",
    description: item.contentSnippet ?? null,
    url: item.link ?? "",
    category,
    publishedAt: new Date(item.isoDate ?? item.pubDate ?? Date.now()),
  };
}
