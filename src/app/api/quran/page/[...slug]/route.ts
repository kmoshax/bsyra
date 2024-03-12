import axios from "axios";
import { getQuranPageImage, getQuranPagesForType } from "@/lib/quran";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: Array<any> } }
) {
  const pageType = params.slug[0];
  const pageNumber = Number(params.slug[1]);

  try {
    if (pageType && pageNumber) {
      const image = await getQuranPageImage(pageType, pageNumber);

      return new Response(image, {
        headers: { "content-type": "image/png" },
      });
    } else if (pageType) {
      const pages = await getQuranPagesForType(pageType);

      return Response.json(pages);
    }
  } catch (error) {
    console.log(error);

    return new Response("Not Found", { status: 404 });
  }
}
