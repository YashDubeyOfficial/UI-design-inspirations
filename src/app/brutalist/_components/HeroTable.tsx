import styles from "../page.module.css";

export default function HeroTable() {
  return (
    <table className={`${styles['hero-table']}`}>
      <tr>
        <td>
          <div style={{fontFamily:'Courier,monospace', fontSize:'11px', border:'1px solid #000', display:'inline-block', padding:'3px 6px', background:'#FFE600', marginBottom:'8px'}}>FILE: JEE_MAIN_2023_SHIFT1.PDF — 18 PAGES — 6.2 MB</div>
          <div className={`${styles['hero-title']}`}>TURN ANY <u>PDF</u> INTO A <span className={styles.strike}>REAL EXAM</span></div>
          <p className={`${styles['hero-sub']}`}>Drop your <b>PYQs, coaching sheets, scanned papers.</b> Parakh reads every line — time, marks, negatives, sections — and builds a true CBT. Not a quiz. Exactly like <u>NTA / TCS iON</u>.</p>
          <ul className={`${styles['hero-list']}`}>
            <li>✓ Handles messy scans + photos + text PDFs</li>
            <li>✓ Finds +4 −1, +3 −0.33, sections, instructions</li>
            <li>✓ Palette, timer, mark-for-review, auto-submit</li>
          </ul>
          <div style={{display:'flex', gap:'8px', flexWrap:'wrap', marginBottom:'8px'}}>
            <a href="#" className={`${styles['btn-raw']}`}>UPLOAD PDF → CREATE MOCK</a>
            <a href="#" className={`${styles['btn-raw']} ${styles.alt}`}>SEE RAW DEMO ▶</a>
          </div>
          <div className={`${styles['meta-raw']}`}>
            <span>● 40,000+ ASPIRANTS</span>
            <span>2.3M QUESTIONS RENDERED</span>
            <span>★ 4.8/5 (HONEST)</span>
            <span style={{background:'#000', color:'#fff', borderColor:'#000'}}>FREE TO START</span>
          </div>
          <div style={{marginTop:'8px', fontSize:'11px', color:'#000080'}}>* This is intentionally ugly. The CBT inside is 100% exam-accurate. <a href="#">Why brutalist?</a></div>
        </td>
        <td>
          <div className={styles.browser}>
            <div className={`${styles['browser-top']}`}><span>● ● ●</span> JEE_MAIN_2023.PDF — NOTEPAD <span>— □ X</span></div>
            <div className={`${styles['browser-body']}`}>
              <div className={`${styles['pdf-meta-raw']}`}><strong>📄 JEE_MAIN_2023.PDF</strong><span style={{background:'#000', color:'#fff', padding:'3px 6px', fontWeight:'900', fontSize:'10px', border:'1px solid #000'}}>PDF</span></div>
              <div className={`${styles['pdf-lines-raw']}`}>
                <div className={`${styles.line} ${styles.w90}`}></div><div className={`${styles.line} ${styles.w80}`}></div><div className={`${styles.line} ${styles.w60}`} style={{marginBottom:'10px'}}></div>
                <div className={`${styles['qbox-raw']}`}>
                  <div style={{fontWeight:'900', fontSize:'11px', marginBottom:'6px'}}>Q.14 &nbsp; IF SYSTEM OF EQUATIONS ... (TEXT EXTRACTED)</div>
                  <div className={`${styles.line} ${styles.w70} ${styles.grey}`} style={{height:'6px'}}></div>
                  <div style={{border:'1px solid #000', height:'7px', background:'#fff', marginBottom:'4px'}}></div>
                  <div style={{border:'1px solid #000', height:'7px', background:'#000', marginBottom:'4px'}}></div>
                  <div style={{border:'1px solid #000', height:'7px', background:'#fff'}}></div>
                </div>
                <div className={`${styles.line} ${styles.w80} ${styles.grey}`} style={{height:'6px'}}></div><div className={`${styles.line} ${styles.w40} ${styles.grey}`} style={{height:'6px'}}></div>
              </div>
              <div style={{textAlign:'center', border:'2px solid #000', padding:'6px', background:'#FFE600', fontWeight:'900', fontSize:'11px', marginBottom:'8px'}}> ↓ PARAKH AI — READING ... 42 SECONDS ↓ </div>
              <div className={`${styles['cbt-preview-raw']}`}>
                <div className={`${styles['cbt-head']}`}><span>JEE MAIN — MOCK 01 • CBT MODE</span><span style={{background:'#FFE600', color:'#000', padding:'2px 6px', border:'1px solid #fff'}}>02:47:12 LEFT</span></div>
                <div className={`${styles['cbt-grid']}`}>
                  <div className={`${styles['cbt-q']}`}>
                    <div style={{fontSize:'10px', fontWeight:'900', border:'1px solid #000', display:'inline-block', padding:'2px 5px', background:'#FFE600', marginBottom:'6px'}}>PHYSICS • Q14/90 • +4 −1</div>
                    <div style={{fontSize:'12px', fontWeight:'700', marginBottom:'6px'}}>Q14. If α, β are roots of x² − 6x +4 =0, then α³+β³ = ?</div>
                    <div className={`${styles['opt-raw']}`}><b>A.</b> 144</div><div className={`${styles['opt-raw']} ${styles.sel}`}><b>B.</b> 136 — SELECTED</div><div className={`${styles['opt-raw']}`}><b>C.</b> 128</div><div className={`${styles['opt-raw']}`}><b>D.</b> 120</div>
                    <div style={{display:'flex', gap:'4px', marginTop:'6px'}}><span style={{flex:'1', border:'2px solid #000', padding:'4px', textAlign:'center', fontWeight:'900', fontSize:'11px', background:'#fff'}}>← PREV</span><span style={{flex:'1', border:'2px solid #000', padding:'4px', textAlign:'center', fontWeight:'900', fontSize:'11px', background:'#000', color:'#fff'}}>SAVE & NEXT →</span></div>
                  </div>
                  <div className={`${styles['cbt-palette']}`}>
                    <div style={{fontSize:'11px', fontWeight:'900', display:'flex', justifyContent:'space-between', borderBottom:'2px solid #000', paddingBottom:'4px', marginBottom:'6px'}}><span>PALETTE</span><span>14/90</span></div>
                    <div className={`${styles['pal-grid']}`}><span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.ans}`}>2</span><span className={styles.pal}>3</span><span className={`${styles.pal} ${styles.mark}`}>4</span><span className={styles.pal}>5</span><span className={styles.pal}>6</span><span className={`${styles.pal} ${styles.ans}`}>7</span><span className={styles.pal}>8</span><span style={{background:'#FFE600'}} className={styles.pal}>14</span><span className={styles.pal}>10</span></div>
                    <div style={{fontSize:'10px', marginTop:'6px'}}>■ Answered ■ Marked □ Not visited</div>
                    <div style={{marginTop:'8px', border:'1px solid #000', padding:'4px', background:'#fff', fontSize:'10px', fontWeight:'700'}}>AUTO-SUBMITS AT 00:00 — LIKE REAL HALL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{marginTop:'8px', textAlign:'center', fontSize:'10px', background:'#000', color:'#FFE600', padding:'4px', border:'2px solid #000'}}>※ NO DESIGN AWARD. 100% EXAM ACCURACY. ※</div>
        </td>
      </tr>
    </table>
  );
}
