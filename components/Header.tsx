"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchDashboardData } from "../data/api";
import home from "../public/Galaxy.svg";
import comet from "../public/Comet.svg";
import compass from "../public/Compass.svg";
import journal from "../public/journal.svg";
import voidicon from "../public/void.svg";
import intelligence from "../public/intelligence.svg";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const menuItems = [
    {
      logo: home,
      name: "Home",
      to: "/",
    },
    {
      logo: intelligence,
      name: "Market Intelligence",
      to: "/MarketIntelligence",
    },
    {
      logo: comet,
      name: "Astro calendar",
      to: "/astro-calender",
    },
    {
      logo: compass,
      name: "ology ai",
      to: "/AI",
    },
    {
      logo: journal,
      name: "journal",
      to: "/journal",
    },
    {
      logo: voidicon,
      name: "performance",
      to: "/performance",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full h-17.5 flex items-center self-stretch bg-[#0d1220] border-b border-[#E8E9F31A] px-5">
      {/* Inner container aligns content with body */}
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto md:px-8">
        {/* Logo + Hamburger */}
        <div className="flex items-center gap-5">
          {/* Hamburger button for mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-[18.86px] h-[18.86px] text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="relative w-[4.18625rem] h-[1.744375rem]">
            <Image
              src="/ologyLogo.svg"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="relative w-11.5 h-11.5">
          <Image
            src="/images/user.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Mobile menu */}

      {menuOpen && (
        <nav className="md:hidden absolute left-0 top-16.25 z-50 flex h-[calc(100vh-65px)] w-full flex-col justify-between items-start bg-[#0d1220] pt-10 pb-12.5 shrink-0">
          <div className="inline-flex flex-col items-start pl-[26.422px] gap-[13.211px]">
            <h1 className="text-[#F8F7FC] text-center font-Recoleta text-[18.269px] font-normal leading-[130%] tracking-[1.096px] underline underline-offset-[23%]">
              Thursday, February 26
            </h1>
          </div>

          <div className="flex flex-col items-start gap-7.25 -mt-12">
            <div className="flex flex-col justify-center items-start gap-[48.95px]">
              {menuItems &&
                menuItems.map((item) => {
                  return (
                    <Link
                      href={item?.to}
                      className="flex items-center gap-[14.567px] uppercase"
                    >
                      <div className="relative w-[66.98px] h-[27.91px]">
                        <Image
                          src={item.logo}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>

                      <h2 className="text-[#f8f7fcc2] -ml-4 font-Satoshi text-[18.017px] font-bold leading-[140%] tracking-[1.621px] tabular-nums lining-nums">
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
      )}
    </header>
  );
}
