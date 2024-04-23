import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const { userId } = auth();

    if (!userId) {
      console.log("User ID not found");
      return new NextResponse("user id not found", { status: 404 });
    }
    const user = await prisma.user.findFirst({
      where: {
        clerkId: userId,
      },
    });
    if (!user) {
      console.log("User not found in the database");
      return new NextResponse("user not found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(user));
  } catch (error) {
    console.error(`Error: ${error}`);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
