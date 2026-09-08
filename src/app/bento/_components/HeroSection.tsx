import styles from "../page.module.css";
import Hero from "./Hero";
import HeroBento from "./HeroBento";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <Hero />
      <HeroBento />
    </section>
  );
}
