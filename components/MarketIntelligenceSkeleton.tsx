"use client";

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Header from "@/components/Header";

const MarketIntelligenceSkeleton: React.FC = () => {
  return (
    <>
      <main className="flex flex-col items-center px-5 md:px-8 pt-10 pb-20 min-h-[calc(100vh-70px)] gap-8">
        {/* Page title */}
        <Skeleton
          width={220}
          height={30}
          baseColor="#1A1F33"
          highlightColor="#2C3455"
        />

        {/* Asset tabs placeholder */}
        <div className="flex gap-[6px] w-full justify-around relative flex-wrap mt-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton
              key={i}
              width={90}
              height={40}
              baseColor="#1A1F33"
              highlightColor="#2C3455"
              className="rounded-[24px]"
            />
          ))}
        </div>

        {/* Price & change */}
        <div className="flex flex-col items-center mt-6 gap-2">
          <Skeleton
            width={150}
            height={40}
            baseColor="#1A1F33"
            highlightColor="#2C3455"
          />
          <Skeleton
            width={80}
            height={20}
            baseColor="#1A1F33"
            highlightColor="#2C3455"
          />
        </div>

        {/* Chart card */}
        <div className="w-full max-w-3xl mt-6 p-6 rounded-2xl bg-[#151B3066] flex flex-col gap-4">
          <div className="flex justify-between">
            <Skeleton
              width={100}
              height={20}
              baseColor="#1A1F33"
              highlightColor="#2C3455"
            />
            <Skeleton
              width={80}
              height={20}
              baseColor="#1A1F33"
              highlightColor="#2C3455"
            />
          </div>
          <div className="w-full h-[220px] mt-4">
            <Skeleton
              width="100%"
              height="100%"
              baseColor="#1A1F33"
              highlightColor="#2C3455"
            />
          </div>
        </div>

        {/* Metrics tabs: Sentiment, Volatility, Edge */}
        <div className="flex gap-[6px] w-full justify-around flex-wrap mt-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton
              key={i}
              width={90}
              height={40}
              baseColor="#1A1F33"
              highlightColor="#2C3455"
              className="rounded-[16px]"
            />
          ))}
        </div>

        {/* Trending Now card */}
        <div
          className="gap-[30px] rounded-[10.78px] bg-[#1E25404D] flex flex-col items-center min-h-[216px] h-auto mt-6"
          style={{
            width: "382px",
            paddingTop: "17.96px",
            paddingRight: "20px",
            paddingBottom: "17.96px",
            paddingLeft: "20px",
            opacity: 1,
            transform: "rotate(0deg)",
          }}
        >
          <Skeleton
            width={120}
            height={20}
            baseColor="#1A1F33"
            highlightColor="#2C3455"
          />

          <div className="flex flex-wrap justify-center w-full gap-3 mt-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton
                key={i}
                width={96}
                height={34}
                baseColor="#1A1F33"
                highlightColor="#2C3455"
                className="rounded-full"
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default MarketIntelligenceSkeleton;
