export async function GET() {
  return Response.json({
    ayah: "/api/quran/audio/ayah",
    surah: "/api/quran/audio/surah",
  });
}
