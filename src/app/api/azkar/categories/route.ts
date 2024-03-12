import { getAzkarCategories } from "@/lib/azkar";

export async function GET() {
  let data = getAzkarCategories();

  return Response.json([...data]);
}
