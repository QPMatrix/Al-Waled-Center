import { clerkClient } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { role, userId } = await req.json();
  await clerkClient.users.updateUserMetadata(userId, {
    privateMetadata: {
      role,
    },
  });
  return NextResponse.json("User updated successfully");
};
export const GET = async (req: NextRequest, res: NextResponse) => {
  const { userId } = await req.json();
  const user = await clerkClient.users.getUser(userId);
  return NextResponse.json(user.privateMetadata);
};
