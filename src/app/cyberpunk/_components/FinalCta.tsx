import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={`${styles['final-card']}`}>
        <div>
          <h2>READY TO <em>JACK</em><br />YOUR PDF?</h2>
          <p style={{color:'rgba(232,234,240,.6)', margin:'10px 0', fontSize:'14px'}}>Join 40K runners who practice under neon pressure — not flat quizzes. 3 free jacks, no card.</p>
          <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}><a href="#" className={`${styles['btn-neon']}`} style={{background:'var(--yellow)', color:'#000', borderColor:'var(--yellow)', boxShadow:'0 0 16px var(--yellow)'}}>UPLOAD — IT&apos;S FREE →</a><a href="#" className={`${styles['btn-neon']} ${styles.mag}`}>WATCH 30s GRID</a></div>
          <div style={{marginTop:'10px', fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px', color:'rgba(232,234,240,.4)'}}>MADE IN INDIA 🇮🇳 • ENCRYPTED • NO TRAINING DATA SOLD</div>
        </div>
        <div className={`${styles['final-visual']}`}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px'}}><strong style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px', letterSpacing:'.08em', color:'var(--cyan)'}}>YOUR DECK // 3/3 FREE REMAINING</strong><span style={{background:'var(--mag)', color:'#fff', padding:'4px 8px', fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px'}}>LIVE</span></div>
          <div style={{border:'1px solid var(--cyan)', padding:'10px', display:'flex', justifyContent:'space-between', alignItems:'center', background:'rgba(0,255,240,.06)', marginBottom:'10px'}}><div><strong style={{fontSize:'13px', color:'#fff'}}>JEE MAIN 2023 — SHIFT 1</strong><br /><span style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'11px', color:'var(--cyan)'}}>SCORE 214/360 • GLOW</span></div><span style={{background:'var(--cyan)', color:'#000', padding:'5px 9px', fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px', fontWeight:'800'}}>ANALYSIS →</span></div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'8px', textAlign:'center'}}><div style={{border:'1px solid rgba(0,255,240,.15)', padding:'10px', background:'rgba(0,255,240,.04)'}}><b style={{fontFamily:'\'Orbitron\',sans-serif', color:'var(--cyan)'}}>42</b><br /><span style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px', color:'rgba(232,234,240,.5)'}}>MOCKS</span></div><div style={{border:'1px solid rgba(255,0,255,.15)', padding:'10px', background:'rgba(255,0,255,.04)'}}><b style={{fontFamily:'\'Orbitron\',sans-serif', color:'var(--mag)'}}>214</b><br /><span style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px', color:'rgba(232,234,240,.5)'}}>AVG</span></div><div style={{border:'1px solid rgba(255,230,0,.2)', padding:'10px', background:'rgba(255,230,0,.06)'}}><b style={{fontFamily:'\'Orbitron\',sans-serif', color:'var(--yellow)'}}>68%</b><br /><span style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px', color:'rgba(232,234,240,.5)'}}>ACC</span></div></div>
        </div>
      </div>
    </section>
  );
}
