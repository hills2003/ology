"use client";

import { FC, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import closeIcon from "../public/closeIcon.svg";
import Image from "next/image";

interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;

  title?: string;
}

const GlassModal: FC<GlassModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        // Backdrop
        <motion.div
          key="backdrop"
          className="fixed inset-0 bg-[#0d1220]/50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // click outside to close
        >
          {/* Modal Card */}
          <motion.div
            key="modal"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="
    flex flex-col justify-center items-center
    min-w-[361px] max-w-[380px] py-[20px] gap-4
    rounded-[20px]
    border border-[rgba(108,139,164,0.1)]
    bg-gradient-[179deg,rgba(165,196,211,0.05)_15.5%,rgba(93,112,125,0.05)_63.9%,rgba(10,14,26,0.05)_99.46%]
    shadow-inner
    backdrop-blur-[10px]
  "
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
          >
            <div className="w-full flex flex-col justify-start items-end text-[#F8F7FC80]">
              <button
                className="relative w-4 h-4 mb-4 right-4"
                onClick={onClose}
              >
                <Image
                  src={closeIcon}
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </button>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="361"
                height="1"
                viewBox="0 0 361 1"
                fill="none"
              >
                <path
                  opacity="0.26"
                  d="M0 0.479614L361 0.479614"
                  stroke="url(#paint0_linear_2005_2336)"
                  stroke-width="0.959184"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2005_2336"
                    x1="361"
                    y1="1.46607"
                    x2="360.99"
                    y2="-1.00448"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C5D1E0" stop-opacity="0.2" />
                    <stop
                      offset="0.382632"
                      stop-color="#E8D5E0"
                      stop-opacity="0.18"
                    />
                    <stop
                      offset="0.696367"
                      stop-color="#7FA8D4"
                      stop-opacity="0.2"
                    />
                    <stop offset="1" stop-color="#9B8FD4" stop-opacity="0.15" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex flex-col items-start py-[10px] px-[20px] gap-[27px] self-stretch">
              <div className="self-stretch h-[43px] gap-[20px]">
                <h1 className="text-[#F8F7FC] text-center font-Recoleta text-[20px] font-normal leading-[130%] tracking-[-0.004px]">
                  NVDA Long Position
                </h1>
                <p className="text-[#7FA8D4] mt-2 text-center font-Satoshi text-[13px] font-medium leading-[140%] tracking-[0.52px] uppercase">
                  High Conviction Trade
                </p>
              </div>

              <div className="text-[#F8F7FC] text-center font-Satoshi text-[16px] font-normal leading-[160%]">
                Mercury retrograde stations today. Clarity drops but your Warden
                edge holds. Watch for false breakout, position after Feb 28 when
                Mercury conjuncts Venus.
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="361"
              height="1"
              viewBox="0 0 361 1"
              fill="none"
            >
              <path
                opacity="0.26"
                d="M0 0.479614L361 0.479614"
                stroke="url(#paint0_linear_2005_2336)"
                stroke-width="0.959184"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2005_2336"
                  x1="361"
                  y1="1.46607"
                  x2="360.99"
                  y2="-1.00448"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#C5D1E0" stop-opacity="0.2" />
                  <stop
                    offset="0.382632"
                    stop-color="#E8D5E0"
                    stop-opacity="0.18"
                  />
                  <stop
                    offset="0.696367"
                    stop-color="#7FA8D4"
                    stop-opacity="0.2"
                  />
                  <stop offset="1" stop-color="#9B8FD4" stop-opacity="0.15" />
                </linearGradient>
              </defs>
            </svg>
            <div className="flex py-2.5 px-5 items-end gap-2.75 justify-center">
              <button className="flex h-10 py-2 px-6 justify-center items-center gap-2 shrink-0 rounded-2xl border border-[0.7px] border-[#F8F7FC]">
                <span className="text-[#F8F7FC] text-center font-Satoshi text-[14px] font-bold leading-[150%]">
                  Analyze
                </span>
              </button>

              <button className="flex h-10 py-2 px-6 justify-center items-center gap-2 shrink-0 rounded-2xl border border-[0.7px] border-[#F8F7FC]">
                <span className="text-[#F8F7FC] text-center font-Satoshi text-[14px] font-bold leading-[150%]">
                  Set Alert
                </span>
              </button>

              <button className="flex h-10 py-2 px-6 justify-center items-center gap-2 shrink-0 rounded-2xl border border-[0.7px] border-[#F8F7FC] bg-[#7FA8D4]">
                <span className="text-[#060811] text-center font-Satoshi text-[14px] font-bold leading-[150%]">
                  Hold Pattern
                </span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlassModal;
