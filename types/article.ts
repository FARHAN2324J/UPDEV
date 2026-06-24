export type ArticleProps = {
  id: string;
  title: string;
  description?: string | null;
  url: string;
  category: string;
  source: string;
  publishedAt: Date;
};
