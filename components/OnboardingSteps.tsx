"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ologyLogo from "@/public/ologyLogo.svg";
import nextIcon from "@/public/nextIcon.svg";
// import taurusIcon from "@/public/"
import venus from "@/public/Venus.svg";
import neptune from "@/public/neptune.svg";
import earth from "@/public/earth.svg";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

type WrapperProps = {
  children: React.ReactNode;
};

// const zodiac = [{
//   icon:taurusIcon,
//   text:"Taurus"
// },{
//    icon:scorpioIcon,
//   text:"Scorpio"
// },
// {
//    icon:virgoIcon,
//   text:"Virgo"
// }]

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="w-full">{children}</div>;
};

const Welcome = ({ onNext }: any) => (
  <div className="flex flex-col h-screen items-center justify-between">
    <div className="h-[185px] flex justify-between items-end p-5">
      <div className="relative w-37.5 h-[62.5px] aspect-[12/5]">
        <Image src={ologyLogo} alt="Logo" fill className="object-contain" />
      </div>
    </div>

    <div className="flex flex-col justify-between pt-15 px-2.5 pb-12.5 items-center h-149.25">
      <div className="h-71.25 flex flex-col justify-between items-center shrink-0">
        <div className="flex flex-col justify-center items-center gap-12.25">
          <div className="flex flex-col justify-center items-center self-stretch gap-10">
            <h1 className="text-[#E8E9F3] text-center font-Recoleta text-[32px] font-normal leading-[120%]">
              Welcome
            </h1>

            <p className="text-[#E8E9F3] text-center font-Satoshi text-[22px] font-normal leading-[180%] tracking-[0.44px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] self-stretch">
              Trade in sync with the market, and yourself.
            </p>
          </div>
        </div>

        <div className="inline-flex items-start">
          <button
            onClick={onNext}
            className="flex py-3 px-8 font-Satoshi gap-2 justify-center items-center rounded-2xl border border-[rgba(248,247,252,0.5)] bg-[linear-gradient(303deg,rgba(197,209,224,0.14)_0.54%,rgba(232,213,224,0.13)_37.91%,rgba(127,168,212,0.14)_68.56%,rgba(155,143,212,0.11)_98.22%)]"
            style={
              {
                leadingTrim: "both",
                textEdge: "cap",
              } as any
            }
          >
            I'm new to Ology.
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10">
        <p className="text-[rgba(255,255,255,0.86)] text-center font-Satoshi text-[14px] italic font-normal underline decoration-solid [text-decoration-skip-ink:none] [text-decoration-thickness:4%] underline-offset-[25%]">
          I already have an account. →
        </p>
      </div>
    </div>
  </div>
);

const EnterName = ({ data, setData, onNext }: any) => {
  const canProceed = data.name?.trim().length > 0;

  return (
    <div className="h-screen flex flex-col items-center">
      <div className="flex justify-between items-center pt-5 pr-5 pb-0 pl-5 shrink-0">
        <div className="flex items-center gap-[23.662px] pt-[43.67px] pb-[43.67px]">
          <div className="relative w-28 h-[46.667px] aspect-[12/5]">
            <Image src={ologyLogo} alt="Logo" fill className="object-contain" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-center gap-25.75 pt-10 px-2.5 pb-12.5 flex-[1_0_0]">
        <div className="flex flex-col items-center gap-20.5 h-84.75">
          <div className="flex flex-col justify-center items-center gap-7.5 self-stretch">
            <h1 className="text-[#E8E9F3] text-center font-Recoleta text-[32px] font-normal leading-[120%] self-stretch">
              What should we call you?
            </h1>
          </div>

          <input
            className="
            py-4 px-5
            w-full rounded-[10px] border border-[rgba(248,247,252,0.1)]
            text-center
            placeholder-text-[#F8F7FC] placeholder-font-Satoshi placeholder-text-[13px] placeholder-normal placeholder-tracking-[1.95px] placeholder-uppercase
          "
            placeholder="Enter Your Name"
            style={
              {
                leadingTrim: "both",
                textEdge: "cap",
              } as any
            }
            value={data.name || ""}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>

        <button
          className="relative w-9.25 h-9.25 aspect-[1/1]"
          disabled={!canProceed}
          onClick={onNext}
        >
          <Image src={nextIcon} alt="Logo" fill className="object-contain" />
        </button>
      </div>

      {/* <input
        placeholder="Enter your name"
        className="w-full p-3 rounded-xl"
        
      />
      <button >
        Continue
      </button> */}
    </div>
  );
};

const AccountSetup = ({ data, setData, onNext }: any) => {
  const canProceed =
    data.username?.length > 2 &&
    data.password?.length >= 6 &&
    data.phone?.length > 6;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen flex flex-col items-center w-full">
      <div className="flex justify-between items-center pt-5 pr-5 pb-0 pl-5 shrink-0">
        <div className="flex items-center gap-[23.662px] pt-[43.67px] pb-[43.67px]">
          <div className="relative w-28 h-[46.667px] aspect-[12/5]">
            <Image src={ologyLogo} alt="Logo" fill className="object-contain" />
          </div>
        </div>
      </div>
      <div className="h-screen w-full flex flex-col justify-start items-center gap-[103px] pt-10 px-2.5 pb-12.5 flex-[1_0_0]">
        <div className="w-full flex flex-col items-center gap-20.5 h-auto">
          <div className="flex flex-col justify-center items-center gap-7.5 self-stretch">
            <h1 className="text-[#E8E9F3] text-center font-Recoleta text-[32px] font-normal leading-[120%] self-stretch">
              Hi {data?.name}.
            </h1>
            <p
              className="self-stretch text-[#e8e9f3d3] 
                text-center 
                font-Satoshi 
                text-[17px] 
                font-normal 
                leading-[180%] 
                [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]"
            >
              Let's setup your account.
            </p>
          </div>

          <div className="w-full flex flex-col justify-center items-center self-stretch gap-4">
            {/* <input
              className="
            py-4 px-5
            w-full rounded-[10px] border border-[rgba(248,247,252,0.1)]
            text-center
            placeholder-text-[#F8F7FC] placeholder-font-Satoshi placeholder-text-[13px] placeholder-normal placeholder-tracking-[1.95px] placeholder-uppercase
          "
              style={
                {
                  leadingTrim: "both",
                  textEdge: "cap",
                } as any
              }
              placeholder="Enter Your Phone Number"
              value={data.phone || ""}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            /> */}
            <input
              type="tel"
              inputMode="tel"
              className="
    py-4 px-5
    w-full rounded-[10px] border border-[rgba(248,247,252,0.1)]
    text-center
    placeholder:text-[#F8F7FC] placeholder:font-Satoshi placeholder:text-[13px] placeholder:tracking-[1.95px] placeholder:uppercase
  "
              style={
                {
                  leadingTrim: "both",
                  textEdge: "cap",
                } as any
              }
              placeholder="Enter Your Phone Number"
              value={data.phone || ""}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />

            <input
              className="
            py-4 px-5
            w-full rounded-[10px] border border-[rgba(248,247,252,0.1)]
            text-center
            placeholder-text-[#F8F7FC] placeholder-font-Satoshi placeholder-text-[13px] placeholder-normal placeholder-tracking-[1.95px] placeholder-uppercase
          "
              placeholder="Create your username"
              style={
                {
                  leadingTrim: "both",
                  textEdge: "cap",
                } as any
              }
              value={data.username || ""}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />

            {/* <input
              className="
            py-4 px-5
            w-full rounded-[10px] border border-[rgba(248,247,252,0.1)]
            text-center
            placeholder-text-[#F8F7FC] placeholder-font-Satoshi placeholder-text-[13px] placeholder-normal placeholder-tracking-[1.95px] placeholder-uppercase
          "
              placeholder="Create Your Password"
              style={
                {
                  leadingTrim: "both",
                  textEdge: "cap",
                } as any
              }
              value={data.password || ""}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            /> */}

            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                className="
          py-4 px-5 pr-12
          w-full rounded-[10px] border border-[rgba(248,247,252,0.1)]
          text-center
          placeholder-text-[#F8F7FC] placeholder:font-Satoshi placeholder:text-[13px] placeholder:tracking-[1.95px] placeholder:uppercase
        "
                placeholder="Create Your Password"
                style={
                  {
                    leadingTrim: "both",
                    textEdge: "cap",
                  } as any
                }
                value={data.password || ""}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />

              {/* 👁 Eye Icon */}
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#f8f7fcaa] hover:text-white"
              >
                {data.password &&
                  (showPassword ? <EyeOff size={18} /> : <Eye size={18} />)}
              </button>
            </div>
          </div>
        </div>

        <button
          className="relative w-9.25 h-9.25 aspect-[1/1]"
          disabled={!canProceed}
          onClick={onNext}
        >
          <Image src={nextIcon} alt="Logo" fill className="object-contain" />
        </button>
      </div>
    </div>
  );
};

const BirthDetails = ({ data, setData, onNext }: any) => {
  const canProceed = data.dob && data.time && data.location;

  const formatDOB = (value: string) => {
    let digits = value.replace(/\D/g, "").slice(0, 8);

    let mm = digits.slice(0, 2);
    let dd = digits.slice(2, 4);
    let yyyy = digits.slice(4, 8);

    if (mm && parseInt(mm) > 12) mm = "12";
    if (dd && parseInt(dd) > 31) dd = "31";

    if (digits.length <= 2) return mm;
    if (digits.length <= 4) return `${mm} / ${dd}`;
    return `${mm} / ${dd} / ${yyyy}`;
  };

  const formatTime = (value: string) => {
    // Remove everything except digits
    let digits = value.replace(/\D/g, "").slice(0, 4); // HHMM max

    let hh = digits.slice(0, 2);
    let mm = digits.slice(2, 4);

    // Clamp hours and minutes
    if (hh && parseInt(hh) > 12) hh = "12";
    if (mm && parseInt(mm) > 59) mm = "59";

    // Return formatted string
    if (digits.length <= 2) return hh;
    if (digits.length <= 4) return `${hh}:${mm} - `;
    return `${hh}:${mm} - ${value.slice(-2).toUpperCase()}`; // keep AM/PM if user types it
  };

  return (
    <div className="h-screen flex flex-col items-center">
      <div className="flex justify-between items-center pt-5 pr-5 pb-0 pl-5 shrink-0">
        <div className="flex items-center gap-[23.662px] pt-[43.67px] pb-[43.67px]">
          <div className="relative w-28 h-[46.667px] aspect-[12/5]">
            <Image src={ologyLogo} alt="Logo" fill className="object-contain" />
          </div>
        </div>
      </div>
      <div className="h-screen w-full flex flex-col justify-start items-center gap-[103px] pt-10 px-2.5 pb-12.5 flex-[1_0_0]">
        <div className="w-full flex flex-col items-center gap-20.5 h-auto">
          <div className="flex flex-col justify-center items-center gap-7.5 self-stretch">
            <h1 className="text-[#E8E9F3] text-center font-Recoleta text-[32px] font-normal leading-[120%] self-stretch">
              Natal Chart Input
            </h1>
            <p
              className="self-stretch text-[#e8e9f3d3] 
                text-center 
                font-Satoshi 
                text-[17px] 
                font-normal 
                leading-[180%] 
                [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]"
            >
              Your birth data unlocks tailored market timing
            </p>
          </div>

          <div className="w-full flex flex-col justify-center items-center self-stretch gap-4">
            <input
              type="tel"
              inputMode="numeric"
              className="
              py-4 px-5
              w-full rounded-[10px] border border-[rgba(248,247,252,0.1)]
              text-center text-white
              placeholder:text-[#F8F7FC] placeholder:font-Satoshi placeholder:text-[13px] placeholder:tracking-[1.95px] placeholder:uppercase
            "
              placeholder="Date of Birth ( MM / DD / YYYY )"
              value={data.dob || ""}
              onChange={(e) => {
                const formatted = formatDOB(e.target.value);
                setData((prev: any) => ({
                  ...prev,
                  dob: formatted,
                }));
              }}
            />

            <input
              type="tel"
              inputMode="numeric"
              className="
                py-4 px-5
                w-full rounded-[10px] border border-[rgba(248,247,252,0.1)]
                text-center text-white
                placeholder:text-[#F8F7FC] placeholder:font-Satoshi placeholder:text-[13px] placeholder:tracking-[1.95px] placeholder:uppercase
              "
              placeholder="Time of Birth ( HH:MM - AM/PM )"
              value={data.time || ""}
              onChange={(e) => {
                const formatted = formatTime(e.target.value);
                setData((prev: any) => ({
                  ...prev,
                  time: formatted,
                }));
              }}
            />

            <input
              className="
            py-4 px-5
            w-full rounded-[10px] border border-[rgba(248,247,252,0.1)]
            text-center
            placeholder-text-[#F8F7FC] placeholder-font-Satoshi placeholder-text-[13px] placeholder-normal placeholder-tracking-[1.95px] placeholder-uppercase
          "
              placeholder="Location of Birth"
              style={
                {
                  leadingTrim: "both",
                  textEdge: "cap",
                } as any
              }
              value={data.location || ""}
              onChange={(e) => setData({ ...data, location: e.target.value })}
            />
          </div>
        </div>

        <button
          className="relative w-9.25 h-9.25 aspect-[1/1]"
          disabled={!canProceed}
          onClick={onNext}
        >
          <Image src={nextIcon} alt="Logo" fill className="object-contain" />
        </button>
      </div>
    </div>
  );
};

const Preview = ({ onNext }: any) => (
  <div className="h-screen flex flex-col items-center">
    <div className="flex justify-between items-center pt-5 pr-5 pb-0 pl-5 shrink-0">
      <div className="flex items-center gap-[23.662px] pt-[43.67px] pb-[43.67px]">
        <div className="relative w-28 h-[46.667px] aspect-[12/5]">
          <Image src={ologyLogo} alt="Logo" fill className="object-contain" />
        </div>
      </div>
    </div>
    <div className="h-screen w-full flex flex-col justify-start items-center gap-[103px] pt-10 px-2.5 pb-12.5 flex-[1_0_0]">
      <div className="w-full flex flex-col items-center gap-20.5 h-auto">
        <div className="flex flex-col justify-center items-center gap-[34.812px] mt-[32px] self-stretch">
          <h1 className="text-[#E8E9F3] text-center font-Recoleta text-[37.133px] font-normal leading-[120%] self-stretch">
            Volatility Warden
          </h1>
          <p
            className="self-stretch text-[#e8e9f3d3] 
                text-center 
                font-Satoshi 
                text-[19.727px] 
                font-normal 
                leading-[180%] 
                [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]"
            style={
              {
                leadingTrim: "both",
                textEdge: "cap",
              } as any
            }
          >
            You hold the line when others panic.
          </p>
        </div>
        <div className="flex flex-col justify-center items-start gap-[30.637px]">
          <p
            className=" text-[#FFF] 
  text-center 
  font-Recoleta 
  text-[18.208px] 
  font-normal 
  leading-[130%] 
  tracking-[0.364px] self-stretch"
          >
            <span>
              ☉ Taurus&nbsp;&nbsp;&nbsp;☽ Scorpio&nbsp;&nbsp;&nbsp;↑ Virgo
            </span>
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-[37.812px]">
        <div className="relative w-[60.148px] h-[60.148px] aspect-[12/5]">
          <Image src={venus} alt="Logo" fill className="object-contain" />
        </div>

        <div className="relative w-[60.148px] h-[60.148px] aspect-[12/5]">
          <Image src={neptune} alt="Logo" fill className="object-contain" />
        </div>

        <div className="relative w-[60.148px] h-[60.148px] aspect-[12/5]">
          <Image src={earth} alt="Logo" fill className="object-contain" />
        </div>
      </div>

      <button
        className="relative w-9.25 h-9.25 aspect-[1/1]"
        // disabled={!canProceed}
        onClick={onNext}
      >
        <Image src={nextIcon} alt="Logo" fill className="object-contain" />
      </button>
    </div>
  </div>
);

const Complete = ({ onNext }: any) => (
  <div className="h-screen flex flex-col items-center">
    <div className="flex justify-between items-center py-[21.05px] px-5 shrink-0">
      <div className="flex items-center gap-[14.151pxpx]">
        <div className="relative w-[66.981px] h-[27.909px] aspect-[12/5]">
          <Image src={ologyLogo} alt="Logo" fill className="object-contain" />
        </div>
      </div>
    </div>

    <div className="h-screen w-full flex flex-col justify-between items-center py-7.5 pb-12.5 flex-[1_0_0]">
      <div className="w-full flex flex-col items-start gap-20.5 h-auto">
        <div className="flex flex-col justify-center items-center gap-[34.812px] self-stretch">
          <h1 className="text-[#E8E9F3] text-center font-Recoleta text-[32px] font-normal leading-[120%] self-stretch">
            The Volatility Warden
          </h1>
          <p
            className="self-stretch text-[#e8e9f3d3] 
                text-center 
                font-Satoshi 
                text-[15px] 
                font-normal 
                leading-[160%] 
                [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]"
            style={
              {
                leadingTrim: "both",
                textEdge: "cap",
              } as any
            }
          >
            Identifies high-probability accumulation and reversal windows,
            accumulating into fear and exiting on confirmation.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col justify-between items-start px-4 h-[195px]">
        <div className="flex justify-between items-center gap-4">
          <div
            className=" flex justify-center items-center
           
            p-[12.133px]
            gap-[10.405px]
            rounded-[20.81px]
            border border-[rgba(197,209,224,0.2)]
          bg-[rgba(21,27,48,0.3)]"
          >
            <p
              className="
                text-[#F8F7FC]
                font-Recoleta
                text-[13.57px]
                font-normal
                leading-[150%]
                tracking-[-0.136px]
              "
            >
              Taurus Sun
            </p>
          </div>

          <p
            className="
          text-[#F8F7FC]
          font-Satoshi
          text-[14.466px]
          font-medium
          leading-[150%]
        "
          >
            Builds positions others abandon.
          </p>
        </div>

        <div className="flex justify-between items-center gap-4">
          <div
            className=" flex justify-center items-center
            p-[12.133px]
            gap-[10.405px]
            rounded-[20.81px]
            border border-[rgba(197,209,224,0.2)]
          bg-[rgba(21,27,48,0.3)]"
          >
            <p
              className="
                text-[#F8F7FC]
                font-Recoleta
                text-[13.57px]
                font-normal
                leading-[150%]
                tracking-[-0.136px]
              "
            >
              Scorpio Moon
            </p>
          </div>

          <p
            className="
          text-[#F8F7FC]
          font-Satoshi
          text-[14.466px]
          font-medium
          leading-[150%]
        "
          >
            Feels the shift before the chart does.
          </p>
        </div>

        <div className="flex justify-between items-center gap-4">
          <div
            className=" flex justify-center items-center
           
            p-[12.133px]
            gap-[10.405px]
            rounded-[20.81px]
            border border-[rgba(197,209,224,0.2)]
          bg-[rgba(21,27,48,0.3)]"
          >
            <p
              className="
                text-[#F8F7FC]
                font-Recoleta
                text-[13.57px]
                font-normal
                leading-[150%]
                tracking-[-0.136px]
              "
            >
              Virgo Rising
            </p>
          </div>

          <p
            className="
          text-[#F8F7FC]
          font-Satoshi
          text-[14.466px]
          font-medium
          leading-[150%]
        "
          >
            Measures twice. Moves once.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-7.5 self-stretch">
        <div className="flex flex-col justify-center items-center gap-5 self-stretch">
          <h1 className="text-[#E8E9F3] text-center font-Satoshi text-[16px] font-bold leading-[120%] self-stretch">
            Best Market Conditions
          </h1>
          <p
            className="self-stretch text-[#e8e9f3d3] 
                text-center 
                font-Satoshi 
                text-[15px] 
                font-normal 
                leading-[160%] 
                [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]"
            style={
              {
                leadingTrim: "both",
                textEdge: "cap",
              } as any
            }
          >
            Accumulation phases, Volatility expansions, Capitulation bottoms
          </p>
        </div>
      </div>

      <Link href="/Home">
        <button
          className="relative w-9.25 h-9.25 aspect-square"
          // disabled={!canProceed}
        >
          <Image src={nextIcon} alt="Logo" fill className="object-contain" />
        </button>
      </Link>
    </div>
  </div>
);

// 🔹 Step Config
const steps = [
  { id: "welcome", component: Welcome, videoSrc: "/welcomevid.mp4" },
  { id: "name", component: EnterName },
  { id: "account", component: AccountSetup },
  { id: "birth", component: BirthDetails },
  {
    id: "preview",
    component: Preview,
    videoSrc: "/volatilityWardenvid.mp4",
  },
  {
    id: "complete",
    component: Complete,
    videoSrc: "/volatilityWardenvid.mp4",
  },
];

// 🔹 Main Component
export default function OnboardingSteps({ Layout }: any) {
  const [stepIndex, setStepIndex] = useState(0);
  const [data, setData] = useState<any>({});

  const step = steps[stepIndex];
  const StepComponent = step.component;

  const next = () => setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  const back = () => setStepIndex((i) => Math.max(i - 1, 0));

  return (
    <div className="w-full max-w-md">
      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.35 }}
        >
          {" "}
          <Layout videoSrc={step.videoSrc}>
            <StepComponent
              data={data}
              setData={setData}
              onNext={next}
              onBack={back}
            />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
