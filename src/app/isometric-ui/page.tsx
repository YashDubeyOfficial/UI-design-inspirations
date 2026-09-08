import type { Metadata } from "next";
import styles from "./page.module.css";
import SiteNav from "./_components/SiteNav";
import HeroSection from "./_components/HeroSection";
import Strip from "./_components/Strip";
import HowItWorks from "./_components/HowItWorks";
import Features from "./_components/Features";
import Exams from "./_components/Exams";
import Testimonials from "./_components/Testimonials";
import Faq from "./_components/Faq";
import FinalCta from "./_components/FinalCta";
import SiteFooter from "./_components/SiteFooter";
import FabSwitcher from "./_components/FabSwitcher";

export const metadata: Metadata = {
  title: "Parakh — Isometric UI • Solid planes, real exam",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <SiteNav />
      <HeroSection />
      <Strip />
      <HowItWorks />
      <Features />
      <Exams />
      <Testimonials />
      <Faq />
      <FinalCta />
      <SiteFooter />
      <FabSwitcher />
    </div>
  );
}
