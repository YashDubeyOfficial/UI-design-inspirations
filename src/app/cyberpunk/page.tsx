import type { Metadata } from "next";
import styles from "./page.module.css";
import Backdrop from "./_components/Backdrop";
import SiteNav from "./_components/SiteNav";
import HeroSection from "./_components/HeroSection";
import Ticker from "./_components/Ticker";
import GridSection from "./_components/GridSection";
import FinalCta from "./_components/FinalCta";
import SiteFooter from "./_components/SiteFooter";
import FabSwitcher from "./_components/FabSwitcher";

export const metadata: Metadata = {
  title: "Parakh — CYBERPUNK // NEURAL PDF → CBT UPLINK",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <Backdrop />
      <SiteNav />
      <HeroSection />
      <Ticker />
      <GridSection />
      <FinalCta />
      <SiteFooter />
      <FabSwitcher />
    </div>
  );
}
