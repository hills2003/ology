"use client"; // Needed if using useState/useEffect

import { useEffect, useState } from "react";
import { fetchDashboardData } from "../data/api";
import Header from "@/components/Header";
import GradientCard from "@/components/GradientCard";
import Link from "next/link";
import MarketNavTabs from "@/components/MarketNavTabs";
import HomeSkeleton from "@/components/HomeSkeleton";
//import { ClarityIndex } from "../components/ClarityIndex";

export default function Home() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchDashboardData().then((res) => setData(res));
  }, []);

  return (
    <>
      <Header />

      {!data && <HomeSkeleton />}

      {data && (
        <div className="flex flex-col  items-center">
          <div className="px-5 md:px-8 pt-10">
            <h1 className="text-[30px] text-center font-medium">
              Good Morning {data.userName}.
            </h1>
          </div>

          <GradientCard>
            <div className="flex flex-col h-full items-center justify-between">
              <div className="text-center">
                <h1 className="font-medium text-[20px]">
                  {data?.alerts?.[0].title}
                </h1>

                <h3 className="font-satoshi font-medium text-[13px] text-[#E89B7F]">
                  Today's Energy: Storm Phase
                </h3>
              </div>

              <p className="text-[#F8F7FC] text-[14px] font-satoshi font-normal leading-[150%] text-center">
                {data?.alerts?.[0].description}
              </p>

              <div className="flex justify-between items-center w-full">
                <button
                  className="
        w-30.75
        h-10.25
        flex items-center justify-center gap-[12.72px]
        px-2.5 py-4
        rounded-[10.18px]
        border
        bg-[#E99C7A33]
        border-[#E89B7F33]
      
        font-satoshi
        font-medium text-[13px] text-[#E89B7F] leading-[140%]
      "
                >
                  Signal Amplified
                </button>

                <Link
                  href="/Insights"
                  className="flex items-center gap-2 text-white font-satoshi"
                >
                  <span className="underline">View Full Insights →</span>
                </Link>
              </div>
            </div>
          </GradientCard>

          <MarketNavTabs />
        </div>
      )}
    </>
  );
}
