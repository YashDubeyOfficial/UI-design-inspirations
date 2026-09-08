import styles from "../page.module.css";
import { expPoints } from "../_data/content";

export default function Experience() {
  return (
    <section className={styles.experience}>
      <div className={`${styles['exp-wrap']}`}>
        <div className={`${styles['exp-copy']}`}>
          <div className={styles.kicker}><i></i> THE HALL, SOFTENED</div>
          <h2>Feels like <em>NTA,</em><br />without the harshness.</h2>
          <p>We softened the hall — rounded corners, lifted cards, gradients on primary — so you feel the pressure, not the pixels.</p>
          <div className={styles.points}>
            {expPoints.map((p) => (
              <div key={p.title} className={styles.point}><i>{p.icon}</i><span><strong>{p.title}</strong> {p.text}</span></div>
            ))}
          </div>
          <a href="#try" className={`${styles['btn-primary']}`}>Try soft CBT →</a>
        </div>
        <div className={`${styles['exp-visual']}`}>
          <div className={`${styles['exp-top']}`}><strong>PARAKH CBT • GATE 2024 — Mock 02</strong><span style={{background:'var(--ink)', color:'white', padding:'5px 9px', borderRadius:'999px', fontSize:'11px', fontWeight:'700'}}>02:04:11 left</span></div>
          <div className={`${styles['exp-body']}`}>
            <div style={{display:'flex', gap:'6px', marginBottom:'10px', flexWrap:'wrap'}}><span style={{padding:'7px 12px', borderRadius:'999px', background:'linear-gradient(135deg,var(--indigo),var(--violet))', color:'white', fontWeight:'700', fontSize:'12px'}}>Aptitude • 10</span><span style={{padding:'7px 12px', borderRadius:'999px', background:'var(--bg)', border:'1px solid var(--line)', fontWeight:'700', fontSize:'12px'}}>Core • 55</span></div>
            <div className={`${styles['q-meta']}`}><span style={{background:'#EEF2FF'}}>Q12 • NAT • +2 −0</span><span style={{background:'#DCFCE7', borderColor:'#BBF7D0'}}>Calc allowed</span></div>
            <div className={`${styles['q-title']}`}>Q12. ∫₀¹ x³ eˣ dx = ? (NAT)</div>
            <div className={styles.opts2}>
              <div className={styles.opt} style={{justifyContent:'center'}}><span>Answer:</span><span style={{background:'var(--ink)', color:'white', padding:'6px 12px', borderRadius:'999px', fontWeight:'800'}}>2.146</span></div>
              <div className={styles.opt} style={{justifyContent:'center', background:'var(--bg)'}}><span style={{fontSize:'11px', fontWeight:'700', letterSpacing:'.05em'}}>⌨️ soft numeric keypad</span></div>
            </div>
            <div className={`${styles['exp-bottom']}`}><div style={{display:'flex', gap:'8px'}}><span className={styles.mini}>← Prev</span><span className={`${styles.mini} ${styles.dark}`}>Save & Next →</span></div><div className={`${styles['palette-mini']}`}><b>11</b><b className={styles.mark}>12</b><b>13</b><b className={styles.on}>14</b></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
