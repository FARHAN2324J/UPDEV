export type ArticleProps = {
  title: string;
  description?: string | null;
  url: string;
  category: string;
  source: string;
  publishedAt: Date;
};