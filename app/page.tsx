import Hero from "@/components/Hero";
import { getArticlesPageCount, getArticles } from "@/lib/services/article.service";
import ArticleList from "@/components/ArticleList";
import Pagination from "@/components/Pagination";

type HomeProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;

  const currentPage = Math.max(1, Number(params.page) || 1);

  const articles = await getArticles(currentPage);

  const totalPages = await getArticlesPageCount();

  return (
    <main>
      <Hero />
      <ArticleList articles={articles} />
      {totalPages > 1 && (
        <Pagination totalPages={totalPages} />
      )}
    </main>
  );
}