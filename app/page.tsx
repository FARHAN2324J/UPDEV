export const dynamic = "force-dynamic";

import Hero from "@/components/Hero";
import { getArticles } from "@/lib/services/article.service";
import ArticleList from "@/components/ArticleList";

export default async function Home() {
  const articles = await getArticles();
  return (
    <main>
      <Hero />
      <ArticleList articles={articles} />
    </main>
  );
}