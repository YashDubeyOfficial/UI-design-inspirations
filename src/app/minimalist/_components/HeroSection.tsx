import styles from "../page.module.css";
import Hero from "./Hero";
import HeroDemo from "./HeroDemo";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={`${styles['hero-grid']}`}>
        <Hero />
        <HeroDemo />
      </div>
    </section>
  );
}
