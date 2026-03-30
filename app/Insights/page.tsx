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

const InsightsPage: React.FC = () => {
  const [data, setData] = useState<any>(null);

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
    { name: "Jan", value: 40 },
    { name: "Feb", value: 70 },
    { name: "Mar", value: 30 },
    { name: "Apr", value: 90 },
    { name: "May", value: 60 },
    { name: "Jun", value: 50 },
  ];

  return (
    <>
      <Header />
      <main className="flex flex-col items-center px-5 md:px-8 pt-10 pb-20 min-h-[calc(100vh-70px)] gap-8">
        {/* Insight Header */}
        <div className="flex flex-col w-full h-[240px] justify-between">
          <h2 className="font-Satoshi font-normal leading-[160%] text-[15px] text-[#ffffffb0] uppercase">
            {data?.date}
          </h2>

          <p className="font-Recoleta text-[30px] font-400 leading-[150%]">
            &ldquo;{data?.insight}&rdquo;
          </p>

          <div className="flex justify-start items-center gap-[30px]">
            <div className="relative w-[46px] h-[46px]">
              <Image
                src="/images/Druck.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>

            <div className="flex flex-col">
              <h2 className="font-Satoshi font-medium text-white text-[16px]">
                {data?.author}
              </h2>
              <Link
                href="/"
                className="flex items-center gap-2 text-white font-Satoshi font-medium leading-[150%] text-[18px]"
              >
                <span className="underline italic font-Satoshi leading-[150%] text-[14px]">
                  view investor profile →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Dos & Don'ts */}
        <div className="w-[382px] h-[85px] flex justify-between gap-[20px] mt-[30px]">
          <div className="flex-1">
            <h3 className="font-Recoleta font-medium text-[16px] leading-[130%] text-[#F8F7FC] mb-1">
              Do
            </h3>
            <ul className="list-disc list-inside text-[13px] font-Satoshi text-[#F8F7FC] leading-[150%]">
              {data?.do?.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="font-Recoleta font-medium text-[16px] leading-[130%] text-[#F8F7FC] mb-1">
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
          className="w-[382px] h-[458px] flex flex-col justify-center
                      gap-[28px] rounded-[20px] 
                     opacity-100"
        >
          {/* Header Section */}
          <div className="flex flex-col text-center items-center">
            <div className="relative w-[39px] h-[56px] flex justify-center mb-[28px]">
              <Image
                src="/astrology.svg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-Recoleta font-medium text-[20px] text-[#F8F7FC]">
              Trading Power Windows
            </h3>
            <p className="font-Satoshi font-normal text-[14px] text-[#F8F7FC] leading-[140%] mt-[12px]">
              Mercury stations retrograde at 6:48 AM. Energy compresses all day.
              Observe, don't initiate.
            </p>
          </div>

          {/* Chart Section */}
          <div className="w-full h-[258px] rounded-[13px] -ml-5">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} barCategoryGap="25%">
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#FFFFFF4D", fontSize: 12 }}
                  axisLine={{ stroke: "#6C8BA41A" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#FFFFFF4D", fontSize: 12 }}
                  axisLine={{ stroke: "#6C8BA41A" }}
                  tickLine={false}
                />
                <CartesianGrid
                  vertical={false}
                  stroke="#6C8BA41A"
                  strokeDasharray="3 3"
                />
                <Tooltip
                  contentStyle={{
                    background: "#151B30",
                    border: "none",
                    borderRadius: "8px",
                    color: "#F8F7FC",
                  }}
                />
                <Bar
                  dataKey="value"
                  fill="#A5C4D34D"
                  radius={[5, 5, 0, 0]}
                  barSize={38}
                  isAnimationActive
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </>
  );
};

export default InsightsPage;
