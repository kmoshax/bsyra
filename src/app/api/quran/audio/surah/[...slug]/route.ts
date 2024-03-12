import { getSurahAudio, getSurahAudioShikh } from "@/lib/quran";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: Array<any> } }
) {
  const shikhId = params.slug[0];
  const surahId = params.slug[1];

  try {
    if (shikhId && surahId) {
      const data = await getSurahAudio(shikhId, surahId);
      
      return new Response(data.data, {
        headers: { "content-type": "audio/mpeg" },
      });
    } else {
      const data = await getSurahAudioShikh(shikhId);
      return Response.json(data);
    }
  } catch (error) {
    console.log(error);

    return new Response("Not Found", { status: 404 });
  }
}
