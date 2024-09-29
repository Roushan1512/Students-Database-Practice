import ConnectDB from "@/database/db";

export const POST = async (req) => {
  const db = await ConnectDB();
  const data = await req.json();
  const { roll, subject, course } = data;
  const sql = `insert into courses values (${roll}, "${subject}", "${course}")`;
  const res = await db.query(sql);
  return new Response("Done");
};
