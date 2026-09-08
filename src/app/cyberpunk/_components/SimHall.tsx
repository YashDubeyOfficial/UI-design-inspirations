import styles from "../page.module.css";

export default function SimHall() {
  return (
    <div className={`${styles['exp-wrap']}`} style={{marginTop:'18px'}}>
      <div className={`${styles['exp-copy']}`}>
        <div className={styles.kicker} style={{background:'rgba(255,0,255,.08)', borderColor:'rgba(255,0,255,.2)', color:'var(--mag)'}}>◆ THE HALL IS A SIMULATION</div>
        <h2>FEELS LIKE<br /><em>TCS iON</em> —<br />NOT A TOY.</h2>
        <p>We love neon, but the exam is dead serious. Timer anxiety, palette tells, sectional locks — chrome perfect.</p>
        <div className={styles.point}><i>◷</i><span><b>Real countdown & auto-submit.</b> 00:00 → blackout, submission locked. No second chance.</span></div>
        <div className={styles.point}><i style={{borderColor:'var(--mag)', color:'var(--mag)', boxShadow:'0 0 8px rgba(255,0,255,.2)'}}>▦</i><span><b>Palette that breathes.</b> Answered / marked / not visited — neon coded.</span></div>
        <div style={{display:'flex', gap:'8px', marginTop:'12px'}}><a href="#" className={`${styles['btn-neon']}`}>ENTER NEON HALL →</a><span style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'11px', alignSelf:'center', color:'rgba(232,234,240,.4)'}}>NO SIGNUP TO PREVIEW</span></div>
      </div>
      <div className={`${styles['exp-visual']}`}>
        <div className={`${styles['exp-top']}`}><strong>PARAKH NEON CBT • NEET 2023 — MOCK_02</strong><span style={{color:'var(--cyan)'}}>● 02:14:33 LEFT</span></div>
        <div className={`${styles['exp-body']}`}>
          <div style={{display:'flex', gap:'6px', marginBottom:'10px', flexWrap:'wrap'}}><span style={{background:'var(--cyan)', color:'#000', padding:'5px 10px', fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px', fontWeight:'800'}}>BOTANY • 50</span><span style={{border:'1px solid rgba(255,255,255,.1)', padding:'5px 10px', fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px'}}>ZOOLOGY</span><span style={{border:'1px solid rgba(255,255,255,.1)', padding:'5px 10px', fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px'}}>CHEM</span></div>
          <div style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px', color:'var(--yellow)', marginBottom:'6px'}}>Q27 • +4 −1 • MARKED</div>
          <div className={styles.question} style={{fontSize:'14px'}}>Q27. Which is NOT a characteristic of collenchyma?</div>
          <div className={styles.opt}><b>A</b> Living cells</div><div className={`${styles.opt} ${styles.sel}`}><b>B</b> Thickened corners — YOUR PICK</div><div className={styles.opt}><b>C</b> Dead at maturity</div><div className={styles.opt}><b>D</b> Mechanical support</div>
          <div style={{display:'flex', justifyContent:'space-between', marginTop:'12px', alignItems:'center'}}><div style={{display:'flex', gap:'6px'}}><span style={{border:'1px solid rgba(255,255,255,.1)', padding:'6px 10px', fontFamily:'\'JetBrains Mono\',monospace', fontSize:'11px'}}>← PREV</span><span style={{background:'var(--yellow)', color:'#000', padding:'6px 10px', fontFamily:'\'JetBrains Mono\',monospace', fontSize:'11px', fontWeight:'800'}}>SAVE & NEXT →</span></div><div style={{display:'flex', gap:'4px'}}><span className={styles.pal} style={{width:'24px', height:'24px'}}>26</span><span className={`${styles.pal} ${styles.mark}`} style={{width:'24px', height:'24px'}}>27</span><span className={styles.pal} style={{width:'24px', height:'24px'}}>28</span></div></div>
        </div>
      </div>
    </div>
  );
}
