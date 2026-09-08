import styles from "../page.module.css";
import { experiencePoints } from "../_data/content";

export default function Experience() {
  return (
    <section className={styles.experience}>
      <div className={`${styles['exp-wrap']}`}>
        <div className={`${styles['exp-copy']}`}>
          <div className={styles.kicker}><i></i> FLUENT HALL</div>
          <h2>Feels like <em>TCS iON,</em><br />but lighter.</h2>
          <p>We kept hall gravity — countdown, palette panic, auto-submit — and lifted it on acrylic so it breathes. Reveal on hover, depth on focus.</p>
          <div className={styles.list}>
            {experiencePoints.map((point) => (
              <div key={point.title} className={styles.item}><i>{point.icon}</i><span><strong>{point.title}</strong> {point.body}</span></div>
            ))}
          </div>
          <a href="#try" className={`${styles['btn-fluent']} ${styles.primary}`}>Try Fluent CBT →</a>
        </div>
        <div className={`${styles['exp-visual']}`}>
          <div className={`${styles['exp-top']}`}><strong>PARAKH FLUENT • GATE 2024 — Mock 02</strong><span className={styles.timer} style={{fontSize:'11px'}}>● 02:04:11 left</span></div>
          <div style={{padding:'14px'}}>
            <div className={styles.pivot}><span className={styles.active}>Aptitude</span><span>Core</span><span>Maths</span></div>
            <div className={styles.question}>Q12. ∫₀¹ x³ eˣ dx = ? (NAT)</div>
            <div className={styles.options}>
              <div className={styles.opt} style={{justifyContent:'center'}}><span>Answer:</span><span style={{background:'var(--ink)', color:'white', padding:'6px 12px', borderRadius:'4px', fontWeight:'700'}}>2.146</span></div>
              <div className={styles.opt} style={{justifyContent:'center', background:'var(--fluent-30)', borderColor:'var(--fluent)'}}>⌨️ fluent keypad • reveal keys</div>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid var(--border)', paddingTop:'12px'}}><div style={{display:'flex', gap:'6px'}}><span className={styles.mini}>← Prev</span><span className={`${styles.mini} ${styles.dark}`}>Save & Next →</span></div><div style={{display:'flex', gap:'6px'}}><span className={styles.pal}>11</span><span className={`${styles.pal} ${styles.mark}`}>12</span><span className={`${styles.pal} ${styles.ans}`}>13</span></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
