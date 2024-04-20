import { ClerkProvider, currentUser } from "@clerk/nextjs";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <div className="bg-black text-white">{children}</div>
    </ClerkProvider>
  );
};

export default Layout;
