import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import { getArticles } from "@/lib/services/article.service";

export default async function Home() {
  const articles = await getArticles();

  return (
    <main>
      <Hero />
      <section className="px-4 py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
          />
        ))}
      </section>

    </main>
  );
}