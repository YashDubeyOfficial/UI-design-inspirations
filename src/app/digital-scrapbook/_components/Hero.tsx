import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>✿ sticker book edition ✿ washi tape included</div>
      <h1>Scrap the stress,<br /><span>keep the exam.</span></h1>
      <p className={styles.sub}>Your <strong>PYQs pressed like flowers</strong> between sticker pages — washi-taped timer, polaroid palette, doodled margins. NTA underneath,ijs cute on top.</p>
      <div className={styles["hero-actions"]}>
        <a href="#try" className={`${styles.btn} ${styles.solid}`}>Stick PDF →</a>
        <a href="#how" className={styles.btn}>Peek inside</a>
      </div>
    </div>
  );
}
