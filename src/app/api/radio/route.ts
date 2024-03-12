import { getRadioList } from "@/lib/radio";

export async function GET() {
  let data = getRadioList();

  return Response.json([...data]);
}
