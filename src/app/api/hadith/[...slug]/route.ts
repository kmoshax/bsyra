import { getBookChapter, getBookChaptersFromHadithList } from "@/lib/hadith";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: Array<any> } }
) {
  const bookId = params.slug[0];
  const chapterId = params.slug[1];

  try {
    if (chapterId) {
      const chapter = await getBookChapter(bookId, Number(chapterId));

      return Response.json([...chapter]);
    } else if (bookId) {
      const bookChapters = await getBookChaptersFromHadithList(bookId);

      return Response.json([...bookChapters]);
    } else {
      throw new Error("Error!");
    }
  } catch (error) {
    console.log(error);

    return new Response("Not Found", { status: 404 });
  }
}
