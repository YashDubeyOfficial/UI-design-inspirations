import styles from "../page.module.css";
import { examCards, features } from "../_data/content";

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={`${styles['section-head']}`}><div className={styles.kicker}>✦ PDF → KAPOW → CBT ✦</div><h2>UPLOAD. <em>KAPOW!</em><br />YOU ATTEMPT.</h2><p>No boring forms. Your PDF hits the canvas, AI goes POW, and a real exam pops out — palette, timer, mark-for-review and all.</p></div>
      <div className={styles.steps}>
        <div className={styles.step}><div className={`${styles['step-num']}`}>01 / DROP <span>↗</span></div><h3>Drop any PDF!</h3><p>PYQs, coaching sheets, scanned papers — even messy 300-page PDFs. Comic drop zone goes BOOM.</p><div className={`${styles['step-visual']}`}><div className={styles.upload}><div className={styles.ico}>↑</div><strong>DROP PDF HERE — KAPOW!</strong><br /><span style={{fontSize:'11px', fontWeight:'700'}}>up to 50MB • PDF</span></div><div className={`${styles['mini-row']}`}>UPSC_2022.pdf <span style={{background:'var(--yellow)', padding:'2px 7px', border:'2px solid var(--ink)', borderRadius:'999px'}}>12.4 MB</span></div></div></div>
        <div className={styles.step}><div className={`${styles['step-num']}`}>02 / AI GOES POW <span>✦</span></div><h3>AI goes BRRR!</h3><p>Duration, negatives, sections, instructions — all detected at comic speed. 40 seconds, FLAT.</p><div className={`${styles['step-visual']}`} style={{background:'var(--pink)', color:'white'}}><div className={styles.grid2}><div className={`${styles['mini-card']}`}><small>DURATION</small><br /><strong>180 mins</strong></div><div className={`${styles['mini-card']}`}><small>MARKING</small><br /><strong>+4 −1</strong></div><div className={`${styles['mini-card']}`}><small>SECTIONS</small><br /><strong>3 found!</strong></div><div className={`${styles['mini-card']}`}><small>QUESTIONS</small><br /><strong>90 parsed!</strong></div></div></div></div>
        <div className={styles.step}><div className={`${styles['step-num']}`}>03 / ATTEMPT <span>▶</span></div><h3>Attempt like HALL!</h3><p>Countdown, palette, section jumps, auto-submit — real exam pressure with comic fun.</p><div className={`${styles['step-visual']}`} style={{background:'var(--cyan)'}}><div style={{display:'flex', justifyContent:'space-between', fontWeight:'900', fontSize:'11px'}}><span>Q 14/90</span><span style={{background:'var(--ink)', color:'white', padding:'4px 8px', borderRadius:'999px'}}>01:42:11</span></div><div style={{marginTop:'8px'}} className={`${styles.lines} ${styles.w90}`}></div><div className={`${styles.lines} ${styles.w70}`}></div><div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'6px', marginTop:'8px'}}><span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.mark}`}>2</span><span className={styles.pal}>3</span><span className={styles.pal}>4</span><span className={styles.pal}>5</span></div></div></div>
      </div>

      <div className={`${styles['exp-wrap']}`}>
        <div className={`${styles['exp-copy']}`}>
          <div className={styles.kicker} style={{background:'var(--yellow)', color:'var(--ink)'}}>◆ THE EXAM IS THE POP!</div>
          <h2>FEELS LIKE<br /><em>NTA / TCS iON.</em><br />NOT A QUIZ!</h2>
          <p>We love comic energy, but the CBT is dead serious — timer anxiety, palette panic, section locks — exactly like your centre screen.</p>
          <div className={styles.point}><i>◷</i><span><strong>Real countdown & auto-submit.</strong> Time hits zero — BAM, it submits.</span></div>
          <div className={styles.point}><i>▦</i><span><strong>Palette that matters.</strong> Answered / marked / not visited — loud & clear.</span></div>
          <div style={{display:'flex', gap:'8px', marginTop:'10px', flexWrap:'wrap'}}><a href="#" className={`${styles['btn-brutal']}`} style={{background:'white'}}>Try live demo →</a><span style={{fontWeight:'800', alignSelf:'center'}}>No signup needed!</span></div>
        </div>
        <div className={`${styles['exp-visual']}`}>
          <div className={`${styles['exp-top']}`}><strong>⚡ PARAKH CBT • JEE 2023 — Mock 01</strong><span style={{background:'var(--ink)', color:'white', padding:'4px 8px', borderRadius:'999px', fontSize:'11px', fontWeight:'900'}}>● 02:14:33 LEFT</span></div>
          <div className={`${styles['exp-body']}`}>
            <div style={{display:'flex', gap:'6px', marginBottom:'8px'}}><span className={`${styles.tab} ${styles.active}`}>Physics • 30</span><span className={styles.tab}>Chemistry</span><span className={styles.tab}>Maths</span></div>
            <div style={{fontWeight:'800', fontSize:'11px', marginBottom:'4px'}}>Q14 • +4 −1 • Marked for review ⚡</div>
            <div className={styles.question}>Q14. A particle moves with r = 3t² î + (4t − t²) ĵ. Magnitude of acceleration at t=1s is:</div>
            <div className={styles.options}><div className={styles.opt}><b>A</b>6 m/s²</div><div className={`${styles.opt} ${styles.sel}`}><b>C</b>√40 m/s² — Your answer ✓</div><div className={styles.opt}><b>D</b>8 m/s²</div></div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}><div style={{display:'flex', gap:'6px'}}><span className={`${styles['mini-btn']}`}>← Prev</span><span className={`${styles['mini-btn']} ${styles.dark}`}>Save & Next →</span></div><div className={styles.palette} style={{margin:'0'}}><span className={`${styles.pal} ${styles.ans}`}>13</span><span className={`${styles.pal} ${styles.mark}`}>14</span><span className={styles.pal}>15</span></div></div>
          </div>
        </div>
      </div>

      <div className={styles.features}>
        {features.map((f) => (
          <div key={f.title} className={styles.feat}><div className={`${styles['feat-icon']}`}>{f.icon}</div><h4>{f.title}</h4><p>{f.text}</p></div>
        ))}
      </div>

      <div className={styles.exams}>
        <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:'12px', alignItems:'end'}}><h3 style={{fontFamily:'\'Anton\',sans-serif', fontSize:'26px'}}>ONE PLATFORM.<br />EVERY EXAM YOU CHASE!</h3><p style={{fontWeight:'700', maxWidth:'360px', fontSize:'13px'}}>If your exam has a PDF, we POP it into a mock — JEE to State PCS. WHAM!</p></div>
        <div className={`${styles['exam-grid']}`}>
          {examCards.map((e) => (
            <div
              key={e.title}
              className={`${styles['exam-card']}`}
              style={e.featured ? {background:'var(--ink)', color:'white'} : undefined}
            ><b style={e.featured ? {color:'white'} : undefined}>{e.title}</b><p style={e.featured ? {color:'#ccc'} : undefined}>{e.desc}</p><span className={styles.tag} style={e.featured ? {background:'var(--yellow)', color:'var(--ink)'} : undefined}>{e.tag}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}
