import { NextResponse } from "next/server";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  try {
    await prisma.$connect();
    console.log("connected to DB successfully ✅");
  } catch (error) {
    await prisma.$disconnect();
    return Error("connection to DB failed ⛔️");
  }
}

export const GET = async (request: Request, Response: NextResponse) => {
  try {
    await main();
    const posts = await prisma.post.findMany();
    return NextResponse.json(
      { message: "posts recieved", posts },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error!", error }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};
export const POST = async (request: Request, Response: NextResponse) => {
  try {
    await main();
    const { title, description } = await request.json();
    const post = await prisma.post.create({
      data: {
        title,
        description,
      },
    });
    console.log("new post added successfully ✅");
    return NextResponse.json(
      { message: "new post added", post },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error!", error }, { status: 500 });
  }
};
