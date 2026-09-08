import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}>● NEUMORPHIC EDITION • Soft. Tactile. Calm focus.</div>
      <h1>Turn any<br /><em>PDF into a</em><br /><i>real exam.</i></h1>
      <p className={styles.sub}>Same powerful Parakh AI — now with a soft, extruded interface that feels like a real desk. Upload PYQs, coaching material and give mocks that feel like paper, not pixels.</p>
      <div className={`${styles['hero-actions']}`}>
        <a href="#" className={`${styles['btn-neu']} ${styles.lime}`}>Upload PDF & Create Mock →</a>
        <a href="#" className={`${styles['btn-neu']}`}>See how it works ▶</a>
      </div>
      <div className={styles.trust}><div className={`${styles['trust-bubbles']}`}><span className={styles.bubble}>A</span><span className={styles.bubble}>S</span><span className={styles.bubble}>R</span></div><span><b style={{color:'var(--ink)'}}>40,000+ aspirants</b> love the calm focus</span></div>
    </div>
  );
}
