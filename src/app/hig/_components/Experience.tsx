import styles from "../page.module.css";
import { expList } from "../_data/content";

export default function Experience() {
  return (
    <section className={styles.experience}>
      <div className={`${styles['exp-wrap']}`}>
        <div className={`${styles['exp-copy']}`}>
          <div className={`${styles['kicker-hig']}`}><i></i> THE HALL, DEFERRED</div>
          <h2>Feels like <span className={styles.thin}>NTA / TCS iON.</span><br /><em>Looks like Apple.</em></h2>
          <p>We deferred chrome — kept only the hall’s urgency: countdown, palette, auto-submit. Everything else is whitespace and type.</p>
          <div className={styles.list}>
            {expList.map((item) => (
              <div key={item.title} className={styles.item}><i>{item.icon}</i><span><strong>{item.title}</strong> {item.text}</span></div>
            ))}
          </div>
          <a href="#try" className={`${styles['btn-blue']}`}>Try HIG CBT →</a>
        </div>
        <div className={`${styles['exp-visual']}`}>
          <div className={`${styles['exp-top']}`}><strong>Parakh HIG • NEET 2022 — Mock 01</strong><span className={`${styles['timer-pill']}`}>● 01:44:02 left</span></div>
          <div className={`${styles['exp-body']}`}>
            <div style={{display:'flex', gap:'6px', marginBottom:'10px'}}><span style={{padding:'7px 12px', borderRadius:'999px', background:'var(--ink)', color:'white', fontSize:'12px', fontWeight:'600'}}>Botany</span><span style={{padding:'7px 12px', borderRadius:'999px', background:'white', border:'1px solid var(--border2)', fontSize:'12px', fontWeight:'600'}}>Zoology</span><span style={{padding:'7px 12px', borderRadius:'999px', background:'white', border:'1px solid var(--border2)', fontSize:'12px', fontWeight:'600'}}>Physics</span></div>
            <div style={{display:'flex', gap:'6px', marginBottom:'8px'}}><span style={{fontSize:'11px', fontWeight:'600', padding:'5px 8px', borderRadius:'999px', background:'var(--fill)', border:'1px solid var(--border2)'}}>Q27 • +4 −1</span><span style={{fontSize:'11px', fontWeight:'600', padding:'5px 8px', borderRadius:'999px', background:'#FFF9C4', border:'1px solid #FFE082'}}>Marked</span></div>
            <div style={{fontSize:'14px', fontWeight:'600', marginBottom:'10px'}}>Q27. Which is NOT characteristic of collenchyma?</div>
            <div style={{display:'grid', gap:'7px', marginBottom:'12px'}}>
              <div className={`${styles['opt-hig']}`}><b>A</b> Living cells</div>
              <div className={`${styles['opt-hig']} ${styles.sel}`}><b>B</b> Thickened corners — Your pick</div>
              <div className={`${styles['opt-hig']}`}><b>C</b> Dead at maturity</div>
              <div className={`${styles['opt-hig']}`}><b>D</b> Mechanical support</div>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid var(--border)', paddingTop:'12px'}}><div style={{display:'flex', gap:'8px'}}><span className={`${styles['mini-hig']}`}>← Previous</span><span className={`${styles['mini-hig']} ${styles.dark}`}>Save & Next →</span></div><div style={{display:'flex', gap:'6px'}}><span className={styles.pal}>11</span><span className={`${styles.pal} ${styles.mark}`}>12</span><span className={`${styles.pal} ${styles.cur}`}>13</span></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
