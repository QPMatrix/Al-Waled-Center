import { SignIn } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen text-right">
      <SignIn signUpUrl="/auth/sign-up" afterSignInUrl="/api/auth/" />
    </div>
  );
};

export default Page;
