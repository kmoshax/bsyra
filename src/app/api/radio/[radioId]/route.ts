import { getRadioById } from "@/lib/radio";
import axios from "axios";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: { radioId: string } }
) {
  let radioId = Number(params.radioId);

  let radio = getRadioById(radioId);

  const respond = await axios.get(radio?.url as string, {
    responseType: "stream",
  });

  return new Response(respond.data, {
    headers: { "content-type": "audio/mpeg" },
  });
}
