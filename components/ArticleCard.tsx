import { ArticleProps } from "@/types/article";

type ArticleCardProps = {
    article: ArticleProps;
};

export default function ArticleCard({ article }: ArticleCardProps) {
    return (
        <article className="article-card">
            <div className="mb-3">
                <time
                    dateTime={new Date(article.publishedAt).toISOString()} className="article-date"
                >
                    {new Date(article.publishedAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                    })}
                </time>
            </div>

            <h2 className="article-title">
                {article.title}
            </h2>

            <p className="article-description">
                {article.description}
            </p>

            <div className="flex items-center justify-between mt-auto">
                <span className="rounded-md bg-[#bf7aef]/15 px-2 py-0.5 text-[14px] font-semibold text-[#bf7aef] border-2 border-[#bf7aef]/15">
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