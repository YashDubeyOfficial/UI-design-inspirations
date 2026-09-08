import type { Metadata } from "next";
import styles from "./page.module.css";
import SiteNav from "./_components/SiteNav";
import Hero from "./_components/Hero";
import ExamStrip from "./_components/ExamStrip";
import HowItWorks from "./_components/HowItWorks";
import Features from "./_components/Features";
import Experience from "./_components/Experience";
import Exams from "./_components/Exams";
import FinalCta from "./_components/FinalCta";
import SiteFooter from "./_components/SiteFooter";
import FabSwitcher from "./_components/FabSwitcher";

export const metadata: Metadata = {
  title: "Parakh — Fluent • Acrylic PDF to CBT",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <SiteNav />
      <Hero />
      <ExamStrip />
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
