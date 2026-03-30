"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ClarityIndexBar from "./ClarityIndexBar";
import { fetchDashboardData } from "@/data/api";
import PortfolioChart from "./PortfolioChart";

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

  return (
    <div className="w-full flex flex-col items-center mt-12.5">
      <div className="flex gap-[11px] max-w-3xl justify-around relative">
        {tabs.map((tab) => {
          const isActive =
            tab.id === "markets"
              ? activeTab === "markets"
              : pathname === tab.href; // active if on that page

          if (tab.href) {
            // Tabs that navigate to another page
            return (
              <Link
                key={tab.id}
                href={tab.href}
                className={`
                  relative flex items-center justify-center
                  w-[120px] h-[40px] px-[24px] py-[8px] gap-[8px]
                  rounded-[16px] border
                  ${
                    isActive
                      ? "bg-[#1C2233] border-transparent"
                      : "bg-[#1E25404D] border-[#7A849A1A] backdrop-blur-[30px]"
                  }
                  text-sm font-satoshi text-white
                `}
              >
                {tab.label}

                {/* Green dot indicator for active tab */}
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
              </Link>
            );
          } else {
            // Markets tab stays here
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "markets")}
                className={`
                  relative flex items-center justify-center
                  w-[120px] h-[40px] px-[24px] py-[8px] gap-[8px]
                  rounded-[16px] border
                  ${
                    isActive
                      ? "bg-[#1C2233] border-transparent"
                      : "bg-[#1E25404D] border-[#7A849A1A] backdrop-blur-[30px]"
                  }
                  text-sm font-satoshi text-white
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
          }
        })}
      </div>

      <div className="flex justify-center px-1px]">
        <div className="mt-6 w-full max-w-3xl mx-auto">
          {activeTab === "markets" && (
            <div
              className="w-95.5 h-47 p-[10px_20px] rounded-[20px] border border-[#7A849A1A] flex flex-col justify-between items-center gap-7.5 opacity-100"
              style={{
                background:
                  "linear-gradient(179.37deg, rgba(165,196,211,0.055) 15.5%, rgba(93,112,125,0.055) 63.9%, rgba(10,14,26,0.055) 99.46%)",
              }}
            >
              <ClarityIndexBar />

              <div
                className="w-[382px] mt-[50px] 
             pt-[30px] pl-[20px] pr-[20px] pb-[30px] 
             rounded-[20px] border border-[#7A849A1A] 
             bg-[linear-gradient(179.37deg,rgba(165,196,211,0.055)_15.5%,rgba(93,112,125,0.055)_63.9%,rgba(10,14,26,0.055)_99.46%)] 
             opacity-100
             flex flex-col"
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex flex-col justify-around">
                    <h1 className="text-[21.64px] font-medium leading-[130%] font-Recoleta">
                      Portfolio Performance
                    </h1>
                    <p className="leading-[140%] text-[15.15px] font-Satoshi font-medium">
                      Last {data?.portfolio?.dayCount} days
                    </p>
                  </div>

                  <button
                    className="w-[97.97px] h-[52.96px] gap-[15.88px] 
                 pt-[19.98px] pr-[12.49px] pb-[19.98px] pl-[12.49px] 
                 rounded-[12.71px] 
                 bg-[#5FCDD91A] 
                 opacity-100
                 flex items-center justify-center text-[17.48px] font-medium font-Satoshi leading-[140%] text-[#7DD3C0]"
                  >
                    {data?.portfolio?.percentageChange}%
                  </button>
                </div>

                <hr className="w-full h-0 border-[1.08px] border-[#6C8BA41A] opacity-100 mb-4" />

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mt-[40px]">
                  {[
                    {
                      title: "Total Value",
                      value: `$${data?.portfolio.totalValue}`,
                    },
                    {
                      title: "24h Change",
                      value: `+$${data?.portfolio.change24h}`,
                    },
                    {
                      title: "Win Rate",
                      value: `${data?.portfolio.winRate * 100}%`,
                    },
                    {
                      title: "Active Positions",
                      value: data?.portfolio.activePositions,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="w-[162.34px] h-[85.6px] 
             flex flex-col items-center justify-center gap-[10.82px]
            
             rounded-[12.99px] 
             bg-[#151B3066]"
                    >
                      {/* Title */}
                      <span className="font-Satoshi font-medium text-[12.99px] leading-[140%] text-[#7A849A]">
                        {item.title}
                      </span>

                      {/* Value */}
                      <span
                        className="font-semibold font-Satoshi text-[21.64px] leading-[140%]"
                        style={{
                          color:
                            item.title === "24h Change" ? "#7DD3C0" : "#F8F7FC",
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-[40px]">
                  <PortfolioChart data={data?.chartData} />
                </div>

                <div className="font-Satoshi font-400 text-[15.15px] text-[#F8F7FC] p-[10.82px] mt-[20px] leading-[150%]">
                  Mercury stations retrograde at 10:48 PM. Saturn-Neptune
                  conjunction ripple still active at 0° Aries. Positions opened
                  this week face review pressure, historical data shows 9.4%
                  underperformance when initiating during Rx stations in mutable
                  signs.
                </div>

                <Link
                  href="/insights"
                  className="flex justify-end gap-2 text-white font-Satoshi text-[11.8px] italic leading-[150%] mt-[42px] mb-[30px]"
                >
                  <span className="underline">Performance Intelligence →</span>
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
