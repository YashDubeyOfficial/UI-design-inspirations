import styles from "../page.module.css";

import Hero from "./Hero";
import HeroVisual from "./HeroVisual";

export default function HeroSection() {
  return (
    <section className={styles.hero} style={{gridTemplateColumns:'1fr',textAlign:'center',justifyItems:'center'}}>
      <Hero />
      <HeroVisual />
    </section>
  );
}
