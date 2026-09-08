import styles from "../page.module.css";
import Steps from "./Steps";
import ExpBento from "./ExpBento";
import Features from "./Features";
import Compare from "./Compare";

export default function HowSection() {
  return (
    <section className={styles.section} id="how">
      <div className={`${styles['section-head']}`}>
        <div className={styles.kicker}><i></i> PDF → BENTO → CBT • 3 BOXES</div>
        <h2>Drop. <em>We compartmentalise.</em><br />You attempt.</h2>
        <p>Like a perfect bento, every element has its place — questions, marks, sections and instructions neatly boxed in ~40 seconds.</p>
      </div>
      <Steps />
      <ExpBento />
      <Features />
      <Compare />
    </section>
  );
}
