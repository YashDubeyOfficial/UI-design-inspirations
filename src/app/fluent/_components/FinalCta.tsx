import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={`${styles['final-card']}`}>
        <div className={`${styles['final-copy']}`}>
          <h2>Fluent hall.<br />Real pressure.</h2>
          <p>40,000 aspirants left harsh quizzes for acrylic halls. Three mocks free — mica waits. Upload and float.</p>
          <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
            <a href="#try" style={{height:'44px', padding:'0 20px', background:'white', color:'var(--fluent)', borderRadius:'4px', fontWeight:'700', display:'inline-flex', alignItems:'center', gap:'8px', boxShadow:'var(--shadow4)'}}>Upload PDF — free →</a>
            <a href="#how" style={{height:'44px', padding:'0 18px', border:'1px solid rgba(255,255,255,.3)', borderRadius:'4px', display:'inline-flex', alignItems:'center', color:'white', fontWeight:'600'}}>Watch fluent demo</a>
          </div>
          <div style={{marginTop:'12px', display:'flex', gap:'12px', fontSize:'12px', fontWeight:'600', opacity:'.9'}}><span>✓ No signup</span><span>✓ Scanned OK</span><span>✓ 40s to hall</span></div>
        </div>
        <div className={`${styles['final-visual']}`}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px'}}><strong style={{fontSize:'11px', letterSpacing:'.06em'}}>YOUR LIBRARY</strong><span style={{background:'var(--fluent)', color:'white', padding:'5px 9px', borderRadius:'4px', fontSize:'11px', fontWeight:'700'}}>3/3 FREE</span></div>
          <div style={{border:'1px solid var(--border)', borderRadius:'6px', padding:'12px', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px', background:'rgba(0,120,212,.06)'}}><div><strong>UPSC GS 1 • 2022</strong><br /><span style={{fontSize:'12px', color:'var(--muted)'}}>82/200 • fluent</span></div><span style={{background:'var(--ink)', color:'white', padding:'6px 10px', borderRadius:'4px', fontSize:'12px', fontWeight:'600'}}>Analysis →</span></div>
          <div style={{height:'6px', background:'var(--border)', borderRadius:'999px', overflow:'hidden', marginBottom:'10px'}}><div style={{height:'100%', width:'68%', background:'var(--fluent)', borderRadius:'999px'}}></div></div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'8px', textAlign:'center'}}><div style={{background:'var(--mica)', border:'1px solid var(--border)', borderRadius:'6px', padding:'10px'}}><b>42</b><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>Mocks</span></div><div style={{background:'var(--mica)', border:'1px solid var(--border)', borderRadius:'6px', padding:'10px'}}><b>214</b><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>Avg</span></div><div style={{background:'var(--mica)', border:'1px solid var(--border)', borderRadius:'6px', padding:'10px'}}><b>68%</b><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>Acc</span></div></div>
        </div>
      </div>
    </section>
  );
}
