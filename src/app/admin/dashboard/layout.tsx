import Sidebar from "@/components/admin/sidebar";
import { heIL } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider localization={heIL}>
      {children}
      <Sidebar />
    </ClerkProvider>
  );
};

export default Layout;
