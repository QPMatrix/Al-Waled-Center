"use client";
import Activities from "@/components/landing/activities";
import GetInTouch from "@/components/landing/get-in-touch";
import Hero from "@/components/landing/hero";
import LandingInfo from "@/components/landing/info";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Hero />
      <Activities />
      <LandingInfo />
      <GetInTouch />
    </main>
  );
}
