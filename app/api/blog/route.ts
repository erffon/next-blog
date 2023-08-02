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
      { message: "posta recieved", posts },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error!", error }, { status: 500 });
  }
};
export const POST = async (request: Request, Response: NextResponse) => {};
