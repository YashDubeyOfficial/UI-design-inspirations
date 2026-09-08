import styles from "../page.module.css";
import Steps from "./Steps";
import HallPanel from "./HallPanel";
import Features from "./Features";
import ExamsPanel from "./ExamsPanel";

export default function PaperSection() {
  return (
    <section className={styles.section}>
      <div className={`${styles['paper-section']}`}>
        <div className={`${styles['section-head']}`}><div className={styles.kicker}>◆ PAPER → LEDGER → MONITOR</div><h2>Upload. <em>We emboss.</em><br />You attempt on desk.</h2><p>Every texture is tactile — paper grain, brass rivets, CRT glow. It feels like an exam hall, not a website.</p></div>
        <Steps />
        <HallPanel />
        <Features />
        <ExamsPanel />
      </div>
    </section>
  );
}
