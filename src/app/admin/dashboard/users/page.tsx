import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import prisma from "@/lib/prisma";

const Page = async () => {
  const data = await prisma.user.findMany();
  return (
    <div className="flex  mt-40 pr-40 min-h-screen">
      <div className="container mx-auto">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Page;
