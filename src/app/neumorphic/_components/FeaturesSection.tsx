import styles from "../page.module.css";
import Features from "./Features";
import Exams from "./Exams";

export default function FeaturesSection() {
  return (
    <section className={styles.section}>
      <div className={`${styles['section-head']}`}><div className={styles.kicker}><i></i> WHY SOFT UI WINS</div><h2>Everything an Indian exam needs,<br /><em>but calmer.</em></h2></div>
      <Features />
      <Exams />
    </section>
  );
}
