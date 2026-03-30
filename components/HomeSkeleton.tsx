import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HomeSkeleton: React.FC = () => {
  // Sleek Meta-like colors
  const baseColor = "#1A1F33"; // dark gray base
  const highlightColor = "#2C3455"; // lighter gray shimmer

  return (
    <div className="flex justify-center items-center px-[1px]">
      <div className="mt-6 w-full max-w-3xl mx-auto flex flex-col items-center gap-6">
        {/* Top small bar (36px height, full width) */}
        <Skeleton
          width={342}
          height={36}
          borderRadius={12}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />

        {/* Large content placeholder (289px height, full width) */}
        <Skeleton
          width={342}
          height={289}
          borderRadius={20}
          className="mt-4"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />

        {/* Portfolio stats section (grid) */}
        <div className="grid grid-cols-2 gap-4 mt-4 justify-center">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton
              key={index}
              width={162.34}
              height={85.6}
              borderRadius={13}
              baseColor={baseColor}
              highlightColor={highlightColor}
            />
          ))}
        </div>

        {/* Chart placeholder */}
        <Skeleton
          width={342}
          height={87.65}
          borderRadius={13}
          className="mt-4"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />

        {/* Text content */}
        <Skeleton
          width={342}
          height={60}
          borderRadius={8}
          className="mt-4"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />

        {/* Link placeholder */}
        <Skeleton
          width={180}
          height={16}
          borderRadius={8}
          className="mt-4"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />

        {/* Bottom divider bar */}
        <Skeleton
          width={342}
          height={30.64}
          borderRadius={12}
          className="mt-4"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>
    </div>
  );
};

export default HomeSkeleton;
