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
        <div className="flex flex-col items-center px-2.5 pt-10 pb-20 self-stretch gap-12.5">
          <div className="flex flex-col items-center justify-center gap-12.25">
            <h1 className="text-[#F8F7FC] text-center font-Recoleta text-[30px] font-medium leading-[120%]">
              Good Morning {data.userName}.
            </h1>
          </div>

          <GradientCard>
            <div className="flex flex-col h-full items-cen5ter justify-between">
              <div className="flex min-h-14 py-2.5 px-5">
                <div className="w-full flex flex-col gap-5 items-center justify-center">
                  <h1
                    className="
                    font-Recoleta
                    text-[1.25rem]
                    font-normal
                    leading-[130%]
                    tracking-[-0.00025rem]
                    text-[#F8F7FC]
                  "
                  >
                    {data?.alerts?.[0].title}
                  </h1>

                  <h3
                    className="
                    font-Satoshi
                    text-[13px]
                    font-medium
                    leading-[1.4]
                    tracking-[0.52px]
                    text-center
                    capitalize
                    text-[#E89B7F]
                  "
                  >
                    Today's Energy: Storm Phase
                  </h3>
                </div>
              </div>

              <p className="text-[#F8F7FC] text-[14px] font-Satoshi font-normal leading-[150%] text-center  ">
                {data?.alerts?.[0].description}
              </p>

              <div className="flex py-2.5 px-5 justify-between items-center w-full self-stretch mt-2">
                <button
                  className="
      
        flex items-center justify-center gap-[12.721px]
        px-2.5 py-4
        rounded-[10.177px]
        border
        bg-[#E99C7A33]
        border-[#E89B7F33]
      
        font-Satoshi
        font-medium text-[13px] text-[#E89B7F] leading-[140%]

      
        font-Satoshi
    
        tracking-[0.52px]
        text-center
        capitalize
        
      
      "
                >
                  Signal Amplified
                </button>

                <Link
                  href="/Insights"
                  className="flex items-center justify-center gap-[6.233px] text-white font-Satoshi w-auto py-[6.233px] px-[18.698px]"
                >
                  <span
                    className="
                      font-Satoshi
                      text-[10.907px]
                      italic
                      font-normal
                      leading-normal
                      text-center
                      underline
                      text-[#F8F7FC]
                    "
                    style={
                      {
                        // cast to any to allow unknown properties
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
                    View Full Insight →
                  </span>
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
