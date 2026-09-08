import type { Metadata } from "next";
import styles from "./page.module.css";
import SiteNav from "./_components/SiteNav";
import HeroSection from "./_components/HeroSection";
import HowItWorks from "./_components/HowItWorks";
import Experience from "./_components/Experience";
import FeaturesSection from "./_components/FeaturesSection";
import FinalCta from "./_components/FinalCta";
import SiteFooter from "./_components/SiteFooter";
import FabSwitcher from "./_components/FabSwitcher";

export const metadata: Metadata = {
  title: "Parakh V2 — Soft Neumorphic • Turn any PDF into a real CBT",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <SiteNav />
      <HeroSection />
      <HowItWorks />
      <Experience />
      <FeaturesSection />
      <FinalCta />
      <SiteFooter />
      <FabSwitcher />
    </div>
  );
}
