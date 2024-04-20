import { SignIn } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn signUpUrl="/auth/sign-up" afterSignInUrl="/" />
    </div>
  );
};

export default Page;
