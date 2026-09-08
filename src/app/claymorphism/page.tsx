import type { Metadata } from "next";
import styles from "./page.module.css";
import Backdrop from "./_components/Backdrop";
import SiteNav from "./_components/SiteNav";
import HeroSection from "./_components/HeroSection";
import Strip from "./_components/Strip";
import Features from "./_components/Features";
import Experience from "./_components/Experience";
import HowItWorks from "./_components/HowItWorks";
import Exams from "./_components/Exams";
import FinalCta from "./_components/FinalCta";
import SiteFooter from "./_components/SiteFooter";
import FabSwitcher from "./_components/FabSwitcher";

export const metadata: Metadata = {
  title: "Parakh — Clay • Squeeze your PDF into a real mock",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <Backdrop />
      <SiteNav />
      <HeroSection />
      <Strip />
      <Features />
      <Experience />
      <HowItWorks />
      <Exams />
      <FinalCta />
      <SiteFooter />
      <FabSwitcher />
    </div>
  );
}
