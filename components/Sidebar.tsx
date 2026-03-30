"use client";

import Image from "next/image";
import Link from "next/link";
import home from "../public/Galaxy.svg";
import comet from "../public/Comet.svg";
import compass from "../public/Compass.svg";
import journal from "../public/journal.svg";
import voidicon from "../public/void.svg";
import intelligence from "../public/intelligence.svg";

export default function Sidebar() {
  const menuItems = [
    { logo: home, name: "Home", to: "/" },
    {
      logo: intelligence,
      name: "Market Intelligence",
      to: "/MarketIntelligence",
    },
    { logo: comet, name: "Astro calendar", to: "/astro-calender" },
    { logo: compass, name: "ology ai", to: "/AI" },
    { logo: journal, name: "journal", to: "/journal" },
    { logo: voidicon, name: "performance", to: "/performance" },
  ];

  return (
    <nav className="bg-[#0d1220] w-full h-screen pt-10 pb-10 flex flex-col justify-between items-start">
      {/* Top Section */}
      <div className="flex flex-col w-full">
        <h1 className="underline text-[14.27px] font-Recoleta leading-[130%] font-normal px-[26px] text-[#F8F7FC] tracking-[0.06em]">
          Thursday, February 26
        </h1>

        <div className="flex flex-col mt-[60px] h-[355px] justify-between px-[20px]">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.to}
              className="flex justify-start items-center gap-[14.57px]"
            >
              <div className="relative w-[40.98px] h-[18.91px]">
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h2 className="leading-[140%] font-Satoshi font-bold text-[14.02px] text-[#F8F7FC] uppercase tracking-[0.09em]">
                {item.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col h-[75px] w-full items-end justify-between px-[20px] text-[#F8F7FC66]">
        <Link
          href="/"
          className="font-Satoshi text-[14px] font-medium leading-[140%] tracking-[0.02em]"
        >
          Profile
        </Link>

        <Link
          href="/"
          className="font-Satoshi text-[12px] font-medium leading-[140%] tracking-[0.02em]"
        >
          Support
        </Link>

        <Link
          href="https://ologyapp.com/"
          className="font-Satoshi text-[12px] font-medium leading-[140%] tracking-[0.02em]"
        >
          ologyapp.com
        </Link>
      </div>
    </nav>
  );
}
