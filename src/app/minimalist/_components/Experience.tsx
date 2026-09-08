import styles from "../page.module.css";
import { expItems } from "../_data/content";

export default function Experience() {
  return (
    <section className={styles.section} id="cbt">
      <div className={`${styles['exp-wrap']}`}>
        <div className={`${styles['exp-copy']}`}>
          <div className={`${styles['kicker-min']}`}>The experience</div>
          <h2>Feels like<br /><em>TCS iON.</em><br />Not a quiz.</h2>
          <p>We kept the anxiety and removed the chrome. What remains is exactly what the centre shows you — nothing more.</p>
          <div className={`${styles['exp-list']}`}>
            {expItems.map((item) => (
              <div key={item.label} className={`${styles['exp-item']}`}><b>{item.label}</b><span><strong>{item.title}</strong> {item.text}</span></div>
            ))}
          </div>
          <div style={{display:'flex', gap:'12px', alignItems:'center'}}>
            <a href="#" className={`${styles['btn-minimal']}`}>Try minimal CBT →</a>
            <span style={{fontSize:'13px', color:'var(--muted)'}}>No signup to preview</span>
          </div>
        </div>
        <div className={`${styles['exp-preview']}`}>
          <div className={`${styles['exp-top']}`}><span>JEE Main 2023 — Mock 01</span><span>● 02:14:33</span></div>
          <div className={`${styles['exp-body']}`}>
            <div className={`${styles['section-tabs']}`}><span className={styles.active}>Physics • 30</span><span>Chemistry</span><span>Maths</span></div>
            <div className={`${styles['q-meta']}`}><b>Q14</b> • Single correct • +4 −1 <span style={{color:'var(--muted)'}}>• Marked for review</span></div>
            <div className={`${styles['exp-q']}`}>A particle moves with position r = 3t² î + (4t − t²) ĵ. Magnitude of acceleration at t = 1s is:</div>
            <div className={`${styles['exp-opts']}`}>
              <div className={`${styles['line-row']}`}><b>A</b> 6 m/s²</div>
              <div className={`${styles['line-row']} ${styles.active}`}><b>C</b> √40 — Your answer</div>
              <div className={`${styles['line-row']}`}><b>B</b> 2√10 m/s²</div>
              <div className={`${styles['line-row']}`}><b>D</b> 8 m/s²</div>
            </div>
            <div className={`${styles['exp-bottom']}`}>
              <div style={{display:'flex', gap:'8px'}}><span style={{padding:'8px 14px', border:'1px solid var(--line)', fontSize:'12px', fontWeight:'600'}}>← Previous</span><span style={{padding:'8px 14px', background:'var(--ink)', color:'white', fontSize:'12px', fontWeight:'600'}}>Save & Next →</span></div>
              <div style={{display:'flex', gap:'6px'}}><span className={`${styles.pal} ${styles.filled}`} style={{width:'24px', height:'24px'}}>12</span><span className={`${styles.pal} ${styles.accent}`} style={{width:'24px', height:'24px'}}>14</span><span className={styles.pal} style={{width:'24px', height:'24px'}}>15</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
