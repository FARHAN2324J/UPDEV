import { revalidatePath } from "next/cache";
import { syncArticles } from "@/lib/services/article-sync.service";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      },
    );
  }

  try {
    const result = await syncArticles();

    revalidatePath("/");

    return Response.json(result);
  } catch (error) {
    console.error("Sync failed:", error);

    return Response.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}
