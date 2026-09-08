import type { Metadata } from "next";
import styles from "./page.module.css";
import TopBar from "./_components/TopBar";
import HeroSection from "./_components/HeroSection";
import PaperSection from "./_components/PaperSection";
import FinalCta from "./_components/FinalCta";
import SiteFooter from "./_components/SiteFooter";
import FabSwitcher from "./_components/FabSwitcher";

export const metadata: Metadata = {
  title: "Parakh V3 — Skeuomorphic • Real Desk, Real Exam",
};

export default function Page() {
  return (
    <div className={`${styles.page} ${styles['wood-grain']}`}>
      <TopBar />
      <HeroSection />
      <PaperSection />
      <FinalCta />
      <SiteFooter />
      <FabSwitcher />
    </div>
  );
}
