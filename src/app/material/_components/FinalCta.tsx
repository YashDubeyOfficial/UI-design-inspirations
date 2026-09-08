import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={`${styles['final-card']}`}>
        <div className={`${styles['final-copy']}`}>
          <h2>Material hall.<br />Human depth.</h2>
          <p>40,000 aspirants left flat quizzes for elevated halls. Three mocks free — FAB waits at 3dp. Tap and enter.</p>
          <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
            <a href="#try" style={{height:'48px', padding:'0 20px', borderRadius:'20px', background:'white', color:'var(--primary)', fontWeight:'700', display:'inline-flex', alignItems:'center', gap:'8px', boxShadow:'var(--e2)'}}>Upload PDF — free →</a>
            <a href="#how" style={{height:'48px', padding:'0 20px', borderRadius:'20px', border:'1px solid rgba(255,255,255,.3)', display:'inline-flex', alignItems:'center', color:'white', fontWeight:'500'}}>Watch motion demo</a>
          </div>
          <div style={{marginTop:'12px', display:'flex', gap:'12px', fontSize:'12px', fontWeight:'500', opacity:'.9'}}><span>✓ No signup</span><span>✓ Scanned OK</span><span>✓ 40s to hall</span></div>
        </div>
        <div className={`${styles['final-visual']}`}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px'}}><strong style={{fontSize:'11px', letterSpacing:'.5px'}}>YOUR LIBRARY</strong><span style={{height:'24px', padding:'0 10px', borderRadius:'20px', background:'var(--primary)', color:'white', display:'inline-flex', alignItems:'center', fontSize:'11px', fontWeight:'700'}}>3/3 FREE</span></div>
          <div style={{border:'1px solid var(--outlineVariant)', borderRadius:'12px', padding:'12px', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px', background:'var(--primaryContainer)'}}><div><strong>UPSC GS 1 • 2022</strong><br /><span style={{fontSize:'12px', color:'var(--muted)'}}>82/200 • elevated</span></div><span style={{height:'32px', padding:'0 12px', borderRadius:'20px', background:'var(--primary)', color:'white', display:'inline-flex', alignItems:'center', fontSize:'12px', fontWeight:'500'}}>Analysis →</span></div>
          <div style={{height:'6px', background:'var(--surfaceVariant)', borderRadius:'999px', overflow:'hidden', marginBottom:'10px'}}><div style={{height:'100%', width:'68%', background:'var(--primary)', borderRadius:'999px'}}></div></div>
          <div className={styles.stats}><div className={styles.stat}><b>42</b><span style={{fontSize:'11px', color:'var(--muted)'}}>Mocks</span></div><div className={styles.stat}><b>214</b><span style={{fontSize:'11px', color:'var(--muted)'}}>Avg</span></div><div className={styles.stat}><b>68%</b><span style={{fontSize:'11px', color:'var(--muted)'}}>Acc</span></div></div>
        </div>
      </div>
    </section>
  );
}
