import { ReactNode } from "react";

type GradientCardProps = {
  children: ReactNode;
};

export default function GradientCard({ children }: GradientCardProps) {
  return (
    <div
      className="
        w-full
        min-h-30
        h-[289px]
        flex flex-col items-center justify-between gap-4!
        py-5 px-5
        rounded-[20px]
        border
        backdrop-blur-[20px]
        shadow-[inset_0px_2px_20px_0px_rgba(0,0,0,0)]
        
      "
      style={{
        background:
          "linear-gradient(313.07deg, rgba(184,103,58,0.2) 14.9%, rgba(13,27,42,0) 98.18%)",
        border: "1px solid rgba(232,155,127,0.2)",
      }}
    >
      {children}
    </div>
  );
}
