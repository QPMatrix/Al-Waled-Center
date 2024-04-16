import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const LandingInfo = () => {
  const t = useTranslations("Landing_Info");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 text-center text-balance">
      <div className="flex flex-col items-center">
        <Image
          src="/img/navigation-1.svg"
          alt="Navigation"
          layout="responsive"
          width={400}
          height={400}
        />
        <h1 className="text-bold text-3xl text-[#a1a1a1] mt-4">
          . . . . . . . .
        </h1>
        <h2 className="mt-2 text-xl">{t("Item1.Title")}</h2>
        <p className="mt-1">{t("Item1.Description")}</p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/img/navigation-2.svg"
          alt="Navigation"
          layout="responsive"
          width={400}
          height={400}
        />
        <h1 className="text-bold text-3xl mt-4 text-[#4f4e51]">
          . . . . . . . .
        </h1>

        <h2 className="mt-2 text-xl">{t("Item2.Title")}</h2>
        <p className="mt-1">{t("Item2.Description")}</p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/img/navigation-3.svg"
          alt="Navigation"
          layout="responsive"
          width={400}
          height={400}
        />
        <h1 className="text-bold text-3xl text-[#a1a1a1] mt-4">
          . . . . . . . .{" "}
        </h1>

        <h2 className="mt-2 text-xl">{t("Item3.Title")}</h2>
        <p className="mt-1">{t("Item3.Description")}</p>
      </div>
    </div>
  );
};

export default LandingInfo;
