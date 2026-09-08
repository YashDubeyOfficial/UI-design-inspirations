import styles from "../page.module.css";
import { expPoints } from "../_data/content";

export default function Experience() {
  return (
    <section className={styles.experience}>
      <div className={`${styles['exp-wrap']}`}>
        <div className={`${styles['exp-copy']}`}>
          <div className={styles.kicker}><i></i> THE HALL IS SOFT NOW</div>
          <h2>Feels like <em>TCS iON,</em><br />but squishier.</h2>
          <p>We kept NTA’s pressure — the ticking, the palette panic, the auto-submit — and wrapped it in clay so it’s less scary to open every day.</p>
          <div className={styles.points}>
            {expPoints.map((p) => (
              <div key={p.title} className={styles.point}><i>{p.icon}</i><span><strong>{p.title}</strong> {p.text}</span></div>
            ))}
          </div>
          <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
            <a href="#try" className={`${styles['btn-clay']}`} style={{background:'linear-gradient(135deg,#D6F5D6,#A7E8B0)', color:'var(--ink)', borderColor:'white'}}>Try clay CBT →</a>
            <span style={{fontSize:'13px', color:'var(--muted)', alignSelf:'center', fontWeight:'700'}}>No signup • puff to preview</span>
          </div>
        </div>
        <div className={`${styles['exp-visual']}`}>
          <div className={`${styles['exp-top']}`}><strong>PARAKH CLAY • GATE 2024 — Mock 03</strong><span className={styles.timer} style={{fontSize:'11px'}}>● 02:14:33 LEFT</span></div>
          <div className={`${styles['exp-body']}`}>
            <div style={{display:'flex', gap:'6px', marginBottom:'10px', flexWrap:'wrap'}}><span style={{padding:'7px 12px', borderRadius:'999px', background:'var(--ink)', color:'white', fontFamily:'\'Nunito\',sans-serif', fontWeight:'800', fontSize:'11px'}}>Aptitude • 10</span><span style={{padding:'7px 12px', borderRadius:'999px', background:'white', border:'3px solid white', fontFamily:'\'Nunito\',sans-serif', fontWeight:'800', fontSize:'11px', boxShadow:'3px 3px 8px rgba(0,0,0,.06)'}}>Core • 55</span><span style={{padding:'7px 12px', borderRadius:'999px', background:'white', border:'3px solid white', fontFamily:'\'Nunito\',sans-serif', fontWeight:'800', fontSize:'11px'}}>Maths</span></div>
            <div className={`${styles['q-meta']}`}><span style={{background:'#E8E0FF'}}>Q12 • NAT • +2 −0</span><span style={{background:'#D6F5D6'}}>Virtual calc</span></div>
            <div className={`${styles['q-title']}`}>Q12. The value of ∫₀¹ x³ eˣ dx is … (NAT)</div>
            <div className={`${styles['q-options']}`}>
              <div className={styles.opt} style={{justifyContent:'center', gap:'10px'}}><span style={{fontWeight:'800'}}>Your answer:</span><span style={{background:'var(--ink)', color:'white', padding:'6px 14px', borderRadius:'999px', border:'3px solid white'}}>2. 146</span></div>
              <div className={styles.opt} style={{background:'linear-gradient(135deg,#FFF4E8,#FFE0C8)', justifyContent:'center'}}><span style={{fontSize:'11px', fontWeight:'800', letterSpacing:'.05em'}}>⌨️ Numeric keypad • clay keys</span></div>
            </div>
            <div className={`${styles['exp-bottom']}`}>
              <div style={{display:'flex', gap:'8px'}}><span className={`${styles['mini-btn']}`}>← Prev</span><span className={`${styles['mini-btn']} ${styles.dark}`}>Save & Next →</span></div>
              <div className={`${styles['palette-mini']}`}><b>11</b><b className={styles.mark}>12</b><b>13</b><b className={styles.on}>14</b></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
