import ContactUsForm from "@/components/forms/contact-us";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { LocateFixedIcon, PhoneCall } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  const t = useTranslations("ContactUs");
  return (
    <main className="px-4 md:px-0">
      <section className="flex flex-col-reverse md:flex-row justify-between mt-20 md:mt-10 items-center">
        <aside className="flex flex-col ml-2 md:ml-0 mt-20  order-first md:order-none">
          <h2 className="text-2xl text-right ml-2 md:text-4xl">
            {t("Company.Title")}
          </h2>

          <p className="flex flex-row justify-end mt-4">
            {t("Company.Address")}
            <LocateFixedIcon className="ml-2" />
          </p>

          <Link
            href="tel:0503435226"
            className="flex-row justify-end flex mt-4"
          >
            {t("Company.Phone")}
            <PhoneCall className="ml-2" />
          </Link>
          <Link
            href="mailto:adam.haya.tevia@gmail.com"
            className="flex flex-row justify-end mt-4"
          >
            <p>{t("Company.Email")}</p>
            <EnvelopeClosedIcon className="ml-2" />
          </Link>
        </aside>
        <aside className="text-right mr-2 md:mr-0 mt-4 md:mt-0 order-first md:order-none">
          <h2 className="text-2xl md:text-4xl">{t("Title")}</h2>
          <h2 className="text-balance text-xl md:text-2xl">{t("Sub_Title")}</h2>
        </aside>
      </section>
      <section className=" mb-10 left-0 mt-4 md:mt-0">
        <ContactUsForm />
      </section>
    </main>
  );
};

export default Page;
