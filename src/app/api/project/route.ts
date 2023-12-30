import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  let result = await sql`SELECT * FROM ProjectForm`;
  return NextResponse.json({ result });
}
export async function POST(req: Request) {
  const data = await req.json();
  sql`INSERT INTO ProjectForm VALUES(${data.StudentId},${data.name},${data.fatherName},${data.SupervisorName},${data.ProjectTitle},${data.gender},${data.department},${data.mail})`;
  console.log(data);
  return NextResponse.json({ status: "all ok" });
}
