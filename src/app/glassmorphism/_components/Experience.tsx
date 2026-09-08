import styles from "../page.module.css";

export default function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <div className={`${styles['exp-wrap']}`}>
        <div className={`${styles['exp-visual']}`}>
          <div className={`${styles['exp-top']}`}><strong>PARAKH GLASS CBT • NEET 2023 — Mock 02</strong><span style={{fontSize:'11px', fontWeight:'700', display:'flex', gap:'6px', alignItems:'center'}}><span style={{width:'7px', height:'7px', background:'#10B981', borderRadius:'50%', display:'inline-block', boxShadow:'0 0 0 6px rgba(16,185,129,.15)'}}></span> 01:58:41 LEFT</span></div>
          <div className={`${styles['exp-body']}`}>
            <div style={{display:'flex', gap:'6px', marginBottom:'10px', overflow:'auto'}}><span style={{padding:'6px 12px', borderRadius:'999px', fontSize:'12px', fontWeight:'700', background:'var(--ink)', color:'white'}}>Botany • 50</span><span style={{padding:'6px 12px', borderRadius:'999px', fontSize:'12px', fontWeight:'700', background:'rgba(255,255,255,.7)', border:'1px solid rgba(26,23,64,.06)'}}>Zoology</span><span style={{padding:'6px 12px', borderRadius:'999px', fontSize:'12px', fontWeight:'700', background:'rgba(255,255,255,.7)', border:'1px solid rgba(26,23,64,.06)'}}>Physics</span><span style={{padding:'6px 12px', borderRadius:'999px', fontSize:'12px', fontWeight:'700', background:'rgba(255,255,255,.7)', border:'1px solid rgba(26,23,64,.06)'}}>Chemistry</span></div>
            <div className={`${styles['q-meta']}`}><span style={{background:'#FEF3C7', borderColor:'#FDE68A'}}>Q27 • Single correct • +4 −1</span><span style={{background:'rgba(124,58,237,.08)', borderColor:'rgba(124,58,237,.14)'}}>Marked</span></div>
            <div className={`${styles['q-title']}`}>Q27. Which of the following is not a characteristic of collenchyma?</div>
            <div className={`${styles['q-options']}`}>
              <div className={styles.opt}><b>A</b> Living cells</div>
              <div className={`${styles.opt} ${styles.sel}`}><b>B</b> Thickened corners — Your pick</div>
              <div className={styles.opt}><b>C</b> Dead at maturity</div>
              <div className={styles.opt}><b>D</b> Provides mechanical support</div>
            </div>
            <div className={`${styles['exp-bottom']}`}>
              <div style={{display:'flex', gap:'7px'}}><span className={`${styles['mini-btn']}`} style={{padding:'8px 14px', fontSize:'12px'}}>← Prev</span><span className={`${styles['mini-btn']} ${styles.dark}`} style={{padding:'8px 14px', fontSize:'12px'}}>Save & Next →</span><span className={`${styles['mini-btn']}`} style={{padding:'8px 10px', background:'#FEF3C7', borderColor:'#FDE68A', fontSize:'11px'}}>Mark for Review</span></div>
              <div className={`${styles['palette-mini']}`}><b>26</b><b className={styles.mark}>27</b><b>28</b><b className={styles.on}>29</b><span style={{fontSize:'11px', fontWeight:'700', color:'var(--muted)'}}>Submit</span></div>
            </div>
          </div>
        </div>
        <div className={`${styles['exp-copy']}`}>
          <div className={styles.kicker}><i></i> THE EXAM IS THE LIGHT</div>
          <h2>So translucent, <em>you forget it’s AI.</em></h2>
          <p>Most mock tools feel like quizzes. Ours feels like the centre — frosted chrome, soft glow, timer breathing. You focus on the question, the glass does the rest.</p>
          <div className={`${styles['exp-points']}`}>
            <div className={`${styles['exp-point']}`}><i>◷</i><span><strong>Real countdown & auto-submit.</strong> At 00:00 the glass freezes and submits — just like NTA.</span></div>
            <div className={`${styles['exp-point']}`}><i>▦</i><span><strong>Palette that glows.</strong> Answered, marked, not visited — all in gentle frost.</span></div>
            <div className={`${styles['exp-point']}`}><i>⇄</i><span><strong>Section glass slides.</strong> Jump seamlessly, respect sectional timers if your paper has them.</span></div>
          </div>
          <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
            <a href="#try" className={`${styles['btn-primary-glass']}`} style={{background:'linear-gradient(135deg,#7C3AED,#EC4899)', border:'none'}}>Try glass CBT →</a>
            <span style={{fontSize:'13px', color:'var(--muted)', alignSelf:'center'}}>No signup to preview</span>
          </div>
        </div>
      </div>
    </section>
  );
}
