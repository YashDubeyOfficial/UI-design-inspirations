import styles from "../page.module.css";

export default function CbtSection() {
  return (
    <div className={`${styles.section} ${styles.yellow}`} id="cbt" style={{display:'grid', gridTemplateColumns:'1fr 1.25fr', gap:'12px', alignItems:'start'}}>
      <div>
        <h2 style={{fontFamily:'Times New Roman,serif', fontSize:'22px'}}>FEELS LIKE<br /><span style={{background:'#000', color:'#fff', padding:'2px 6px', fontFamily:'Courier,monospace', fontSize:'12px'}}>NTA / TCS iON</span> — NOT A QUIZ APP</h2>
        <p style={{fontSize:'13px', margin:'8px 0'}}>Quiz UIs don’t build temperament. We rebuilt the hall — anxiety included.</p>
        <ul style={{fontSize:'12px', marginLeft:'18px'}}>
          <li><b>Real countdown & auto-submit.</b> At 00:00 it submits. No grace.</li>
          <li><b>Palette that matters.</b> Answered / marked / not visited.</li>
          <li><b>Sectional rules.</b> Jump, lock, timer per section if paper has it.</li>
        </ul>
        <div style={{marginTop:'10px', display:'flex', gap:'6px', flexWrap:'wrap'}}>
          <a href="#" className={`${styles['btn-raw']}`}>TRY LIVE DEMO →</a>
          <span style={{fontSize:'11px', alignSelf:'center', border:'1px solid #000', padding:'3px 6px', background:'#fff'}}>NO SIGNUP TO PREVIEW</span>
        </div>
        <div style={{marginTop:'10px', border:'2px solid #000', padding:'6px', background:'#fff', fontSize:'11px'}}><blink>▶</blink> <b>TIP:</b> Instructions appear first, exactly as in PDF. You must read & accept — like real exam.</div>
      </div>
      <div className={`${styles['cbt-preview-raw']}`} style={{background:'#fff'}}>
        <div className={`${styles['cbt-head']}`}><span>PARAKH CBT • JEE MAIN 2023 — MOCK 01</span><span style={{background:'#FFE600', color:'#000', padding:'2px 6px', border:'1px solid #fff'}}>● 02:14:33 LEFT</span></div>
        <div style={{padding:'8px'}}>
          <div style={{fontSize:'11px', fontWeight:'900', border:'1px solid #000', padding:'3px 6px', display:'inline-block', background:'#E5E5E5', marginBottom:'6px'}}>PHYSICS • 30 Qs | CHEMISTRY | MATHS</div>
          <div style={{fontSize:'11px', fontWeight:'700', border:'1px dashed #000', padding:'4px', marginBottom:'6px'}}>Q14 • +4 −1 • MARKED FOR REVIEW</div>
          <div style={{fontSize:'13px', fontWeight:'700', marginBottom:'8px'}}>Q14. A particle moves with r = 3t² î + (4t − t²) ĵ. |a| at t=1s is:</div>
          <div className={`${styles['opt-raw']}`}><b>A</b> 6 m/s²</div><div className={`${styles['opt-raw']} ${styles.sel}`}><b>C</b> √40 m/s² — YOUR ANSWER</div><div className={`${styles['opt-raw']}`}><b>D</b> 8 m/s²</div>
          <div style={{display:'flex', gap:'6px', marginTop:'8px'}}><span style={{flex:'1', border:'2px solid #000', padding:'6px', textAlign:'center', fontWeight:'900', fontSize:'11px'}}>← PREV</span><span style={{flex:'1', border:'2px solid #000', padding:'6px', textAlign:'center', fontWeight:'900', fontSize:'11px', background:'#000', color:'#fff'}}>SAVE & NEXT →</span><span style={{border:'2px dashed #000', padding:'6px', fontSize:'11px', fontWeight:'900'}}>MARK</span></div>
          <div style={{marginTop:'8px', display:'flex', gap:'4px', alignItems:'center', fontSize:'11px'}}><span className={`${styles.pal} ${styles.ans}`} style={{width:'22px', height:'22px'}}>13</span><span className={`${styles.pal} ${styles.mark}`} style={{width:'22px', height:'22px'}}>14</span><span className={styles.pal} style={{width:'22px', height:'22px'}}>15</span> <a href="#">SUBMIT</a> | <a href="#">INSTRUCTIONS</a></div>
        </div>
      </div>
    </div>
  );
}
