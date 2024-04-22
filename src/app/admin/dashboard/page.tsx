import Header from "@/components/admin/header";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const user = await currentUser();

  if (user?.privateMetadata.role !== "admin") {
    redirect("/");
  }
  return <Header />;
};

export default Page;
