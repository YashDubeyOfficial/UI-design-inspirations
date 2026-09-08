import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={`${styles['final-card']}`}>
        <div className={`${styles['final-copy']}`}>
          <h2>Ready to <em>forge your PDF</em> into steel?</h2>
          <p>40,000 aspirants already hammer their PYQs every night. Three forgings free — heavy, accurate, hall-true. Come strike.</p>
          <div className={`${styles['final-actions']}`}>
            <a href="#try" className={`${styles['btn-hero-steel']}`}>Load plate — forge free →</a>
            <a href="#how" className={`${styles['btn-hero-gun']}`} style={{background:'white', color:'#0F1419', borderColor:'#A8B5C2'}}>Watch 28s forge</a>
          </div>
          <div style={{marginTop:'12px', display:'flex', gap:'14px', fontFamily:'\'JetBrains Mono\',monospace', fontSize:'11px', color:'#475569', flexWrap:'wrap'}}><span>✓ No signup</span><span>✓ Scanned OK</span><span>✓ ~44s to steel</span></div>
        </div>
        <div className={`${styles['final-visual']}`}>
          <div className={styles.rivet} style={{top:'10px', right:'10px', width:'7px', height:'7px', opacity:'.5'}}></div>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'12px'}}><strong style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'11px', letterSpacing:'.06em', color:'white'}}>YOUR FORGE • PLATE STOCK</strong><span style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'11px', fontWeight:'800', background:'linear-gradient(135deg,#FF6B2C,#FF4D00)', color:'white', padding:'5px 9px', borderRadius:'6px', border:'1px solid rgba(255,255,255,.12)'}}>3/3 FREE</span></div>
          <div style={{padding:'12px', borderRadius:'10px', background:'linear-gradient(180deg, #232B33, #1C2228)', border:'1px solid #2E3A47', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'12px'}}>
            <div><strong style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'12px', color:'white'}}>GATE ME 2024 — Mock 01</strong><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>Score 54/65 • Tempered</span></div><span style={{fontFamily:'\'JetBrains Mono\',monospace', fontWeight:'800', background:'#FF6B2C', color:'white', padding:'6px 10px', borderRadius:'6px', fontSize:'11px'}}>Analysis →</span>
          </div>
          <div style={{height:'6px', background:'#1C2228', borderRadius:'999px', overflow:'hidden', marginBottom:'12px', border:'1px solid #2E3A47'}}><div style={{height:'100%', width:'78%', background:'linear-gradient(90deg,#FF6B2C,#FF8A4D)', borderRadius:'999px'}}></div></div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'8px', textAlign:'center'}}>
            <div style={{padding:'10px', borderRadius:'10px', background:'linear-gradient(180deg, #232B33, #1C2228)', border:'1px solid #2E3A47'}}><b style={{color:'white', fontFamily:'\'JetBrains Mono\',monospace', fontSize:'18px'}}>37</b><br /><span style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px', color:'var(--muted)'}}>Forgings</span></div>
            <div style={{padding:'10px', borderRadius:'10px', background:'linear-gradient(180deg, #2A333E, #232B33)', border:'1px solid #2E3A47'}}><b style={{color:'#FF6B2C', fontFamily:'\'JetBrains Mono\',monospace', fontSize:'18px'}}>54</b><br /><span style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px', color:'var(--muted)'}}>High</span></div>
            <div style={{padding:'10px', borderRadius:'10px', background:'linear-gradient(180deg, #E8EDF2, #C9D1D9)', border:'1px solid #A8B5C2'}}><b style={{color:'#0F1419', fontFamily:'\'JetBrains Mono\',monospace', fontSize:'18px'}}>71%</b><br /><span style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px', color:'#475569'}}>Yield</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
