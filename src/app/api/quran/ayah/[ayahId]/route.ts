import { getAyahImage } from "@/lib/quran";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: { ayahId: string } }
) {
  const image = await getAyahImage(params.ayahId);

  return new Response(image, {
    headers: { "content-type": "image/png" },
  });
}
