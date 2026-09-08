import type { Metadata } from "next";
import styles from "./page.module.css";
import Backdrop from "./_components/Backdrop";
import SiteNav from "./_components/SiteNav";
import Hero from "./_components/Hero";
import HeroStage from "./_components/HeroStage";
import ExamStrip from "./_components/ExamStrip";
import Compare from "./_components/Compare";
import HowItWorks from "./_components/HowItWorks";
import Experience from "./_components/Experience";
import Features from "./_components/Features";
import Exams from "./_components/Exams";
import FinalCta from "./_components/FinalCta";
import SiteFooter from "./_components/SiteFooter";
import FabSwitcher from "./_components/FabSwitcher";

export const metadata: Metadata = {
  title: "Parakh — Aurora • Where paper fades and exams begin",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <Backdrop />
      <SiteNav />
      <Hero />
      <HeroStage />
      <ExamStrip />
      <Compare />
      <HowItWorks />
      <Experience />
      <Features />
      <Exams />
      <FinalCta />
      <SiteFooter />
      <FabSwitcher />
    </div>
  );
}
