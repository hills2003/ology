"use client"; // Needed if using useState/useEffect

//import { ClarityIndex } from "../components/ClarityIndex";
import { redirect } from "next/navigation";

export default function Home() {
  return redirect("/onboarding");
}
