import ConnectDB from "@/database/db";

export const DELETE = async (req) => {
  const db = await ConnectDB();
  const params = req.nextUrl.searchParams;
  const roll = params.get("roll");
  const sql = `delete from students where roll=${roll}`;
  const res = await db.query(sql);
  console.log(res);
  return new Response("Deleted Roll No : " + roll);
};
