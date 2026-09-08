import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={`${styles['section-head']}`}>
        <div className={styles.kicker}><i></i> PDF → MOCK IN 3 STEPS</div>
        <h2>Upload. <em>We understand.</em><br />You attempt.</h2>
        <p>No more typing questions, setting timers or configuring marks. Just give us the paper you already have — Parakh does the heavy lifting.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>01 / UPLOAD <span>↗</span></div>
          <h3>Drop any PDF</h3>
          <p>Previous-year papers, coaching sheets, question banks, even badly scanned PDFs. Up to 300 pages.</p>
          <div className={`${styles['step-visual']}`}>
            <div className={`${styles['upload-box']}`}><div className={`${styles['up-icon']}`}>↑</div><strong>Drag & drop your PDF</strong><span>or click to browse • PDF, up to 50MB</span></div>
            <div className={`${styles['mini-list']}`}>
              <div className={`${styles['mini-row']}`}>UPSC_2022_GS1.pdf <b>12.4 MB</b></div>
              <div className={`${styles['mini-row']}`}>Allen_Test_Series.pdf <b>8.1 MB</b></div>
            </div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>02 / AI READS <span>✦</span></div>
          <h3>AI structures everything</h3>
          <p>Our exam-aware AI finds questions, options, sections, instructions, duration, marking scheme and section rules — even when PDFs are messy.</p>
          <div className={`${styles['step-visual']}`}>
            <div className={`${styles['extract-grid']}`}>
              <div className={`${styles['extract-card']}`}><small>DURATION</small><strong>180 mins</strong></div>
              <div className={`${styles['extract-card']}`}><small>MARKING</small><strong>+4  −1</strong></div>
              <div className={`${styles['extract-card']}`}><small>SECTIONS</small><strong>3 found</strong></div>
              <div className={`${styles['extract-card']}`}><small>QUESTIONS</small><strong>90 parsed</strong></div>
            </div>
            <div style={{fontSize:'11px', fontWeight:'700', padding:'8px 10px', borderRadius:'999px', background:'var(--ink)', color:'white', textAlign:'center'}}>✓ Instructions preserved exactly like original</div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>03 / ATTEMPT <span>▶</span></div>
          <h3>Attempt like the real exam</h3>
          <p>A true CBT: countdown, sectional navigation, mark-for-review, palette, auto-submit and instant analysis.</p>
          <div className={`${styles['step-visual']}`} style={{padding:'0', overflow:'hidden'}}>
            <div style={{display:'flex', justifyContent:'space-between', padding:'10px 12px', borderBottom:'1px solid var(--line)', fontSize:'11px', fontWeight:'800', letterSpacing:'.06em'}}><span>Q 14 / 90</span><span style={{background:'var(--ink)', color:'white', padding:'4px 8px', borderRadius:'999px'}}>01:42:11</span></div>
            <div style={{padding:'12px'}}>
              <div style={{height:'8px', background:'var(--ink)', borderRadius:'999px', width:'72%', marginBottom:'8px'}}></div>
              <div style={{height:'7px', background:'#EDE8DD', borderRadius:'999px', width:'90%', marginBottom:'6px'}}></div>
              <div style={{height:'7px', background:'#EDE8DD', borderRadius:'999px', width:'68%'}}></div>
              <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'6px', marginTop:'12px'}}>
                <span style={{height:'22px', borderRadius:'6px', background:'var(--ink)', color:'white', display:'grid', placeItems:'center', fontSize:'10px', fontWeight:'700'}}>1</span><span style={{height:'22px', borderRadius:'6px', background:'var(--lime)', display:'grid', placeItems:'center', fontSize:'10px', fontWeight:'700'}}>2</span><span style={{height:'22px', borderRadius:'6px', background:'white', border:'1px solid var(--line)', display:'grid', placeItems:'center', fontSize:'10px'}}>3</span><span style={{height:'22px', borderRadius:'6px', background:'white', border:'1px solid var(--line)', display:'grid', placeItems:'center', fontSize:'10px'}}>4</span><span style={{height:'22px', borderRadius:'6px', background:'white', border:'1px solid var(--line)', display:'grid', placeItems:'center', fontSize:'10px'}}>5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
