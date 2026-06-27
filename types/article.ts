export type ArticleProps = {
  id: string;
  title: string;
  description?: string | null;
  url: string;
  category: string;
  publishedAt: Date;
};

export type CreateArticleInput = Omit<ArticleProps, "id">;

export type SyncResult = {
  message: string;
  saved: number;
};