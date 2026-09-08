import type { Metadata } from "next";
import styles from "./page.module.css";
import SiteNav from "./_components/SiteNav";
import Hero from "./_components/Hero";
import HowItWorks from "./_components/HowItWorks";
import FinalCta from "./_components/FinalCta";
import SiteFooter from "./_components/SiteFooter";
import FabSwitcher from "./_components/FabSwitcher";

export const metadata: Metadata = {
  title: "Parakh V4 — Pop Brutal • PDF to CBT like BOOM!",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <SiteNav />
      <Hero />
      <HowItWorks />
      <FinalCta />
      <SiteFooter />
      <FabSwitcher />
    </div>
  );
}
