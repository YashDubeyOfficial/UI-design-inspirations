import styles from "../page.module.css";

export default function Hero() {
  return (
    <div>
      <div className={styles.eyebrow}><b>NEW</b> Y2K • Frutiger Aero • Glossy future is back <span style={{width:'7px', height:'7px', background:'#00D4FF', borderRadius:'50%', display:'inline-block', boxShadow:'0 0 8px #00D4FF'}}></span> Live</div>
      <h1><span className={styles.line1}>TURN YOUR</span><span className={styles.line2}>PDF INTO</span><br /><span className={styles.pop}>A REAL EXAM ✨</span></h1>
      <p className={styles.sub}>Your <strong>dusty PYQs, coaching bubble sheets, Xerox scans</strong> — drop them on the aqua table. Parakh goes <strong>*pop* *gloss* *shine*</strong> and inflates a real CBT — bubble palette, liquid timer, super glossy — exactly like NTA, only wetter.</p>
      <div className={`${styles['hero-actions']}`}>
        <a href="#" className={`${styles['btn-aqua']}`} style={{padding:'14px 22px', fontSize:'14px'}}>Upload PDF & make it pop →</a>
        <a href="#" className={`${styles['btn-ghost-bubble']}`} style={{padding:'13px 18px'}}>▶ See glossy demo</a>
      </div>
      <div className={styles.trust}>
        <div className={`${styles['trust-pill']}`}><div className={styles.avatars}><span>A</span><span>S</span><span>R</span></div> 40k+ poppers</div>
        <span className={`${styles['trust-pill']}`}>💧 2.3M bubbles rendered</span>
        <span className={`${styles['trust-pill']}`} style={{background:'linear-gradient(135deg,#C8FF00,#FFE600)', borderColor:'#fff'}}>★ 4.9/5 glossy love</span>
      </div>
    </div>
  );
}
