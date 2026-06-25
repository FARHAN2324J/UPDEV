import { categoryClass } from "@/lib/utils/categoryStyle";
import { ArticleProps } from "@/types/article";

type ArticleCardProps = {
    article: ArticleProps;
};

export default function ArticleCard({ article }: ArticleCardProps) {
    const hasDescription =
        Boolean(article.description?.trim());

    const publishedAt =
        new Date(article.publishedAt);

    const publishedDate =
        publishedAt.toLocaleDateString(
            "en-US",
            {
                day: "numeric",
                month: "short",
                year: "numeric",
            }
        );
        
    return (
        <article className="article-card">
            <div className="mb-3">
                <time
                    dateTime={publishedAt.toISOString()}
                    className="article-date"
                >
                    {publishedDate}
                </time>
            </div>

            <h2 className="article-title">
                {article.title}
            </h2>

            {hasDescription && (
                <p className="article-description">
                    {article.description}
                </p>
            )}

            <div className="flex items-center justify-between mt-auto">
                <span className={`badge ${categoryClass(article.category)}`}>
                    {article.category}
                </span>

                <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read article: ${article.title}`}
                >
                    <svg
                        className="icon-link"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </a>
            </div>
        </article>
    );
}