import { getAyahAudio } from "@/lib/quran";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: Array<any> } }
) {
  const shikhId = params.slug[0];
  const ayah = params.slug[1];

  try {
    if (shikhId && ayah) {
      const data = await getAyahAudio(shikhId, ayah);

      return new Response(data.data, {
        headers: { "content-type": "audio/mpeg" },
      });
    } else {
      return Response.json({
        message: "Please write a ayah id in the slug",
        info: {
          text: "ayah id must to be 6 numbers.. first 3 numbers as surah number and last 3 numbers as ayah number",
          example: {
            path: "/api/quran/audio/ayah/:shikhId/002003",
            explane: "this is a thired ayah in Al-Baqarah surah",
          },
        },
      });
    }
  } catch (error) {
    console.log(error);

    return new Response("Not Found", { status: 404 });
  }
}
