import styles from "../page.module.css";
import { expPoints } from "../_data/content";

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={`${styles['exp-wrap']}`}>
        <div className={`${styles['exp-visual']}`}>
          <div className={`${styles['exp-top']}`}><strong>PARAKH FLAT CBT • NEET 2022 — MOCK 01</strong><span style={{fontWeight:'900', fontSize:'11px', border:'3px solid var(--ink)', background:'white', padding:'4px 8px'}}><span className={`${styles['live-dot']}`}></span> 01:44:02 LEFT</span></div>
          <div className={`${styles['exp-body']}`}>
            <div style={{display:'flex', gap:'6px', marginBottom:'10px'}}><span style={{border:'3px solid var(--ink)', background:'var(--ink)', color:'white', padding:'6px 10px', fontWeight:'900', fontSize:'11px'}}>Botany</span><span style={{border:'3px solid var(--ink)', padding:'6px 10px', fontWeight:'900', fontSize:'11px', background:'var(--gray)'}}>Zoology</span><span style={{border:'3px solid var(--ink)', padding:'6px 10px', fontWeight:'900', fontSize:'11px', background:'var(--gray)'}}>Physics</span><span style={{border:'3px solid var(--ink)', padding:'6px 10px', fontWeight:'900', fontSize:'11px', background:'var(--gray)'}}>Chem</span></div>
            <div className={`${styles['q-meta']}`}><span>Q27 • +4 −1</span><span style={{background:'var(--yellow)'}}>Marked</span></div>
            <div className={`${styles['q-title']}`}>Q27. Which is NOT characteristic of collenchyma?</div>
            <div className={styles.opts}>
              <div className={styles.opt}><b>A</b> Living cells</div>
              <div className={`${styles.opt} ${styles.sel}`}><b>B</b> Thickened corners — Your pick</div>
              <div className={styles.opt}><b>C</b> Dead at maturity</div>
              <div className={styles.opt}><b>D</b> Mechanical support</div>
            </div>
            <div className={`${styles['exp-bottom']}`}><div style={{display:'flex', gap:'8px'}}><span style={{border:'3px solid var(--ink)', padding:'8px 12px', fontWeight:'900', background:'white'}}>← Prev</span><span style={{border:'3px solid var(--ink)', padding:'8px 12px', fontWeight:'900', background:'var(--ink)', color:'white'}}>Next →</span><span style={{border:'3px solid var(--ink)', padding:'8px 10px', fontWeight:'900', background:'var(--yellow)'}}>Mark</span></div><div className={styles.palette}><b>26</b><b className={styles.mark}>27</b><b>28</b><b className={styles.on}>29</b></div></div>
          </div>
        </div>
        <div className={`${styles['exp-copy']}`}>
          <h2>LOOKS LIKE <span className={styles.blue}>NTA.</span><br />FEELS LIKE HALL.</h2>
          <p>Flat blocks hit your eye faster than blur. Palette, timer and marks are solid — you read state in a glance, not a hover. Under 3-hour pressure, that wins.</p>
          <div className={styles.points}>
            {expPoints.map((p) => (
              <div key={p.title} className={styles.point}><i>{p.icon}</i><span><strong>{p.title}</strong> {p.text}</span></div>
            ))}
          </div>
          <a href="#try" className={`${styles['btn-flat']} ${styles.dark}`}>Try flat CBT →</a>
        </div>
      </div>
    </section>
  );
}
