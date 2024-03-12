import { getHadithList } from "@/lib/hadith";

export async function GET() {
  let data = getHadithList();

  return Response.json({ ...data });
}
