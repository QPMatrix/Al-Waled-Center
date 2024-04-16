import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { Separator } from "../ui/separator";

const Activities = () => {
  const t = useTranslations("Activities");
  return (
    <div className="relative bg-[#f2f2f3] flex flex-col md:flex-row justify-between items-center p-4 md:p-8 lg:p-12">
      <aside className="flex justify-center md:justify-start md:ml-20 mb-4 md:mb-0 w-full md:w-1/2">
        <Image
          src="/img/activates.svg"
          alt="Activities"
          layout="responsive"
          width={400}
          height={400}
        />
      </aside>
      <aside className="flex flex-col justify-center items-end  text-right  text-balance md:text-right md:mr-20 w-full md:w-1/2">
        <h1 className="text-2xl md:text-4xl lg:text-6xl">{t("Title")}</h1>
        <Separator className="w-48 mr-5 mt-5 bg-black" />
        <p className="text-lg md:text-xl lg:text-2xl">{t("Description")}</p>
        <Button className="mt-4 bg-[#a1a1a1] w-48 rounded-xl px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4">
          {t("Button")}
        </Button>
      </aside>
      <div className=" rounded-t-full bg-white" />
    </div>
  );
};

export default Activities;
