import Hero from "@/components/Hero";
import { getArticlesTotalPages, getArticles } from "@/lib/services/article.service";
import ArticleList from "@/components/ArticleList";
import Pagination from "@/components/Pagination";
import CategoryFilter from "@/components/CategoryFilter";

type HomeProps = {
  searchParams: Promise<{
    page?: string;
    category?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;

  const currentPage = Math.max(1, Number(params.page) || 1);

  const category = params.category ?? undefined;

  const articles = await getArticles(
    currentPage,
    category
  );

  const totalPages = await getArticlesTotalPages(category);

  return (
    <main>
      <Hero />

      <CategoryFilter />

      <ArticleList articles={articles} />

      {totalPages > 1 && (
        <Pagination totalPages={totalPages} />
      )}
    </main>
  );
}