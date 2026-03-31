import React from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

// ✅ Define type for your data
type PortfolioChartProps = {
  data: any;
};

const PortfolioChart: React.FC<PortfolioChartProps> = ({ data }) => {
  return (
    <div
      className="w-85.5 h-[87.65px] rounded-[12.99px]
                   pt-[27.05px] pr-[17.31px] pl-[17.31px]
                   bg-[linear-gradient(179.37deg,rgba(165,196,211,0.055)_15.5%,rgba(93,112,125,0.055)_63.9%,rgba(10,14,26,0.055)_99.46%)]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barCategoryGap="25%">
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
  );
};

export default PortfolioChart;
