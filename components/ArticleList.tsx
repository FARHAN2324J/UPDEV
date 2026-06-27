import { ArticleProps } from "@/types/article";
import ArticleCard from "./ArticleCard";

type ArticleListProps = {
    articles: ArticleProps[];
};

export default function ArticleList({
    articles,
}: ArticleListProps) {
    if (articles.length === 0) {
        return (
            <section className="px-4 py-10 text-center">
                <p className="text-text-muted">
                    No articles found.
                </p>
            </section>
        );
    }
    return (
        <section className="px-4 py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {articles.map((article) => (
                <ArticleCard
                    key={article.id}
                    article={article}
                />
            ))}
        </section>
    );
}