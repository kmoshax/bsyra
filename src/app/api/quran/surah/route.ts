import { getMushafSurahsList } from "@/lib/quran";

export async function GET() {
  let data = getMushafSurahsList();

  return Response.json([...data]);
}
