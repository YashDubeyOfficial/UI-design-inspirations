import styles from "../page.module.css";

export default function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <div className={`${styles['exp-wrap']}`}>
        <div className={`${styles.rivet} ${styles.r1}`}></div><div className={`${styles.rivet} ${styles.r2}`}></div><div className={`${styles.rivet} ${styles.r3}`}></div><div className={`${styles.rivet} ${styles.r4}`}></div>
        <div className={`${styles['exp-visual']}`}>
          <div className={`${styles['exp-top']}`}><strong>FORGED CBT • SSC JE 2023 — Mock 02</strong><span style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'11px', fontWeight:'700', color:'var(--muted)'}}>● 01:14:33 LEFT</span></div>
          <div className={`${styles['exp-body']}`}>
            <div style={{display:'flex', gap:'6px', marginBottom:'10px', flexWrap:'wrap'}}><span style={{padding:'6px 12px', borderRadius:'6px', background:'#1C2228', color:'white', fontFamily:'\'JetBrains Mono\',monospace', fontWeight:'800', fontSize:'11px', border:'1px solid #2E3A47'}}>General • 50</span><span style={{padding:'6px 12px', borderRadius:'6px', background:'white', border:'1px solid #C9D1D9', fontFamily:'\'JetBrains Mono\',monospace', fontWeight:'700', fontSize:'11px'}}>Technical • 100</span><span style={{padding:'6px 12px', borderRadius:'6px', background:'white', border:'1px solid #C9D1D9', fontFamily:'\'JetBrains Mono\',monospace', fontWeight:'700', fontSize:'11px'}}>Aptitude</span></div>
            <div className={`${styles['q-meta']}`}><span>Q22 • MCQ • +1 −0.25</span><span style={{background:'rgba(255,107,44,.12)', borderColor:'rgba(255,107,44,.2)', color:'#9A3412'}}>On hold</span></div>
            <div className={`${styles['q-title']}`}>Q22. The bending moment at the fixed end of a cantilever beam with UDL w over span L is:</div>
            <div className={`${styles['q-options']}`}>
              <div className={styles.opt}><b>A</b> wL/2</div>
              <div className={`${styles.opt} ${styles.sel}`}><b>B</b> wL²/2 — Riveted ✓</div>
              <div className={styles.opt}><b>C</b> wL²/8</div>
              <div className={styles.opt}><b>D</b> wL²/12</div>
            </div>
            <div className={`${styles['exp-bottom']}`}>
              <div style={{display:'flex', gap:'7px'}}><span className={`${styles['mini-btn']}`} style={{padding:'8px 14px'}}>← Prev</span><span className={`${styles['mini-btn']} ${styles.dark}`} style={{padding:'8px 14px'}}>Save & Next →</span><span className={`${styles['mini-btn']}`} style={{padding:'8px 10px', background:'#FFF1E8', borderColor:'#FFD0A0', color:'#9A3412'}}>Hold</span></div>
              <div className={`${styles['palette-mini']}`}><b>21</b><b className={styles.mark}>22</b><b>23</b><b className={styles.on}>24</b></div>
            </div>
          </div>
        </div>
        <div className={`${styles['exp-copy']}`}>
          <div className={styles.kicker}><i></i> HEAVY HALL • NO PLASTIC</div>
          <h2>Feels like <em>TCS iON,</em> but machined.</h2>
          <p>We kept the hall’s clack — riveted palette, beveled timer, steel auto-submit — so exam day feels like returning to the forge.</p>
          <div className={styles.points}>
            <div className={styles.point}><i>◷</i><span><strong>Riveted countdown.</strong> At 00:00 the plate drops and submits — no mercy, like the centre.</span></div>
            <div className={styles.point}><i>▦</i><span><strong>Beveled palette.</strong> Set, hold, empty — machined bevel lets you read it under pressure.</span></div>
            <div className={styles.point}><i>⇄</i><span><strong>Sectional forging.</strong> Jump across aptitude/technical with steel section locks.</span></div>
          </div>
          <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
            <a href="#try" className={`${styles['btn-hero-steel']}`}>Try chrome CBT →</a>
            <span style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'11px', color:'var(--muted)', alignSelf:'center'}}>No coolant needed to preview</span>
          </div>
        </div>
      </div>
    </section>
  );
}
