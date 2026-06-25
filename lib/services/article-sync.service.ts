import Parser from "rss-parser";
import { createArticle, getArticleByUrl } from "./article.service";
import { mapRssToArticle } from "../mappers/article.mapper";
import { RSS_FEEDS } from "../rss.config";

const parser = new Parser();
const MIN_DATE = new Date("2025-01-01");

export async function syncArticles() {
  let saved = 0;

  for (const rssFeed of RSS_FEEDS) {
    const feed = await parser.parseURL(rssFeed.url);
    console.log(rssFeed.category, feed.items.length);

    const articles = feed.items
      .filter((item) => {
        const publishedAt = new Date(
          item.isoDate ?? item.pubDate ?? Date.now(),
        );

        return publishedAt >= MIN_DATE;
      })
      .map((item) => mapRssToArticle(item, rssFeed.category));

    for (const article of articles) {
      const exists = await getArticleByUrl(article.url);

      if (exists) {
        continue;
      }

      await createArticle(article);
      saved++;
    }
  }

  return {
    message: "Sync completed",
    saved,
  };
}
