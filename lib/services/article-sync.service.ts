import Parser from "rss-parser";
import { createArticle, getArticleByUrl } from "./article.service";
import { mapRssToArticle } from "../mappers/article.mapper";

const parser = new Parser();

export async function syncArticles() {
  const feed = await parser.parseURL("https://nextjs.org/feed.xml");

  const articles = feed.items.map((item) => mapRssToArticle(item));

  let saved = 0;

  for (const article of articles) {
    const exists = await getArticleByUrl(article.url);

    if (exists) {
      continue;
    }

    await createArticle(article);
    saved++;
  }

  return {
    message: "Sync completed",
    saved,
  };
}
