import React from "react";
import { Button } from "../ui/button";
import { Facebook, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { EnvelopeClosedIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Footer = ({ locale }: { locale: string }) => {
  const t = useTranslations("Footer");
  return (
    <div className="w-full bg-[#38383b] p-4 flex flex-col justify-between">
      <div>
        <div className="flex justify-center items-center space-x-4">
          <Button size="icon" variant="outline" className="rounded-full">
            <Link href="#">
              <Facebook size={24} color="#516ca4" fill="#516ca4" />
            </Link>
          </Button>
          <Button size="icon" variant="outline" className="rounded-full">
            <Link href="#">
              <InstagramLogoIcon className="w-6 h-6" color="pink" />
            </Link>
          </Button>
        </div>
        <div className="flex flex-col mt-4 text-[#eeeeef] items-center text-center">
          <p className="mb-2">{t("Location")}</p>
          <div className="flex flex-row space-x-4">
            <Link href="tel:0524802045">
              <p className="flex items-center space-x-2">
                <PhoneIcon size="14" />
                <span>0524802045</span>
              </p>
            </Link>
            <Link href="mailto:hasan@qpmatrix.tech">
              <p className="flex items-center space-x-2">
                <EnvelopeClosedIcon className="w-6 h-6" />
                <span>hasan@qpmatrix.tech</span>
              </p>
            </Link>
          </div>
          <Image
            src={locale === "ar" ? "/img/logo-ar.png" : "/img/logo-he.png"}
            alt="Logo"
            width={300}
            height={50}
            className="mt-2"
          />
        </div>
      </div>
      <div className="  h-22 w-full mt-10 flex flex-col md:flex-row justify-between text-center md:text-left text-white items-center px-4 md:px-0">
        <aside className="text-[#9b9b9c] text-base md:text-xl mb-4 md:mb-0">
          <p>&copy; 2024 QPMatrix</p>
        </aside>
        <aside className="flex items-center space-x-2">
          <Image
            src="/img/qpmatrix.png"
            alt="Company Logo"
            width={100}
            height={100}
          />
          <a
            href="http://www.qpmatrix.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-[#9b9b9c] text-base md:text-xl">
              Powered by QPMatrix
            </p>
          </a>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
