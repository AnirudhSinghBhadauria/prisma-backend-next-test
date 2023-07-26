import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const prisma = new PrismaClient();

  const user = await prisma.post.findMany({
    where: {
      author: { is: { name: "Kendrick Lamar" } },
    },
  });


  return NextResponse.json({user});
}
