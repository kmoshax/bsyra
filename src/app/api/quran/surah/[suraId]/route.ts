import { getSurah } from "@/lib/quran";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { suraId: string } }
) {
  let data = await getSurah(Number(params.suraId));

  return Response.json({ ...data });
}
