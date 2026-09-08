import styles from "../page.module.css";
import Steps from "./Steps";
import SimHall from "./SimHall";
import Features from "./Features";
import ExamsGrid from "./ExamsGrid";

export default function GridSection() {
  return (
    <section className={styles.section}>
      <div className={`${styles['section-head']}`}><div className={styles.kicker}>◆ PROTOCOL: PDF → NEURAL → CBT</div><h2>UPLOAD. <em>DECODE.</em><br />DIVE INTO HALL.</h2><p>No manual wiring. You drop the file, the deck does the rest — ghosting instructions, negatives, sections in 40 seconds.</p></div>
      <Steps />
      <SimHall />
      <Features />
      <ExamsGrid />
    </section>
  );
}
