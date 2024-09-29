import ConnectDB from "@/database/db";

export const GET = async (req) => {
  const db = await ConnectDB();
  const params = req.nextUrl.searchParams;
  const roll = params.get("roll");
  const sql = `select * from students where roll=${roll}`;
  const [students] = await db.query(sql);
  return Response.json(students);
};
