import type { Metadata } from "next";
import styles from "./page.module.css";
import Backdrop from "./_components/Backdrop";
import SiteNav from "./_components/SiteNav";
import HeroSection from "./_components/HeroSection";
import Strip from "./_components/Strip";
import AquaSection from "./_components/AquaSection";
import FinalCta from "./_components/FinalCta";
import SiteFooter from "./_components/SiteFooter";
import FabSwitcher from "./_components/FabSwitcher";

export const metadata: Metadata = {
  title: "Parakh — Y2K AERO • BUBBLE POP PDF → EXAM",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <Backdrop />
      <SiteNav />
      <HeroSection />
      <Strip />
      <AquaSection />
      <FinalCta />
      <SiteFooter />
      <FabSwitcher />
    </div>
  );
}
