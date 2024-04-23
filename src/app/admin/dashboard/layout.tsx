import Sidebar from "@/components/admin/sidebar";
import { heIL } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";

import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider localization={heIL}>
      <Head>
        <title>ממשק מנהל</title>
      </Head>
      <div>
        {children}
        <Sidebar />
      </div>
    </ClerkProvider>
  );
};

export default Layout;
