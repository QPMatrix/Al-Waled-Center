"use client";
import React from "react";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu, PhoneIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Separator } from "../ui/separator";
const Sidebar = ({ locale }: { locale: string }) => {
  const pathname = usePathname();
  const t = useTranslations("Navigation");
  return (
    <Sheet modal>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Menu size={24} className="text-white hover:text-black" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-[#38383b] text-[#7f7f83] hover:text-[#c0c0c8]"
        showX
      >
        <nav className="flex flex-col gap-y-4 mt-10 justify-end items-end ">
          <Button variant="ghost">
            <Link href={`/${locale}/`}>
              <p
                className={cn(
                  "text-[#7f7f83] hover:text-[#c0c0c8]",
                  pathname === `/${locale}` ? "text-white hover:text-white" : ""
                )}
              >
                {t("Home")}
              </p>
            </Link>
          </Button>
          <Button variant="ghost">
            <Link href={`/${locale}/about`}>
              <p
                className={cn(
                  "text-[#7f7f83] hover:text-[#c0c0c8]",
                  pathname === `/${locale}/about`
                    ? "text-white hover:text-white"
                    : ""
                )}
              >
                {t("About")}
              </p>
            </Link>
          </Button>
          <Button variant="ghost">
            <Link href={`/${locale}/about`}>
              <p
                className={cn(
                  "text-[#7f7f83] hover:text-[#c0c0c8]",
                  pathname === `/${locale}/services`
                    ? "text-white hover:text-white"
                    : ""
                )}
              >
                {t("Services")}
              </p>
            </Link>
          </Button>
          <Button variant="ghost">
            <Link href={`/${locale}/donate`}>
              <p
                className={cn(
                  "text-[#7f7f83] hover:text-[#c0c0c8]",
                  pathname === `/${locale}/services`
                    ? "text-white hover:text-white"
                    : ""
                )}
              >
                {t("Donate")}
              </p>
            </Link>
          </Button>
        </nav>
        <Separator className="mt-2" />
        <div className="flex text-right mt-2 items-start justify-between">
          <Link
            href="tel:0524802045"
            className="text-[#7f7f83] text-sm flex-row mr-2"
          >
            <div className="flex flex-row text-left">
              <PhoneIcon size={14} />
              <p className="ml-2">0524802045</p>
            </div>
          </Link>
          <Button variant="ghost">
            <Link
              href={
                pathname.includes("he")
                  ? `/ar/${pathname.split("/")[2] || ""}`
                  : `/he/${pathname.split("/")[2] || ""}`
              }
            >
              <p className="text-[#7f7f83] hover:text-[#c0c0c8]">{t("Lang")}</p>
            </Link>
          </Button>
        </div>
        <SheetFooter>
          <div className="flex  flex-col justify-center bottom-0 mt-40 items-center">
            <Button variant="outline" className=" rounded-xl w-full ">
              {t("Contact")}
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
