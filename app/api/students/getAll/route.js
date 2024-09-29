import ConnectDB from "@/database/db";

export const GET = async () => {
  const db = await ConnectDB();
  const query = "select * from students";
  const [students] = await db.query(query);
  return Response.json(students);
};
