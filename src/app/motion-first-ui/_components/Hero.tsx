import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>Choreography in 60fps · Ease-out everything</div>
      <h1>Everything moves.<br /><span>Nothing distracts.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs as a choreographed routine</strong> — cards that glide, timer that breathes, palette that dances in on cue. Motion with manners.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Cue PDF →</a>
        <a href="#how" className={styles.btn}>Watch rehearsal</a>
      </div>
    </div>
  );
}
