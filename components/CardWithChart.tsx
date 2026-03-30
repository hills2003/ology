import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface CardWithChartProps {
  header: string;
  subtitle: string;
  subsubtitle: string;
  chartData: { name: string; value: number }[];
}

// Custom bar shape to alternate colors
const CustomBar = (props: any) => {
  const { x, y, width, height, index } = props;
  const fill = index % 2 === 0 ? "#7DAA92" : "#A5C4D34D";
  return <rect x={x} y={y} width={width} height={height} fill={fill} rx={5} />;
};

const CardWithChart: React.FC<CardWithChartProps> = ({
  header,
  subtitle,
  subsubtitle,
  chartData,
}) => {
  return (
    <div
      className="w-[382px] h-[458px] flex flex-col justify-between
                 p-6 gap-[28px] rounded-[20px] 
                 bg-[linear-gradient(179.37deg,rgba(165,196,211,0.055)_15.5%,rgba(93,112,125,0.055)_63.9%,rgba(10,14,26,0.055)_99.46%)] opacity-100"
    >
      {/* Header Section */}
      <div className="flex flex-col gap-[8px] text-center">
        <h2 className="font-Recoleta font-medium text-[20px] text-[#F8F7FC]">
          {header}
        </h2>
        <h3 className="font-satoshi font-medium text-[14px] text-[#7DD3C0]">
          {subtitle}
        </h3>
        <p className="font-satoshi font-normal text-[13px] text-[#F8F7FC] leading-[150%]">
          {subsubtitle}
        </p>
      </div>

      {/* Chart Section */}
      <div className="w-full h-[200px] rounded-[13px] bg-[#151B3066] p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} barCategoryGap="25%">
            <XAxis
              dataKey="name"
              tick={{ fill: "#F8F7FC", fontSize: 12 }}
              axisLine={{ stroke: "#6C8BA41A" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#F8F7FC", fontSize: 12 }}
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

            {/* Bar with custom shape */}
            <Bar
              dataKey="value"
              barSize={38}
              shape={(props) => <CustomBar {...props} />}
              isAnimationActive
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CardWithChart;
