import { getSurahAudioList } from "@/lib/quran";

export async function GET() {
  const data = await getSurahAudioList();

  const forAble = data.map((item: any) => {
    delete item.server;
    return item;
  });

  return Response.json(forAble);
}
