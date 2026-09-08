import type { Metadata } from "next";
import styles from "./page.module.css";
import AppBar from "./_components/AppBar";
import HeroSection from "./_components/HeroSection";
import Strip from "./_components/Strip";
import HowItWorks from "./_components/HowItWorks";
import Features from "./_components/Features";
import Experience from "./_components/Experience";
import Exams from "./_components/Exams";
import FinalCta from "./_components/FinalCta";
import SiteFooter from "./_components/SiteFooter";
import FabSwitcher from "./_components/FabSwitcher";

export const metadata: Metadata = {
  title: "Parakh — Material • Elevated PDF to CBT",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <AppBar />
      <HeroSection />
      <Strip />
      <HowItWorks />
      <Features />
      <Experience />
      <Exams />
      <FinalCta />
      <SiteFooter />
      <FabSwitcher />
    </div>
  );
}
