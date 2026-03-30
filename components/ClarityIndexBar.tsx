import React from "react";
import { dashboardData } from "../data/mockData";

const ClarityIndexBar = () => {
  const value = dashboardData.clarityIndex; // e.g. 78
  const valuePercent = Math.min(Math.max(value, 0), 100);

  // Define gradient stops with percentage
  const gradientStops = [
    { color: "rgba(82, 212, 164, 0.455)", stop: 0 },
    { color: "rgba(247, 168, 66, 0.65)", stop: 25 },
    { color: "rgba(232, 155, 127, 0.65)", stop: 75 },
    { color: "rgba(214, 107, 126, 0.65)", stop: 100 },
  ];

  // Function to get pointer color based on valuePercent
  const getPointerColor = (percent: number) => {
    const reversedPercent = 100 - percent; // reverse %
    for (let i = 0; i < gradientStops.length - 1; i++) {
      const curr = gradientStops[i];
      const next = gradientStops[i + 1];
      if (reversedPercent >= curr.stop && reversedPercent <= next.stop) {
        return curr.color;
      }
    }
    return gradientStops[gradientStops.length - 1].color;
  };

  const pointerColor = getPointerColor(valuePercent);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Card */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-center text-white text-[20px] font-Recoleta font-regular mb-[40px] leading-[130%]">
          Clarity Index
        </h2>

        {/* Bar wrapper */}
        <div className="relative">
          {/* Indicator */}
          <div
            className="absolute -top-6 flex items-center gap-2"
            style={{
              left: `${valuePercent}%`,
              transform: "translateX(-50%)",
            }}
          >
            {/* Marker */}
            <div
              className="w-[4px] h-[16px] rounded"
              style={{ backgroundColor: pointerColor }}
            />

            {/* Label */}
            <span
              className="text-sm font-medium whitespace-nowrap"
              style={{ color: pointerColor }}
            >
              {valuePercent - 4}–{valuePercent + 3}%
            </span>
          </div>

          {/* Gradient bar */}
          <div
            className="w-full h-[15px] rounded-full"
            style={{
              background: `linear-gradient(
                270deg,
                rgba(82, 212, 164, 0.455) 0%,
                rgba(247, 168, 66, 0.65) 25%,
                rgba(232, 155, 127, 0.65) 75%,
                rgba(214, 107, 126, 0.65) 100%
              )`,
            }}
          />

          {/* Bottom labels */}
          <div className="font-satoshi text-[12px] font-medium flex justify-between text-xs text-white/60 mt-4 px-1 tracking-wide">
            <span>REACTIVE</span>
            <span>CAUTIOUS</span>
            <span>ALIGNED</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClarityIndexBar;
