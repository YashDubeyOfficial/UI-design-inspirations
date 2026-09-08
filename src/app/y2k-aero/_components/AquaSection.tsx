import styles from "../page.module.css";
import Steps from "./Steps";
import PoolHall from "./PoolHall";
import Features from "./Features";
import ExamsGrid from "./ExamsGrid";

export default function AquaSection() {
  return (
    <section className={styles.section}>
      <div className={`${styles['section-head']}`}><div className={styles.kicker}>✦ PDF → POP → CBT // 3 SPLASHES</div><h2>Drop. <em>Pop.</em> You attempt.</h2><p>We kept the gloss outside, the exam accuracy inside. No typing, no timer setup — just splash your PDF and dive in.</p></div>
      <Steps />
      <PoolHall />
      <Features />
      <ExamsGrid />
    </section>
  );
}
