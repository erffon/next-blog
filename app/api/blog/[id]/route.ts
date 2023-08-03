import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { main } from "../route";

const prisma = new PrismaClient();
export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    await main();
    const id = req.url.split("/blog/")[1];
    const post = prisma.post.delete({ where: { id } });
    return NextResponse.json(
      { message: "post has been deleted ✅", post },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error!", error }, { status: 500 });
  } finally {
  }
};
