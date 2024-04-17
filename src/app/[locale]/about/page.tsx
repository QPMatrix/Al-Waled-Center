import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  const t = useTranslations("About");
  const x = useTranslations("Founders");
  return (
    <main className="mt-20 right-0 left-0 px-4 md:px-0">
      <h1 className="text-right mr-2 text-2xl md:text-4xl">{t("Title")}</h1>
      <section className="text-right flex flex-col md:flex-row justify-between items-center">
        <aside className="ml-4 text-right">
          <Image src="/img/about-1.svg" width={500} height={500} alt="about" />
        </aside>
        <aside className="mr-4 mt-4 md:mt-0">
          <h2 className="text-2xl md:text-3xl">{t("Sub_Title")}</h2>
          <Separator className="bg-black m-auto" />
          <p className="mt-4 right-0 text-wrap max-w-[300px] md:max-w-full">
            {t("Description")}
          </p>
          <div className="flex justify-center items-center mt-2">
            <Button className="bg-[#a1a1a1]  text-black hover:text-white">
              {t("Button")}
            </Button>
          </div>
        </aside>
      </section>
      <section className="mt-5 bg-[#ededee]">
        <h2 className="text-3xl text-center ">{t("Sub_Title")}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:grid-areas-founder">
          <div className="text-center lg:text-right lg:grid-area-founder1">
            <Avatar className="size-28 m-auto lg:ml-auto lg:mr-0">
              <AvatarImage src="/img/about-1.svg" alt="about" />
            </Avatar>
            <h3 className="mt-2">{x("Founder1.Name")}</h3>
            <p>{x("Founder1.Description")}</p>
          </div>
          <div className="text-center lg:text-right lg:grid-area-founder2">
            <Avatar className="size-28 m-auto lg:ml-auto lg:mr-0">
              <AvatarImage src="/img/about-1.svg" alt="about" />
            </Avatar>
            <h3 className="mt-2">{x("Founder1.Name")}</h3>
            <p>{x("Founder1.Description")}</p>
          </div>
          <div className="text-center lg:text-right lg:grid-area-founder3">
            <Avatar className="size-28 m-auto lg:ml-auto lg:mr-0">
              <AvatarImage src="/img/about-1.svg" alt="about" />
            </Avatar>
            <h3 className="mt-2">{x("Founder1.Name")}</h3>
            <p>{x("Founder1.Description")}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
