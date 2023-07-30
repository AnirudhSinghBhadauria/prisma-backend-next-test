import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { postNumber: "desc" },
    });

    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      errorMessage: "this is an error message",
    });
  }
}

export async function POST(data: Request) {
  try {
    const userList = await data.json();
    const users = await prisma.user.createMany({ data: userList });
    console.log(users);

    return NextResponse.json("OK");
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
        errorMessage: "this is a error mesage,sorry for inconvinience",
      },
      {
        status: 409,
      }
    );
  }
}
