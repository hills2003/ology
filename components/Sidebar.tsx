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
    <nav className="absolute left-0 top-16.25 z-50 flex h-[calc(100vh-65px)] w-full flex-col justify-between items-start bg-[#0d1220] pt-10 pb-12.5 shrink-0">
      <div className="inline-flex flex-col items-start pl-[26.422px] gap-[13.211px]">
        <h1 className="text-[#F8F7FC] text-center font-Recoleta text-[18.269px] font-normal leading-[130%] tracking-[1.096px] underline underline-offset-[23%]">
          Thursday, February 26
        </h1>
      </div>

      <div className="flex flex-col items-start gap-7.25">
        <div className="flex flex-col justify-center items-start gap-[48.95px]">
          {menuItems &&
            menuItems.map((item) => {
              return (
                <Link
                  href={item?.to}
                  className="flex items-center gap-[14.567px] uppercase opacity-[0.83]"
                >
                  <div className="relative w-[66.98px] h-[27.91px]">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h2
                    className="text-[#F8F7FC] -ml-4 font-Satoshi text-[1.125rem] font-bold leading-[140%] tracking-[0.101rem] tabular-nums lining-nums"
                    style={
                      {
                        WebkitLeadingTrim: "both",
                        leadingTrim: "both",
                        textEdge: "cap",
                      } as any
                    }
                  >
                    {item?.name}
                  </h2>
                </Link>
              );
            })}
        </div>
      </div>

      <div className="flex h-18.75 px-5 flex-col justify-between items-end shrink-0 self-stretch">
        <div className="flex flex-col h-18.75 w-full items-end justify-between text-[#F8F7FC66]">
          <Link
            href="/"
            className="text-[#F8F7FC66] font-Satoshi text-[12px] font-medium leading-[140%] tracking-[0.02em]"
          >
            Profile
          </Link>

          <Link
            href="/"
            className="text-[#F8F7FC66] font-Satoshi text-[12px] font-medium leading-[140%] tracking-[0.02em]"
          >
            Support
          </Link>

          <Link
            href="https://ologyapp.com/"
            className="text-[#F8F7FC66] font-Satoshi text-[12px] font-medium leading-[140%] tracking-[0.02em]"
          >
            ologyapp.com
          </Link>
        </div>
      </div>
    </nav>
  );
}
