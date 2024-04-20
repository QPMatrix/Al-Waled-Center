import { SignUp } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignUp signInUrl="/auth/sign-in" afterSignUpUrl="/" />
    </div>
  );
};

export default Page;