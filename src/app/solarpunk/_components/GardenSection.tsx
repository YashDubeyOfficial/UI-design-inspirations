import styles from "../page.module.css";
import Steps from "./Steps";
import Greenhouse from "./Greenhouse";
import Features from "./Features";
import ExamsGrid from "./ExamsGrid";

export default function GardenSection() {
  return (
    <section className={styles.section}>
      <div className={`${styles['section-head']}`}><div className={styles.kicker}>🌱 SEED → SPROUT → CANOPY // 3 SEASONS</div><h2>Plant. <em>We compost.</em><br />You harvest.</h2><p>No digging, no tilling. You bring the paper, we break it down — questions, marks, sections, instructions — and rewild it as a clean, solar hall.</p></div>
      <Steps />
      <Greenhouse />
      <Features />
      <ExamsGrid />
    </section>
  );
}
