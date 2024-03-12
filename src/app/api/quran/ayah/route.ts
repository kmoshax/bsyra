export async function GET() {
  return Response.json({
    message: "Please write a ayah id in the slug",
    info: {
      text: "ayah id must to be 6 numbers.. first 3 numbers as surah number and last 3 numbers as ayah number",
      example: {
        path: "/api/quran/ayah/002003",
        explane: "this is a thired ayah in Al-Baqarah surah",
      },
    },
  });
}
