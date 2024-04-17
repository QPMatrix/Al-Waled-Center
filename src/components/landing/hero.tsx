import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Hero = ({ locale }: { locale: string }) => {
  const router = useRouter();
  const t = useTranslations("Hero");
  return (
    <div className="relative flex items-center justify-end w-full h-[400px] md:h-[600px] lg:h-[800px]">
      <Image
        src="/img/hero-1.svg"
        alt="Horse on Wild"
        objectFit="cover"
        layout="fill"
      />
      <div className="flex flex-col items-end justify-end absolute text-right bg-black  bg-opacity-65 text-white text-balance  p-5 rounded-lg">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2">
          {t("Title")}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl ">{t("Description")}</p>
        <div className="mt-10">
          <Button
            onClick={() => router.push(`${locale}/contactus`)}
            className="bg-white text-black rounded-xl hover:bg-gray-500 hover:text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4"
          >
            <ChevronLeft size={16} className="ml-4 " />
            {t("Button")}
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <Image src="/img/wave.svg" alt="Wave" width={1920} height={300} />
      </div>
    </div>
  );
};

export default Hero;
