import { getRandomHadith } from "@/lib/hadith";

export const dynamic = "force-dynamic";

export async function GET() {
  let data = await getRandomHadith();

  return Response.json({...data});
}
