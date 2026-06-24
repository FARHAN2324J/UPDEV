import { syncArticles } from "@/lib/services/article-sync.service";


export async function GET() {
  const result = await syncArticles();

  return Response.json(result);
}