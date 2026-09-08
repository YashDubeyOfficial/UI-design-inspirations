import type { Metadata } from "next";
import styles from "./page.module.css";
import Backdrop from "./_components/Backdrop";
import SiteNav from "./_components/SiteNav";
import HeroSection from "./_components/HeroSection";
import Strip from "./_components/Strip";
import GardenSection from "./_components/GardenSection";
import FinalCta from "./_components/FinalCta";
import SiteFooter from "./_components/SiteFooter";
import FabSwitcher from "./_components/FabSwitcher";

export const metadata: Metadata = {
  title: "Parakh — SOLARPUNK • GROW YOUR EXAM",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <Backdrop />
      <SiteNav />
      <HeroSection />
      <Strip />
      <GardenSection />
      <FinalCta />
      <SiteFooter />
      <FabSwitcher />
    </div>
  );
}
