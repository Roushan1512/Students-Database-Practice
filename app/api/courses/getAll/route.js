import ConnectDB from "@/database/db";

export const GET = async () => {
  const db = await ConnectDB();
  const [courses] = await db.query("select * from courses");
  return Response.json(courses);
};
