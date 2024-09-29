import ConnectDB from "@/database/db";

export const GET = async (req) => {
  const db = await ConnectDB();
  const params = await req.nextUrl.searchParams;
  const name = params.get("name");
  const sql = `select courses.*, students.name from students inner join courses on students.roll=courses.roll where students.name="${name}"`;
  const [course] = await db.query(sql);
  return Response.json(course);
};
