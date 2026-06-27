import Parser from "rss-parser";
import { createArticle, getArticleByUrl } from "./article.service";
import { mapRssToArticle } from "../mappers/article.mapper";
import { RSS_FEEDS } from "../rss.config";
import { CreateArticleInput, SyncResult } from "@/types/article";
import { MIN_PUBLISHED_DATE } from "../constants/min-published-date";

const parser = new Parser();

type RssFeed = (typeof RSS_FEEDS)[number];

function isRecentArticle(item: Parser.Item) {
  const publishedAt = new Date(item.isoDate ?? item.pubDate ?? Date.now());

  return publishedAt >= MIN_PUBLISHED_DATE;
}

async function saveArticleIfNotExists(article: CreateArticleInput) {
  const exists = await getArticleByUrl(article.url);

  if (exists) {
    return false;
  }

  await createArticle(article);

  return true;
}

async function syncFeed(rssFeed: RssFeed) {
  try {
    let saved = 0;

    const feed = await parser.parseURL(rssFeed.url);

    console.log(rssFeed.category, feed.items.length);

    const articles = feed.items
      .filter(isRecentArticle)
      .map((item) => mapRssToArticle(item, rssFeed.category));

    for (const article of articles) {
      const isSaved = await saveArticleIfNotExists(article);

      if (isSaved) {
        saved++;
      }
    }

    return saved;
  } catch (error) {
    console.error(`Failed to sync ${rssFeed.category}:`, error);

    return 0;
  }
}
export async function syncArticles(): Promise<SyncResult> {
  let saved = 0;

  for (const rssFeed of RSS_FEEDS) {
    saved += await syncFeed(rssFeed);
  }

  return {
    message: "Sync completed",
    saved,
  };
}
