"use client";

import { FC, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Cell,
  RadialBarChart,
  RadialBar,
} from "recharts";
import Image from "next/image";
import closeIcon from "../public/closeIcon.svg";
import Gauge from "./Guage";

interface GlassChartModalProps {
  isOpen: boolean;
  onClose: () => void;
  bgColor?: string; // card background
  borderColor?: string; // card border
  chartType?: "bar" | "radial" | undefined; // top chart type
  chartData?: any[];
  chartColor?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

const GlassChartModal: FC<GlassChartModalProps> = ({
  isOpen,
  onClose,
  bgColor = "rgba(127,168,212,0.15)",
  borderColor = "#A8CCF3",
  chartType = "bar",
  chartData = [
    { name: "9:30", value: 40 },
    { name: "10:00", value: 70 },
  ],
  chartColor = "#7FA8D4",
  title = "Market Update",
  subtitle = "High Conviction Trade",
  description = "Some additional info about the market move and trade insights here.",
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Modal card */}
          <motion.div
            key="modal"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className={`flex flex-col items-center gap-[31px] p-5 rounded-[20px] border shadow-inner backdrop-blur-[10px]`}
            style={{
              background: bgColor,
              border: `0.7px solid ${borderColor}`,
              minWidth: "360px",
              maxWidth: "400px",
            }}
          >
            {/* Top chart */}
            <div className="w-full h-40">
              {chartType === "bar" && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData}
                    margin={{ top: 0, right: 0, left: -10, bottom: 0 }}
                  >
                    <Bar
                      dataKey="value"
                      fill={chartColor}
                      radius={[5, 5, 0, 0]}
                    >
                      {/* {chartData.map((entry, idx) => (
                        <Cell key={idx} fill={chartColor} />
                      ))} */}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              )}
              {chartType === "radial" && (
                <div className="w-full h-37.5 flex items-center justify-center">
                  <Gauge
                    width={150}
                    height={75} // half-circle
                    value={chartData[0]?.value ?? 0} // just the percentage
                    startAngle={-90}
                    endAngle={90}
                    strokeWidth={15}
                    color={chartColor}
                    bgColor={bgColor}
                  />
                </div>
              )}
            </div>

            {/* Middle content */}
            <div className="flex flex-col items-center text-center gap-2 w-full px-3">
              <h1 className="text-[#F8F7FC] font-Recoleta text-[16px] font-medium leading-[130%]">
                {title}
              </h1>
              <p className="text-[#7FA8D4] font-Satoshi text-[13px] font-medium uppercase tracking-[0.52px]">
                {subtitle}
              </p>
              <p className="text-[#F8F7FC] font-Satoshi text-[16px] leading-[160%] mt-2">
                {description}
              </p>
            </div>

            {/* Bottom Close button */}

            <button className="relative w-4 h-4 mb-4" onClick={onClose}>
              <Image
                src={closeIcon}
                alt="Logo"
                fill
                className="object-contain"
              />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlassChartModal;
