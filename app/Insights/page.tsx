"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { fetchInsightsData } from "../../data/api"; // hypothetical API
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import InsightsSkeleton from "@/components/InsightsSkeleton";
import { motion, AnimatePresence } from "framer-motion";

const InsightsPage: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [selectedBar, setSelectedBar] = useState<any>(null);

  useEffect(() => {
    fetchInsightsData().then((res) => setData(res));
  }, []);

  if (!data) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center min-h-[calc(100vh-70px)]">
          <InsightsSkeleton />
        </div>
      </>
    );
  }

  // Example chartData
  const chartData = [
    {
      name: "9:30",
      value: 20,
      title: "Market Open Dip",
      subtitle: "Early sell-off pressure",
      info: "Info for 9:30",
    },
    {
      name: "10-11",
      value: 35,
      title: "Recovery Bounce",
      subtitle: "Buyers stepping in",
      info: "Info for 10-11",
    },
    {
      name: "11-12",
      value: 50,
      title: "Midday Consolidation",
      subtitle: "Low volatility range",
      info: "Info for 11-12",
    },
    {
      name: "12-1",
      value: 65,
      title: "Bullish Momentum",
      subtitle: "Strong upward trend",
      info: "Info for 12-1",
    },
    {
      name: "1-2",
      value: 80,
      title: "Peak Activity",
      subtitle: "High volume breakout",
      info: "Info for 1-2",
    },
    {
      name: "2-3",
      value: 45,
      title: "Profit Taking",
      subtitle: "Traders locking gains",
      info: "Info for 2-3",
    },
  ];

  // Handler when a bar is clicked
  const handleBarClick = (data: any, index: number) => {
    setSelectedBar((prev: any) => {
      // if clicking the same bar → close it
      if (prev && prev.index === index) {
        return null;
      }

      // otherwise open new bar
      return { ...data, index };
    });
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center px-5 pt-10 pb-20 gap-12.5">
        {/* Insight Header */}
        <div className="flex flex-col items-start self-stretch w-full gap-10.5">
          <h2
            className="text-[#FFFFFFDB] font-Satoshi text-[15px] font-normal leading-[160%] tracking-[0.0375rem]"
            style={
              {
                leadingTrim: "both",
                textEdge: "cap",
              } as any
            }
          >
            {data?.date}
          </h2>

          <p className="font-Recoleta text-[30px] font-400 leading-[150%] tracking-[-0.0375rem]">
            &ldquo;{data?.insight}&rdquo;
          </p>

          <div className="flex items-start gap-7.5 self-stretch">
            <div className="relative w-11.5 h-11.5">
              <Image
                src="/images/Druck.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>

            <div className="flex flex-col">
              <h2 className="text-white font-satoshi text-[1.125rem] font-normal leading-normal">
                {data?.author}
              </h2>
              <Link href="/">
                <span className="text-[rgba(255,255,255,0.86)] font-satoshi text-[14px] italic font-normal leading-normal underline decoration-solid [text-decoration-skip-ink:none] decoration-[4%] underline-offset-[25%]">
                  view investor profile →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Dos & Don'ts */}
        <div className="w-full flex items-start gap-5 self-stretch">
          <div className="flex flex-col items-start gap-3.75 flex-[1,0,0]">
            <h3 className="font-Recoleta font-noral text-[16px] leading-[130%] text-[#F8F7FC]">
              Do
            </h3>
            <ul className="list-disc list-inside text-[13px] font-Satoshi text-[#F8F7FC] leading-[150%]">
              {data?.do?.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-3.75 flex-[1,0,0]">
            <h3 className="font-Recoleta font-noral text-[16px] leading-[130%] text-[#F8F7FC]">
              Don't
            </h3>
            <ul className="list-disc list-inside text-[13px] font-Satoshi text-[#F8F7FC] leading-[150%]">
              {data?.dont?.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card with Bar Chart */}
        <div
          className="flex flex-col items-center
                      gap-7 self-stretch rounded-[20px] 
                     opacity-100"
        >
          <div className="relative w-[39px] h-[56px] flex justify-center">
            <Image
              src="/astrology.svg"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          {/* Header Section */}
          <div className="flex flex-col items-center gap-10">
            <h3 className="font-Recoleta font-normal text-[20px] text-[#F8F7FC] leading-[130%]">
              Trading Power Windows
            </h3>
            <p
              className="font-Satoshi font-normal text-[14px] text-[#F8F7FC] leading-[140%] text-center -mt-[20px]"
              style={
                {
                  leadingTrim: "both",
                  textEdge: "cap",
                } as any
              }
            >
              Mercury stations retrograde at 6:48 AM. Energy compresses all day.
              Observe, don't initiate.
            </p>
            <div className="w-full flex flex-col justify-center">
              <div className="w-full min-h-[220px] h-auto rounded-[13px] flex flex-col justify-start items-start font-satoshi -ml-4 self-stretch gap-[21px]">
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={chartData} barCategoryGap="25%">
                    <CartesianGrid
                      vertical={false}
                      stroke="#6C8BA41A"
                      strokeDasharray="3 3"
                    />
                    <XAxis
                      dataKey="name"
                      tick={{
                        fill: "#FFFFFF4D",
                        fontSize: 12,
                        fontFamily: "Satoshi",
                      }}
                      axisLine={{ stroke: "#6C8BA41A" }}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{
                        fill: "#FFFFFF4D",
                        fontSize: 12,
                        fontFamily: "Satoshi",
                      }}
                      axisLine={{ stroke: "#6C8BA41A" }}
                      tickLine={false}
                      domain={[0, 100]}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "#151B30",
                        border: "none",
                        borderRadius: "8px",
                        color: "#F8F7FC",
                      }}
                      formatter={(value) => `${value}%`}
                    />
                    <Bar
                      dataKey="value"
                      fill="#A5C4D34D"
                      radius={[5, 5, 0, 0]}
                      barSize={38}
                      isAnimationActive
                      style={{ outline: "none" }}
                      onClick={handleBarClick} // ← Make bars clickable
                    />
                  </BarChart>
                </ResponsiveContainer>

                {/* Info panel shows when a bar is clicked */}
              </div>
              <div className="flex flex-col gap-5 items-center">
                {selectedBar && (
                  <motion.div
                    key={selectedBar.index}
                    initial={{ opacity: 0, y: -10 }} // slight move from top
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full flex flex-col justify-center items-center p-5 rounded-[10.779px] bg-[#7DAA9233]"
                  >
                    <div className="w-full flex flex-col items-center gap-5">
                      <h2 className="text-[#F8F7FC] text-center font-Satoshi text-[11px] font-medium leading-[140%] tabular-nums">
                        {`${selectedBar.name} AM`}
                      </h2>

                      <div className="flex flex-col items-center self-stretch gap-2.5">
                        <div className="flex justify-center items-center self-stretch">
                          <p className="text-[#F8F7FC] text-center font-Recoleta text-[16px] font-medium leading-[130%]">
                            {selectedBar.title}
                          </p>
                        </div>

                        <p className="text-[#F8F7FC] text-center font-Satoshi text-[14px] font-normal leading-[150%]">
                          {selectedBar.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
                <Link href="/MarketIntelligence">
                  <button
                    className={`
           flex items-center justify-center
           h-10 px-6 py-2 w-[113.67px]
          rounded-2xl gap-2 border
         bg-[#1E25404D] border-b border-[#C5D1E033]
        `}
                  >
                    <p className="text-[#F8F7FC] text-center font-Satoshi text-[14px] font-bold leading-[1.5]">
                      Market
                    </p>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Chart Section */}
        </div>
      </main>
    </>
  );
};

export default InsightsPage;
