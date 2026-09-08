import styles from "../page.module.css";
import Hero from "./Hero";
import HeroVisual from "./HeroVisual";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Hero />
      <HeroVisual />
    </section>
  );
}
