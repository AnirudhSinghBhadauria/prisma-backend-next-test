import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  const posts = await prisma.post.findMany({
    orderBy: { postNumber: "desc" },
  });

  return NextResponse.json({ posts }, { status: 200 });
}

export async function POST(data: Request) {
  try {
    const userList = await data.json();
    const users = await prisma.user.createMany({ data: userList });
    console.log(users);

    return NextResponse.json("OK");
  } catch (error) {
    return NextResponse.json(
      { error: error },
      {
        status: 409,
      }
    );
  }
}
