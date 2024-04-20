import { NextResponse } from "next/server";
import { currentUser, auth } from "@clerk/nextjs";
import prisma from "@/lib/prisma";
export const GET = async () => {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const user = await currentUser();
  if (!user) {
    return new NextResponse("User not found", { status: 404 });
  }
  const savedUser = await prisma.user.findUnique({
    where: {
      clerkId: user.id,
    },
  });
  if (!savedUser) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        firstName: user.firstName!,
        lastName: user.lastName!,
      },
    });
  }
  return new NextResponse(null, {
    status: 302,
    headers: {
      Location: "/",
    },
  });
};
