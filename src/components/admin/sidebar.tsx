"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Sheet, SheetContent, SheetHeader } from "../ui/sheet";
import { UserButton, useUser } from "@clerk/nextjs";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import AdminRoutes from "@/app/constants/admin-routes";
import Link from "next/link";

const Sidebar = () => {
  const { user } = useUser();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const defaultOpen = true;
  const openState = useMemo(
    () => (defaultOpen ? { open: true } : {}),
    [defaultOpen]
  );
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <aside>
      <Sheet {...openState} modal={false}>
        <SheetContent className="w-40">
          <SheetHeader>
            <h1 className="text-xl font-bold">לוח בקרה</h1>
            <div className="flex flex-row">
              <p className="mr-4">{user?.fullName}</p>
              <UserButton afterSignOutUrl="/" />
            </div>
          </SheetHeader>
          <Separator className="w-full mt-4 bg-black" />
          <nav className="flex flex-col gap-y-4 mt-4">
            {AdminRoutes.map((route) => (
              <Button
                key={route.path}
                variant={"ghost"}
                className={cn(
                  "rounded-none w-full",
                  pathname === route.path
                    ? "bg-[#38383b] text-white hover:bg-[#38383b] hover:text-white"
                    : ""
                )}
              >
                <Link href={route.path}>{route.title}</Link>
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </aside>
  );
};

export default Sidebar;
