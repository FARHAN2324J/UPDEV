import { getArticles } from "@/lib/services/article.service";

export async function GET() {
  const articles = await getArticles();

  return Response.json(articles);
}
