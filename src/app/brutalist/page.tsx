import type { Metadata } from "next";
import styles from "./page.module.css";
import TopCounter from "./_components/TopCounter";
import SiteHeader from "./_components/SiteHeader";
import MarqueeBar from "./_components/MarqueeBar";
import HeroTable from "./_components/HeroTable";
import BuiltForStrip from "./_components/BuiltForStrip";
import HowItWorks from "./_components/HowItWorks";
import CbtSection from "./_components/CbtSection";
import WhyGrid from "./_components/WhyGrid";
import ExamsTable from "./_components/ExamsTable";
import Faq from "./_components/Faq";
import SiteFooter from "./_components/SiteFooter";
import FabSwitcher from "./_components/FabSwitcher";

export const metadata: Metadata = {
  title: "Parakh — BRUTALIST EDITION /// PDF → CBT /// RAW HTML (1996)",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <TopCounter />
        <SiteHeader />
        <MarqueeBar />
        <HeroTable />
        <BuiltForStrip />
        <HowItWorks />
        <CbtSection />
        <WhyGrid />
        <ExamsTable />
        <Faq />
        <SiteFooter />
      </div>
      <FabSwitcher />
    </div>
  );
}
