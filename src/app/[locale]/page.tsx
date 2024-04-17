"use client";
import Activities from "@/components/landing/activities";
import GetInTouch from "@/components/landing/get-in-touch";
import Hero from "@/components/landing/hero";
import LandingInfo from "@/components/landing/info";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const path = pathname.split("/")[1];

  return (
    <main className="w-full h-full">
      <Hero locale={path} />
      <Activities />
      <LandingInfo />
      <GetInTouch />
    </main>
  );
}
