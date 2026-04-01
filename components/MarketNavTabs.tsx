"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ClarityIndexBar from "./ClarityIndexBar";
import { fetchDashboardData } from "@/data/api";
import PortfolioChart from "./PortfolioChart";
import GlassModal from "./GlassModal";

type Tab = {
  label: string;
  id: string;
  href?: string; // optional: if provided, tab navigates
};

export default function MarketNavTabs() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<"markets">("markets");

  const tabs: Tab[] = [
    { label: "Ask Ology", id: "ask-ology", href: "/ask-ology" },
    { label: "Markets", id: "markets" },
    { label: "Journal", id: "journal", href: "/journal" },
  ];

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchDashboardData().then((res) => setData(res));
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex gap-2.75 items-end  justify-center self-stretch relative">
        {tabs.map((tab) => {
          const isActive =
            tab.id === "markets"
              ? activeTab === "markets"
              : pathname === tab.href; // active if on that page

          // Markets tab stays here
          return (
            <button
              key={tab.id}
              onClick={() => setIsOpen(true)}
              className={` relative flex items-center justify-center
                  w-auto h-[40px] px-[24px] py-[8px] gap-[8px]
                  rounded-[16px] border  
                  ${
                    isActive
                      ? "bg-[#1C2233] border-transparent"
                      : "bg-[#1E25404D] border-[#7A849A1A] backdrop-blur-[30px]"
                  }
                  font-satoshi text-[#F8F7FC]

                  font-Satoshi 
                  text-[14px] 
                  font-bold   
                  leading-[1.5]  
                  text-center  
                `}
            >
              {tab.label}

              {isActive && (
                <span
                  className="absolute"
                  style={{
                    width: "14.82px",
                    height: "14px",
                    top: "-7px",
                    right: "4px",
                    background: "#316E60C4",
                    borderRadius: "50%",
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      <div
        className="w-95.5 h-47 py-7.5 px-5 rounded-[20px] border border-[#7A849A1A] flex flex-col justify-center items-start gap-7.5"
        style={{
          background:
            "linear-gradient(179.37deg, rgba(165,196,211,0.055) 15.5%, rgba(93,112,125,0.055) 63.9%, rgba(10,14,26,0.055) 99.46%)",
        }}
      >
        <ClarityIndexBar />
      </div>

      <div
        className="w-full min-h-[129.858px]
             py-7.5 px-5
             rounded-[20px] border border-[#7A849A1A] 
             bg-[linear-gradient(179.37deg,rgba(165,196,211,0.055)_15.5%,rgba(93,112,125,0.055)_63.9%,rgba(10,14,26,0.055)_99.46%)] 
             opacity-100
             flex flex-col justify-center items-start self-stretch gap-7.5"
      >
        {/* Header */}
        <div className="flex min-h-[60.601px] py-[10.822px] justify-between items-center self-stretch">
          <div className="flex flex-col justify-between">
            <h1 className="text-[21.643px] font-normal leading-[130%] tracking-[-0.004px] font-Recoleta">
              Portfolio Performance
            </h1>
            <p
              className="leading-[140%] text-[15.15px] font-Satoshi font-normal text-[#C5D1E0]"
              style={
                {
                  leadingTrim: "both",
                  textEdge: "cap",
                } as any
              }
            >
              Last {data?.portfolio?.dayCount} days
            </p>
          </div>

          <button
            className="w-[97.97px] h-[52.96px] gap-[15.884px] 
                 py-[19.98px]  px-[12.49px] 
                 rounded-[12.707px] 
                 bg-[#5FCDD91A] 
                 opacity-100 
                 flex flex-col items-center justify-center text-[17.48px] font-medium font-Satoshi leading-[140%] text-[#7DD3C0]"
          >
            {data?.portfolio?.percentageChange}%
          </button>
        </div>

        <div className="flex py-[1.082px] justify-center items-center gap-[10.822px] self-stretch">
          <hr className="w-full h-0 border-[1.08px] border-[#6C8BA41A] opacity-100" />
        </div>
        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-[17.314px] self-stretch py-[10.822px]">
          {[
            {
              title: "Total Value",
              value: `${new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(data?.portfolio.totalValue)}`,
            },
            {
              title: "24h Change",
              value: `+${new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(data?.portfolio.change24h)}`,
            },
            {
              title: "Win Rate",
              value: `${new Intl.NumberFormat("en-US", {
                style: "percent",
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              }).format(data?.portfolio.winRate)}`,
            },
            {
              title: "Active Positions",
              value: data?.portfolio.activePositions,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-[162.34px] h-[85.6px] 
            
             rounded-[12.986px] 
             bg-[#151B3066] flex
              justify-center
              items-center
              p-[21.643px_17.314px] 
              gap-[10.822px]          
              flex-[1_0_0] "
            >
              <div className="flex flex-col items-start gap-[17.314px] flex-[1_0_0]">
                {/* Title */}
                <span
                  className="
                font-Satoshi 
                text-[12.986px] 
                font-medium 
                leading-[1.4] 
                tracking-[0.003px] 
                text-[#7A849A] 
               "
                  style={
                    {
                      leadingTrim: "both", // advanced typography
                      textEdge: "cap", // advanced typography
                    } as any
                  }
                >
                  {item.title}
                </span>

                {/* Value */}
                <span
                  className="
                      font-Satoshi
                      text-[21.643px]
                      font-semibold         
                      leading-[1.4]
                      text-[#F8F7FC]
                    "
                  style={
                    {
                      color:
                        item.title === "24h Change" ? "#7DD3C0" : "#F8F7FC",
                      leadingTrim: "both",
                      textEdge: "cap",
                      fontVariantNumeric: "lining-nums tabular-nums",
                    } as any
                  }
                >
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex py-[10.822px] justify-center items-center gap-[8.657px] self-stretch">
          <PortfolioChart data={data?.chartData} />
        </div>

        <div
          className="font-Satoshi font-normal text-[15.15px] text-[#F8F7FC] p-[10.82px] leading-[150%]"
          style={
            {
              leadingTrim: "both",
              textEdge: "cap",
            } as any
          }
        >
          Mercury stations retrograde at 10:48 PM. Saturn-Neptune conjunction
          ripple still active at 0° Aries. Positions opened this week face
          review pressure, historical data shows 9.4% underperformance when
          initiating during Rx stations in mutable signs.
        </div>

        <Link
          href="/"
          className="w-full flex justify-end gap-2 text-white font-Satoshi text-[11.8px] italic leading-[150%] mt-[42px] mb-[30px]"
        >
          <span
            className="
    font-Satoshi
    text-[11.803px]
    italic
    font-normal
    leading-[1.5]
    text-center
    underline
    text-[var(--Foundation-Lunar-Haze,#F8F7FC)]
  "
            style={
              {
                leadingTrim: "both",
                textEdge: "cap",
                textDecorationStyle: "solid",
                textDecorationSkipInk: "auto",
                textDecorationThickness: "auto",
                textUnderlineOffset: "auto",
                textUnderlinePosition: "from-font",
              } as any
            }
          >
            Performance Intelligence →
          </span>
        </Link>

        <hr className="w-full h-0 border-[1.08px] border-[#6C8BA41A] opacity-100 mb-4" />

        <div
          className="w-[342px] h-[30.64px] 
             flex items-center gap-[8.66px]
             pt-[10.82px] pb-[10.82px]
             opacity-100 text-[12.99px] leading-[100%] font-Satoshi"
        >
          Last updated: {data?.portfolio?.lastUpdated}
        </div>
      </div>

      <GlassModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
