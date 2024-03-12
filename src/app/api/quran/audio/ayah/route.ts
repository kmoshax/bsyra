import { getAyahAudioList } from "@/lib/quran";

export async function GET() {
  const data = getAyahAudioList();

  const forAble = data.map((item: any) => {
    delete item.repo;
    return item;
  });

  return Response.json(forAble);
}
