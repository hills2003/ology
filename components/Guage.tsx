// components/Gauge.tsx
import React from "react";

interface GaugeProps {
  width: number;
  height: number;
  value: number; // 0-100
  startAngle?: number;
  endAngle?: number;
  strokeWidth?: number;
  color?: string;
  bgColor?: string;
}

const Gauge: React.FC<GaugeProps> = ({
  width,
  height,
  value,
  startAngle = -90,
  endAngle = 90,
  strokeWidth = 15,
  color = "#7FA8D4",
  bgColor = "#1E25404D",
}) => {
  const radius = (width - strokeWidth) / 2;
  const angleRange = endAngle - startAngle;
  const filledAngle = startAngle + (angleRange * value) / 100;

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2}, ${height})`}>
        {/* Background Arc */}
        <path
          d={describeArc(0, 0, radius, startAngle, endAngle)}
          fill="none"
          stroke={bgColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Foreground Arc */}
        <path
          d={describeArc(0, 0, radius, startAngle, filledAngle)}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Percentage Text */}
        <text
          x="0"
          y="-10"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-white font-Satoshi font-bold text-lg"
        >
          {value}%
        </text>
      </g>
    </svg>
  );
};

export default Gauge;

// SVG helpers
function describeArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number,
) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number,
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}
