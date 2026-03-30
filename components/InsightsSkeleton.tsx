"use client";

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Header from "@/components/Header";

const InsightsSkeleton: React.FC = () => {
  return (
    <>
      <main className="flex flex-col items-start px-5 md:px-8 pt-10 pb-20 min-h-[calc(100vh-70px)] gap-8">
        {/* Date placeholder */}
        <Skeleton
          width={100}
          height={15}
          baseColor="#1A1F33"
          highlightColor="#2C3455"
          className="mb-2"
        />

        {/* Insight placeholder */}
        <Skeleton
          width={342}
          height={30}
          baseColor="#1A1F33"
          highlightColor="#2C3455"
        />

        {/* Author section (left aligned like component) */}
        <div className="flex justify-start items-center gap-[30px] mt-4 w-full max-w-[382px]">
          <Skeleton
            circle
            width={46}
            height={46}
            baseColor="#1A1F33"
            highlightColor="#2C3455"
          />
          <div className="flex flex-col">
            <Skeleton
              width={120}
              height={16}
              baseColor="#1A1F33"
              highlightColor="#2C3455"
              className="mb-2"
            />
            <Skeleton
              width={150}
              height={14}
              baseColor="#1A1F33"
              highlightColor="#2C3455"
            />
          </div>
        </div>

        {/* Dos & Don'ts */}
        <div className="w-[382px] h-[85px] flex justify-between gap-[20px] mt-[30px]">
          <div className="flex-1">
            <Skeleton
              width={50}
              height={16}
              baseColor="#1A1F33"
              highlightColor="#2C3455"
              className="mb-1"
            />
            <Skeleton
              count={3}
              width={`100%`}
              height={12}
              baseColor="#1A1F33"
              highlightColor="#2C3455"
              className="mb-1"
            />
          </div>
          <div className="flex-1">
            <Skeleton
              width={60}
              height={16}
              baseColor="#1A1F33"
              highlightColor="#2C3455"
              className="mb-1"
            />
            <Skeleton
              count={3}
              width={`100%`}
              height={12}
              baseColor="#1A1F33"
              highlightColor="#2C3455"
            />
          </div>
        </div>

        {/* Card with chart */}
        <div className="w-[382px] h-[458px] flex flex-col items-center gap-[28px]">
          {/* Header placeholders */}
          <Skeleton
            circle
            width={56} // make width = height for a perfect circle
            height={56}
            className="mx-auto mb-[28px]"
            baseColor="#1A1F33"
            highlightColor="#2C3455"
          />
          <Skeleton
            width={200}
            height={20}
            className="mx-auto mb-2"
            baseColor="#1A1F33"
            highlightColor="#2C3455"
          />
          <Skeleton
            width={250}
            height={14}
            className="mx-auto"
            baseColor="#1A1F33"
            highlightColor="#2C3455"
          />

          {/* Chart placeholder */}
          <div className="w-full h-[258px] rounded-[13px] -ml-2">
            <Skeleton
              width="100%"
              height="100%"
              baseColor="#1A1F33"
              highlightColor="#2C3455"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default InsightsSkeleton;
