import { profile } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

const validIds = new Set(profile.links.map((link) => link.id));

export async function POST(request: Request) {
  let id: unknown;
  try {
    ({ id } = await request.json());
  } catch {
    return Response.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  if (typeof id !== "string" || !validIds.has(id)) {
    return Response.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  try {
    const clicks = await getClicksCollection();
    await clicks.updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });
  } catch (error) {
    console.error("클릭 수 저장 실패:", error);
    return Response.json({ error: "저장에 실패했습니다." }, { status: 500 });
  }

  return new Response(null, { status: 204 });
}
