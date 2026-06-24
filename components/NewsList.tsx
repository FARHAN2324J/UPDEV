import { mockNews } from "../data/mocknews";
import NewsCard from "./NewsArticle";

export default function NewsList() {
    return (
        <section className="
        grid
        gap-6
        md:grid-cols-2
        lg:grid-cols-3
      ">
            {mockNews.map((item) => (
                <NewsCard
                    key={item.id}
                    news={item}
                />
            ))}
        </section>
    );
}