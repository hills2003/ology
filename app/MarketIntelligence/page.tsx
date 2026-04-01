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
  Tooltip,
  AreaChart,
} from "recharts";
import InsightsSkeleton from "@/components/InsightsSkeleton";
import Image from "next/image";
import MarketIntelligenceSkeleton from "@/components/MarketIntelligenceSkeleton";
import BulbIcon from "@/public/bulb.svg";
import MercuryIcon from "@/public/Mercury.svg";
import MoonIcon from "@/public/Moon.svg";

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

  const SelectedData = selectedAsset.chart.map((v: number, idx: number) => ({
    value: v,
    name: `Point ${idx + 1}`,
  }));

  return (
    <>
      <Header />

      <main className="flex flex-col items-center px-2.5 pt-10 pb-20  gap-12.5">
        <div className="flex flex-col justify-center items-center gap-12.25">
          <h1 className="font-Recoleta font-medium text-[30px] leading-[120%]">
            Market Intelligence
          </h1>
        </div>

        {/* Asset Tabs */}

        <section className="flex flex-col justify-center items-start gap-2.75">
          <div className="flex pb-5 items-center gap-2.75 self-stretch">
            {data.assets.map((asset: any) => {
              const isActive = activeAsset === asset.symbol;

              return (
                <button
                  key={asset.symbol}
                  onClick={() => setActiveAsset(asset.symbol)}
                  className={`
                  flex font-Satoshi font-bold h-[47.482px] justify-center items-center py-[11.871px] px-[23.741px] gap-[11.871px] rounded-[23.741px]
                  ${
                    isActive
                      ? "border-transparent"
                      : "bg-[##151B304D] border-[#C5D1E033] backdrop-blur-[30px]"
                  }
                 
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

          <div className="flex flex-col items-center self-stretch py-[8.034px] gap-[40.168px]">
            <div className="flex flex-col gap-[28.118px] items-center">
              <h1 className="text-white font-Satoshi font-bold text-[43.382px] leading-[1.2] tracking-[0.013px] [font-variant-numeric:lining-nums_tabular-nums]">{`${new Intl.NumberFormat(
                "en-US",
                {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                },
              ).format(selectedAsset?.price)}`}</h1>
              <div
                className="flex gap-[8.034px] pb-[3.213px] justify-center items-center text-[#D66B7E] font-Satoshi text-[16.067px] font-bold leading-[1.2] tracking-[0.005px] -mt-3 [font-variant-numeric:lining-nums_tabular-nums]"
                style={
                  {
                    leadingTrim: "both",
                    textEdge: "cap",
                  } as any
                }
              >
                <div className="relative w-[12.71px] h-[12.71px]">
                  <Image
                    src="/downArrow.svg"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>{`${selectedAsset?.change}%`}</div>
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="flex w-95.5 px-0 pb-[15.399px] justify-center items-center aspect-ratio-59/42">
            <div className="flex w-[382px] p-[21.163px] flex-col items-start shrink-0 rounded-[21.163px] bg-[rgba(21,27,48,0.4)]">
              {selectedAsset && (
                <div className="w-full">
                  {/* Header */}
                  <div className="flex self-stretch pb-[10.582px] items-start justify-between h-[46.56px]">
                    <div>
                      {/* <h2 className="text-white text-lg font-medium">
                      {selectedAsset.name}
                    </h2> */}
                      <p
                        className="text-[#F8F7FC] font-recoleta text-[21.163px] font-normal leading-[1.3] tracking-[-0.004px]"
                        style={
                          {
                            leadingTrim: "both",
                            textEdge: "cap",
                          } as any
                        }
                      >
                        {selectedAsset.name}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-1 ">
                      {/* Dropdown */}
                      <div className="relative text-[#F8F7FC] text-right font-poppins text-[12.698px] font-medium leading-normal flex justify-end">
                        <select
                          value={range}
                          onChange={(e) => setRange(e.target.value)}
                          className="appearance-none rounded-lg px-3 py-1 pr-7 focus:outline-none"
                        >
                          <option>Today </option>
                          <option>Last Week</option>
                          <option>Last Month</option>
                          <option>3 Months</option>
                          <option>1 Year</option>
                        </select>

                        {/* Down arrow */}
                        <span className="pointer-events-none absolute top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                          ▼
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-[220px] -ml-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={SelectedData}
                        margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                      >
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

                        <CartesianGrid
                          stroke="rgba(255,255,255,0.05)"
                          vertical={false}
                        />

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

                        <Tooltip
                          contentStyle={{
                            background: "#0d1220",
                            border: "none",
                            borderRadius: "8px",
                            color: "#fff",
                            fontSize: 12,
                            padding: "8px",
                          }}
                          labelStyle={{ color: "#aaa", fontSize: 10 }}
                          cursor={{
                            stroke: "rgba(255,255,255,0.1)",
                            strokeWidth: 2,
                          }}
                        />

                        {/* AREA under the line with custom dots */}
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="none"
                          fill="url(#areaGradient)"
                          isAnimationActive={false}
                          dot={({ cx, cy, index }) => {
                            const highlightPoints: any = {
                              1: MoonIcon,
                              4: MercuryIcon,
                              6: BulbIcon,
                            };

                            const imgSrc = highlightPoints[index];
                            if (!imgSrc) return null;

                            return (
                              <image
                                href={imgSrc.src} // Use SVG <image> inside chart
                                x={(cx ?? 0) - 12} // fallback to 0 if undefined
                                y={(cy ?? 0) - 12} // center vertically
                                width={24}
                                height={24}
                              />
                            );
                          }}
                        />

                        {/* Line on top */}
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="url(#lineStroke)"
                          strokeWidth={2.5}
                          dot={false} // no default dots
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="flex w-full justify-between items-center p-0.5 self-stretch">
          {["Sentiment", "Volatility", "Edge"].map((asset: any) => {
            return (
              <button
                key={asset}
                className={`
           flex items-center justify-center
           h-10 px-6 py-2 w-[113.67px]
          rounded-2xl gap-2 border
         bg-[#1E25404D] border-b border-[#C5D1E033]
        `}
              >
                <p className="text-[#F8F7FC] text-center font-Satoshi text-[14px] font-bold leading-[1.5]">
                  {asset}
                </p>
              </button>
            );
          })}
        </div>

        <div
          className="gap-7.5 rounded-[10.78px] bg-[#1E25404D] flex flex-col items-center justify-center self-stretch"
          style={{
            paddingTop: "17.96px",
            paddingRight: "20px",
            paddingBottom: "17.96px",
            paddingLeft: "20px",
            opacity: 1,
            transform: "rotate(0deg)", // angle 0
          }}
        >
          <h2 className="font-Recoleta text-[20px] leading-[130%] text-[#F8F7FC] font-normal self-stretch text-center">
            Trending Now
          </h2>

          <div className="flex justify-center items-center content-center gap-[11px_9.88px] self-stretch flex-wrap">
            {data?.trending.map((trending: any) => (
              <div className="flex justify-center items-center content-center flex-wrap self-stretch gap-[8.576px] py-[8.576px] px-[17.152px] rounded-[17.152px] border-[0.858px] border-[rgba(197,209,224,0.2)] bg-[rgba(21,27,48,0.3)]">
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
      </main>
    </>
  );
};

export default MarketIntelligencePage;
