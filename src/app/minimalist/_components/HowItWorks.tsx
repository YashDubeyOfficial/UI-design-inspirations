import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={`${styles['section-inner']}`}>
        <div className={`${styles['section-head']}`}>
          <div className={`${styles['kicker-min']}`}>The process</div>
          <h2>Upload.<br /><em>Understood.</em><br />Attempt.</h2>
          <p>Three steps, zero manual work. We removed everything that doesn’t help you practice like the final day.</p>
        </div>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={`${styles['step-num']}`}>01 — UPLOAD <span>↗</span></div>
            <h3>Drop any PDF</h3>
            <p>Previous-year papers, coaching sheets, phone scans. Up to 300 pages. Drag, done.</p>
            <div className={`${styles['step-visual']}`}>
              <div className={`${styles['upload-min']}`}><span className={styles.arrow}>↑</span><strong>Drag & drop PDF</strong><span>PDF up to 50MB</span></div>
              <div className={`${styles['file-row']}`}>UPSC_2022_GS1.pdf <b>12.4 MB</b></div>
              <div className={`${styles['file-row']}`}>Allen_Test_07.pdf <b>8.1 MB</b></div>
            </div>
          </div>
          <div className={styles.step}>
            <div className={`${styles['step-num']}`}>02 — PARSE <span>✦</span></div>
            <h3>AI reads it</h3>
            <p>Duration, marking, sections, instructions — extracted even when the scan is imperfect.</p>
            <div className={`${styles['step-visual']}`}>
              <div className={styles.grid2}>
                <div className={`${styles['mini-card']}`}><small>Duration</small><strong>180 m</strong></div>
                <div className={`${styles['mini-card']}`}><small>Marking</small><strong>+4 −1</strong></div>
                <div className={`${styles['mini-card']}`}><small>Sections</small><strong>3</strong></div>
                <div className={`${styles['mini-card']}`}><small>Questions</small><strong>90</strong></div>
              </div>
              <div style={{marginTop:'10px', border:'1px solid var(--ink)', padding:'8px', textAlign:'center', fontSize:'11px', fontWeight:'600', letterSpacing:'.04em', textTransform:'uppercase'}}>✓ Instructions preserved</div>
            </div>
          </div>
          <div className={styles.step}>
            <div className={`${styles['step-num']}`}>03 — ATTEMPT <span>→</span></div>
            <h3>Attempt for real</h3>
            <p>Timer, palette, mark-for-review, sectional locks, auto-submit. Minimal UI, maximal pressure.</p>
            <div className={`${styles['step-visual']}`}>
              <div style={{display:'flex', justifyContent:'space-between', fontSize:'11px', fontWeight:'600', letterSpacing:'.06em', textTransform:'uppercase', marginBottom:'10px'}}><span>Q 14 / 90</span><span style={{border:'1px solid var(--ink)', padding:'4px 8px'}}>01:42:11</span></div>
              <div style={{height:'1px', background:'var(--ink)', marginBottom:'10px'}}></div>
              <div style={{height:'1px', background:'var(--line)', marginBottom:'8px'}}></div>
              <div style={{height:'1px', background:'var(--line)', width:'70%'}}></div>
              <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'6px', marginTop:'16px'}}>
                <span className={`${styles.pal} ${styles.filled}`}>1</span><span className={`${styles.pal} ${styles.accent}`}>2</span><span className={styles.pal}>3</span><span className={styles.pal}>4</span><span className={styles.pal}>5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
