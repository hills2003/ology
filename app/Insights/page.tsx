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

            <div className="w-full h-64.5 rounded-[13px] flex flex-col justify-center items-start -ml-4 self-stretch gap-5.25">
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

          {/* Chart Section */}
        </div>
      </main>
    </>
  );
};

export default InsightsPage;
