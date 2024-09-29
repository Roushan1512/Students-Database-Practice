import ConnectDB from "@/database/db";

export const POST = async (req) => {
  const db = await ConnectDB();
  const data = await req.json();
  const { name, age, batch } = data;
  const sql = `insert into students (name, age, batch) values ("${name}", ${age}, "${batch}")`;
  const res = db.query(sql);
  console.log(res);
  return new Response("Done");
};
