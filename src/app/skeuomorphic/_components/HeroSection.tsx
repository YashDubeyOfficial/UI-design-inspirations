import styles from "../page.module.css";
import Hero from "./Hero";
import HeroDesk from "./HeroDesk";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Hero />
      <HeroDesk />
    </section>
  );
}
