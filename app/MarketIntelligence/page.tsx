"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { fetchMarketData } from "../../data/api";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
} from "recharts";
import InsightsSkeleton from "@/components/InsightsSkeleton";
import Image from "next/image";
import MarketIntelligenceSkeleton from "@/components/MarketIntelligenceSkeleton";

const MarketIntelligencePage: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [activeAsset, setActiveAsset] = useState<string | null>(null);

  const [range, setRange] = useState("Today");

  useEffect(() => {
    fetchMarketData().then((res) => {
      setData(res);
      setActiveAsset(res.assets[0]?.symbol); // default to first asset
    });
  }, []);

  if (!data) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center min-h-[calc(100vh-70px)]">
          <MarketIntelligenceSkeleton />
        </div>
      </>
    );
  }

  const selectedAsset = data.assets.find(
    (asset: any) => asset.symbol === activeAsset,
  );

  return (
    <>
      <Header />

      <main className="flex flex-col items-center px-5 md:px-8 pt-10 pb-20 min-h-[calc(100vh-70px)] gap-8">
        <h1 className="font-Recoleta font-medium text-[30px] leading-[120%]">
          Market Intelligence
        </h1>
        <section className="flex flex-col justify-start">
          {/* Asset Tabs */}
          <div className="flex gap-[6px] w-full justify-around relative flex-wrap">
            {data.assets.map((asset: any) => {
              const isActive = activeAsset === asset.symbol;

              return (
                <button
                  key={asset.symbol}
                  onClick={() => setActiveAsset(asset.symbol)}
                  className={`
                  relative flex items-center justify-center
                  min-w-[90px] h-[40px] px-[23.74px] py-[11.87px]
                  rounded-[24px] border
                  ${
                    isActive
                      ? "border-transparent"
                      : "bg-[##151B304D] border-[#C5D1E033] backdrop-blur-[30px]"
                  }
                  text-sm font-Satoshi text-white
                `}
                  style={
                    isActive
                      ? {
                          background:
                            "linear-gradient(303.18deg, rgba(197, 209, 224, 0.2) 0.54%, rgba(232, 213, 224, 0.18) 37.91%, rgba(127, 168, 212, 0.2) 68.56%, rgba(155, 143, 212, 0.15) 98.22%)",
                        }
                      : undefined
                  }
                >
                  {asset.symbol}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col items-center mt-[24px] mb-[11px]">
            <h1 className="font-Satoshi font-bold text-[43.38px] text-[#FFFFFF] leading-[120%]">{`$${selectedAsset?.price}`}</h1>
            <div className="font-Satoshi font-bold text-[#D66B7E] text-[16px] leading-[120%] flex gap-[8px] items-center mt-[20px]">
              <div className="relative w-[12.71px] h-[12.71px]">
                <Image
                  src="/downArrow.svg"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>{selectedAsset?.change}</div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="w-full max-w-3xl mt-6">
            {selectedAsset && (
              <div className="p-6 rounded-2xl bg-[#151B3066]">
                {/* Header */}
                <div className="flex justify-between mb-4">
                  <div>
                    {/* <h2 className="text-white text-lg font-medium">
                      {selectedAsset.name}
                    </h2> */}
                    <p className="text-[#F8F7FC] text-[21.16px] font-Recoleta leading-[130%]">
                      {selectedAsset.symbol}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    {/* Dropdown */}
                    <div className="relative">
                      <select
                        value={range}
                        onChange={(e) => setRange(e.target.value)}
                        className="appearance-none text-[12.7px] text-[#F8F7FC] rounded-lg px-3 py-1 pr-7 focus:outline-none"
                      >
                        <option>Today</option>
                        <option>Last Week</option>
                        <option>Last Month</option>
                        <option>3 Months</option>
                        <option>1 Year</option>
                      </select>

                      {/* Down arrow */}
                      <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                        ▼
                      </span>
                    </div>
                  </div>
                </div>

                {/* Line Chart */}
                <div className="w-full h-[220px] -ml-4 mt-[30px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={selectedAsset.chart.map(
                        (v: number, idx: number) => ({
                          value: v,
                          name: `Point ${idx + 1}`,
                        }),
                      )}
                      margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                    >
                      {/* Subtle Grid */}
                      <CartesianGrid
                        stroke="rgba(255,255,255,0.05)"
                        vertical={false}
                      />

                      {/* Gradient for stroke */}
                      <defs>
                        <linearGradient
                          id="lineStroke"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="0"
                        >
                          <stop offset="0%" stopColor="#fca5a5" />
                          <stop offset="100%" stopColor="#fb7185" />
                        </linearGradient>

                        {/* Area gradient */}
                        <linearGradient
                          id="areaGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#fb7185"
                            stopOpacity={0.25}
                          />
                          <stop
                            offset="100%"
                            stopColor="#fb7185"
                            stopOpacity={0.02}
                          />
                        </linearGradient>
                      </defs>

                      {/* Hide axis lines */}
                      <XAxis
                        dataKey="name"
                        tick={{ fill: "#6b7280", fontSize: 11 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        tick={{ fill: "#6b7280", fontSize: 11 }}
                        axisLine={false}
                        tickLine={false}
                      />

                      {/* Area (soft fill) */}
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="none"
                        fill="url(#areaGradient)"
                      />

                      {/* Line */}
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="url(#lineStroke)"
                        strokeWidth={2.5}
                        dot={false}
                        activeDot={{
                          r: 6,
                          stroke: "#fff",
                          strokeWidth: 2,
                          fill: "#fb7185",
                        }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-[6px] w-full justify-around relative flex-wrap">
            {["Sentiment", "Volatility", "Edge"].map((asset: any) => {
              return (
                <button
                  key={asset}
                  className={`
          relative flex items-center justify-center
          min-w-[90px] h-[40px] px-[24px] py-[8px]
          rounded-[16px] border
          text-[14px] font-Satoshi font-bold leading-[150%] text-[#F8F7FC] bg-[#1E25404D] border-b border-[#C5D1E033] mt-[50px] mb-[50px]
        `}
                >
                  {asset}
                </button>
              );
            })}
          </div>

          <div
            className="gap-[30px] rounded-[10.78px] bg-[#1E25404D] flex flex-col items-center min-h-[216px] h-auto"
            style={{
              width: "382px",

              paddingTop: "17.96px",
              paddingRight: "20px",
              paddingBottom: "17.96px",
              paddingLeft: "20px",
              opacity: 1,
              transform: "rotate(0deg)", // angle 0
            }}
          >
            <h2 className="font-Recoleta text-[20px] leading-[130%] text-[#F8F7FC] font-normal">
              Trending Now
            </h2>

            <div className="flex flex-wrap justify-center w-full gap-3">
              {data?.trending.map((trending: any) => (
                <div
                  className="flex justify-between items-center min-w-[96px] w-auto"
                  style={{
                    height: "34.30324935913086px",
                    gap: "8.58px",
                    padding: "8.58px 17.15px",
                    borderRadius: "17.15px",
                    border: "0.86px solid #C5D1E033",
                    backgroundColor: "#151B304D",
                    opacity: 1,
                    transform: "rotate(0deg)",
                  }}
                >
                  {/* Left: Asset Name */}
                  <span className="text-white font-bold text-[12px] font-Satoshi leading-[150%]">
                    {trending?.symbol}
                  </span>

                  {/* Right: Change */}
                  <span className="text-[#D66B7E] font-medium font-Satoshi leading-[140%] text-[10.11px]">
                    {trending?.change}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MarketIntelligencePage;
