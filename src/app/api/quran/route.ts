import { getQuranRoutes } from "@/lib/quran";

export async function GET() {
  let data = getQuranRoutes();

  return Response.json({ ...data });
}
