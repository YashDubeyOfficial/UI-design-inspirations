import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={`${styles['final-card']}`}>
        <div className={`${styles['final-copy']}`}>
          <h2>Quiet hall.<br /><span className={styles.blue}>Loud results.</span></h2>
          <p>40,000 aspirants chose whitespace over noise. Three mocks free — no card. Upload your PDF, feel the calm hall in 39 seconds.</p>
          <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
            <a href="#try" className={`${styles['btn-blue']}`} style={{height:'44px', padding:'0 20px'}}>Upload PDF — free →</a>
            <a href="#how" className={`${styles['btn-ghost']}`} style={{height:'44px'}}>Watch quiet demo</a>
          </div>
          <div style={{marginTop:'14px', display:'flex', gap:'12px', fontSize:'12px', fontWeight:'600', color:'var(--muted)', flexWrap:'wrap'}}><span>✓ No signup</span><span>✓ Scanned OK</span><span>✓ 39s quiet</span></div>
        </div>
        <div className={`${styles['final-visual']}`}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px'}}><strong style={{fontSize:'11px', letterSpacing:'.06em'}}>YOUR LIBRARY</strong><span style={{background:'var(--ink)', color:'white', padding:'5px 9px', borderRadius:'999px', fontSize:'11px', fontWeight:'600'}}>3/3 FREE</span></div>
          <div style={{border:'1px solid var(--border2)', borderRadius:'14px', padding:'12px', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px', background:'white'}}><div><strong>UPSC GS 1 • 2022</strong><br /><span style={{fontSize:'12px', color:'var(--muted)'}}>82/200 • quiet perfect</span></div><span style={{background:'var(--blue)', color:'white', padding:'6px 10px', borderRadius:'999px', fontSize:'12px', fontWeight:'600'}}>Analysis →</span></div>
          <div style={{height:'6px', background:'var(--fill)', borderRadius:'999px', overflow:'hidden', marginBottom:'10px', border:'1px solid var(--border)'}}><div style={{height:'100%', width:'68%', background:'var(--blue)', borderRadius:'999px'}}></div></div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'8px', textAlign:'center'}}><div style={{background:'var(--fill)', border:'1px solid var(--border2)', borderRadius:'12px', padding:'10px'}}><b>42</b><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>Mocks</span></div><div style={{background:'var(--fill)', border:'1px solid var(--border2)', borderRadius:'12px', padding:'10px'}}><b>214</b><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>Avg</span></div><div style={{background:'var(--fill)', border:'1px solid var(--border2)', borderRadius:'12px', padding:'10px'}}><b>68%</b><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>Acc</span></div></div>
        </div>
      </div>
    </section>
  );
}
