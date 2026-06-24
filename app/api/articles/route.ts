import { getArticles, createArticle } from "@/lib/services/article.service";


export async function GET() {
  const articles = await getArticles();

  return Response.json(articles);
}


export async function POST(request: Request) {
  const body = await request.json();

  const article = await createArticle({
    ...body,
    publishedAt: new Date(body.publishedAt),
  });

  return Response.json(article);
}