import styles from "../page.module.css";

export default function Hero() {
  return (
    <div className={`${styles['hero-copy']}`}>
      <div className={styles.eyebrow}>★ SKEUOMORPHIC EDITION • Wood • Paper • Brass</div>
      <h1>Turn any<br /><em>PDF into a</em><br /><i>real exam.</i></h1>
      <p className={styles.sub}>Not a flat app — a real desk. Your PDF lands like paper, Parakh’s brass-stamped AI reads it, and the monitor on the desk becomes your <strong>TCS iON-style CBT</strong>.</p>
      <div className={`${styles['hero-actions']}`}>
        <a href="#" className={`${styles['btn-brass']}`}>Upload PDF & Create Mock →</a>
        <a href="#" className={`${styles['btn-brass']} ${styles['btn-dark']}`}>See how it works ▶</a>
      </div>
      <div className={styles.meta}><div className={styles.avatars}><span>A</span><span>S</span><span>R</span></div><span><b style={{color:'#1A1208'}}>40,000+ aspirants</b> practice like it’s the centre</span></div>
    </div>
  );
}
