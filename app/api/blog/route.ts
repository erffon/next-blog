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

export const GET = async (request: Request, Response: NextResponse) => {};
export const POST = async (request: Request, Response: NextResponse) => {};
