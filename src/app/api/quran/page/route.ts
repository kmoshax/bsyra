import { getQuranPageImageTypes } from "@/lib/quran";

export async function GET() {
  let data = getQuranPageImageTypes();

  return Response.json(data);
}
