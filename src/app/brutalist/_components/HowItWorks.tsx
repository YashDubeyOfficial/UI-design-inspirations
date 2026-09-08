import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <div className={styles.section} id="how">
      <h2>01. HOW IT WORKS <span>PDF → AI → CBT // 3 STEPS</span></h2>
      <p style={{fontSize:'13px', marginBottom:'10px'}}>No forms. No config. You already have the paper — we just make it attemptable. See <a href="#">raw log</a>.</p>
      <div className={`${styles['steps-raw']}`}>
        <div className={`${styles['step-raw']}`}>
          <h3>01 — DROP PDF</h3>
          <p>PYQs, coaching booklets, phone-scanned copies. Up to 300 pages / 50MB. Even badly skewed.</p>
          <div className={`${styles['upload-raw']}`}>
            <div style={{fontSize:'18px'}}>┌─────────────┐</div>
            <b>DRAG & DROP PDF HERE</b><br /><span style={{fontSize:'11px'}}>OR CLICK TO BROWSE</span>
            <div style={{fontSize:'18px'}}>└─────────────┘</div>
          </div>
          <div style={{marginTop:'6px', border:'1px solid #000', padding:'4px', background:'#fff', fontSize:'11px', display:'flex', justifyContent:'space-between'}}><span>UPSC_2022_GS1.pdf</span><b>12.4 MB</b></div>
          <div style={{marginTop:'4px', border:'1px solid #000', padding:'4px', background:'#fff', fontSize:'11px', display:'flex', justifyContent:'space-between'}}><span>Allen_Test_03.pdf</span><b>8.1 MB</b></div>
        </div>
        <div className={`${styles['step-raw']}`} style={{background:'#E5E5E5'}}>
          <h3>02 — AI READS</h3>
          <p>Exam-aware AI finds questions, options, sections, negatives, duration, instructions. 40 seconds flat.</p>
          <div className={`${styles['step-box']}`}>
            <table style={{width:'100%', borderCollapse:'collapse'}}>
              <tr><td style={{border:'1px solid #000', padding:'4px', background:'#fff'}}><b>DURATION</b><br />180 MINS</td><td style={{border:'1px solid #000', padding:'4px', background:'#fff'}}><b>MARKING</b><br />+4 −1</td></tr>
              <tr><td style={{border:'1px solid #000', padding:'4px', background:'#fff'}}><b>SECTIONS</b><br />3 FOUND</td><td style={{border:'2px solid #000', padding:'4px', background:'#FFF'}}><b>QUESTIONS</b><br />90 PARSED</td></tr>
            </table>
            <div style={{marginTop:'6px', border:'2px solid #000', padding:'4px', background:'#FFE600', textAlign:'center', fontWeight:'900'}}>✓ INSTRUCTIONS PRESERVED VERBATIM</div>
          </div>
        </div>
        <div className={`${styles['step-raw']}`}>
          <h3>03 — ATTEMPT</h3>
          <p>True CBT: countdown, sectional nav, mark-for-review, palette, auto-submit. Like centre screen.</p>
          <div className={`${styles['step-box']}`} style={{background:'#fff'}}>
            <div style={{display:'flex', justifyContent:'space-between', fontWeight:'900', fontSize:'11px', borderBottom:'2px solid #000', paddingBottom:'4px', marginBottom:'6px'}}><span>Q 14 / 90</span><span style={{background:'#000', color:'#fff', padding:'2px 6px'}}>01:42:11</span></div>
            <div className={`${styles.line} ${styles.w90}`} style={{height:'6px'}}></div><div className={`${styles.line} ${styles.grey} ${styles.w70}`} style={{height:'6px'}}></div>
            <div className={`${styles['pal-grid']}`}><span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.mark}`}>2</span><span className={styles.pal}>3</span><span className={styles.pal}>4</span><span className={styles.pal}>5</span></div>
            <div style={{marginTop:'6px', fontSize:'10px', textAlign:'center', border:'1px solid #000', padding:'3px'}}>KEYS: 1-4 SELECT • M MARK • N NEXT</div>
          </div>
        </div>
      </div>
    </div>
  );
}
