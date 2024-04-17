"use client";
import { cn } from "@/lib/utils";
import { PhoneCall } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import Sidebar from "./sidebar";
import { useRouter } from "next/navigation";
type Props = {
  locale: string;
};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const t = useTranslations("Navigation");
  return (
    <div className="flex flex-row justify-between items-center bg-[#38383b] fixed top-0 z-10 w-full">
      <aside className="pl-5 flex flex-row gap-2  ">
        <Button
          variant="outline"
          size="sm"
          className=" rounded-xl hidden md:block"
        >
          <Link href={`/${props.locale}/contactus`}>{t("Contact")}</Link>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="rounded-xl bg-[#38383b] border text-[#727273] border-[#727273] hover:text-black  hidden md:block"
        >
          {t("Login")}
        </Button>
        <div className="block md:hidden">
          <Sidebar locale={props.locale} />
        </div>
      </aside>
      <section className="hidden md:block text-right">
        <nav className="flex flex-row gap-x-5">
          <Link href={`/${props.locale}/`}>
            <p
              className={cn(
                "text-[#7f7f83] hover:text-[#c0c0c8]",
                pathname === `/${props.locale}`
                  ? "text-white hover:text-white"
                  : ""
              )}
            >
              {t("Home")}
            </p>
          </Link>
          <Link href={`/${props.locale}/about`}>
            <p
              className={cn(
                "text-[#7f7f83] hover:text-[#c0c0c8]",
                pathname === `/${props.locale}/about`
                  ? "text-white hover:text-white"
                  : ""
              )}
            >
              {t("About")}
            </p>
          </Link>
          <Link href={`/${props.locale}/services`}>
            <p
              className={cn(
                "text-[#7f7f83] hover:text-[#c0c0c8]",
                pathname === `/${props.locale}/services`
                  ? "text-white hover:text-white"
                  : ""
              )}
            >
              {t("Services")}
            </p>
          </Link>
          <Link href={`/${props.locale}/donate`}>
            <p
              className={cn(
                "text-[#7f7f83] hover:text-[#c0c0c8]",
                pathname === `/${props.locale}/services`
                  ? "text-white hover:text-white"
                  : ""
              )}
            >
              {t("Donate")}
            </p>
          </Link>
          <Link
            href={
              pathname.includes("he")
                ? `/ar/${pathname.split("/")[2] || ""}`
                : `/he/${pathname.split("/")[2] || ""}`
            }
          >
            <p className="text-[#7f7f83] hover:text-[#c0c0c8] underline-offset-2">
              {t("Lang")}
            </p>
          </Link>
          <Link href="tel:0524802045" className="flex flex-row  gap-2">
            <PhoneCall size={14} className="text-gray-400" />
            <p className="text-xs text-muted-foreground text-gray-400">
              0524802045
            </p>
          </Link>
        </nav>
      </section>
      <aside className="pr-5">
        <Image src={"/logo.png"} alt="logo" width={50} height={30} />
        <div className="md:block hidden relative text-ellipsis "></div>
      </aside>
    </div>
  );
};

export default Navbar;
