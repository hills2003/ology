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
    <header className="sticky top-0 z-50 w-full h-[72px] flex items-center bg-[#0d1220] border-b border-[#E8E9F31A]">
      {/* Inner container aligns content with body */}
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-5 md:px-8">
        {/* Logo + Hamburger */}
        <div className="flex items-center gap-5">
          {/* Hamburger button for mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-[18.87px] h-[18.87px] text-white"
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
          <div className="relative w-[66.98px] h-[27.91px]">
            <Image
              src="/ologyLogo.svg"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Desktop menu */}
        {/* <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </nav> */}

        <div className="relative w-[46px] h-[46px]">
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
        <nav className="md:hidden absolute bg-[#0d1220] top-[72px] space-y-2 w-full h-[calc(100vh-72px)] z-50 pt-10 pb-10  flex flex-col justify-between items-start">
          <div className="flex flex-col">
            <h1 className="underline text-[18.27px] font-Recoleta leading-[130%] font-normal px-[26px] text-[#F8F7FC] tracking-[0.06em]">
              Thursday, February 26
            </h1>

            <div className="flex flex-col mt-[60px] h-[355px] justify-between px-[20px]">
              {menuItems &&
                menuItems.map((item) => {
                  return (
                    <Link
                      href={item?.to}
                      className="flex justify-start  items-center gap-[14.57px]"
                    >
                      <div className="relative w-[66.98px] h-[27.91px]">
                        <Image
                          src={item.logo}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>

                      <h2 className="leading-[140%] font-Satoshi font-bold text-[18.02px] text-[#F8F7FC] uppercase tracking-[0.09em]">
                        {item?.name}
                      </h2>
                    </Link>
                  );
                })}
            </div>
          </div>

          <div className="flex flex-col h-[75px] w-full items-end justify-between px-[20px] text-[#F8F7FC66]">
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
        </nav>
      )}
    </header>
  );
}
