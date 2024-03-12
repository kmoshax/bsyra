import {
  getRandomAzkaerByCategory,
  getRandomAzkar,
  getRandomAzkarBySearch,
  getRandomAzkarBySearchInCategory,
} from "@/lib/azkar";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = Number(searchParams.get("category"));
  const search = searchParams.get("search");

  let data;

  if (category && search) {
    data = getRandomAzkarBySearchInCategory(category, search);
  } else if (category) {
    data = getRandomAzkaerByCategory(category);
  } else if (search) {
    data = getRandomAzkarBySearch(search);
  } else {
    data = getRandomAzkar();
  }

  return Response.json({ ...data });
}
