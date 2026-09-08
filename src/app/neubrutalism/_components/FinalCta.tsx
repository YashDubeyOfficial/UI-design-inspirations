import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={`${styles['final-card']} ${styles['halftone-yellow']}`}>
        <div>
          <h2>READY TO TURN<br /><em>YOUR PDF INTO A MOCK?!</em></h2>
          <p style={{fontWeight:'700', margin:'8px 0 12px'}}>Join 40k aspirants who practice with POP pressure — not boring MCQs. 3 free mocks!</p>
          <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}><a href="#" className={`${styles['btn-brutal']} ${styles.pink}`}>Upload PDF — It’s free! →</a><a href="#" className={`${styles['btn-brutal']} ${styles.dark}`}>Watch 30s demo</a></div>
        </div>
        <div className={`${styles['final-visual']}`}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'8px'}}><strong style={{fontSize:'11px'}}>YOUR MOCK LIBRARY!</strong><span style={{fontWeight:'900', background:'var(--lime)', border:'3px solid var(--ink)', padding:'4px 8px', borderRadius:'999px', boxShadow:'3px 3px 0 var(--ink)'}}>3/3 FREE!</span></div>
          <div style={{padding:'10px', border:'3px solid var(--ink)', boxShadow:'4px 4px 0 var(--ink)', borderRadius:'12px', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px', background:'var(--yellow)'}}><div><strong style={{fontSize:'13px'}}>JEE Main 2023 — Shift 1</strong><br /><span style={{fontSize:'11px', fontWeight:'700'}}>Score 214/360 • BOOM!</span></div><span style={{fontWeight:'900', background:'var(--ink)', color:'white', padding:'5px 9px', borderRadius:'999px'}}>Analysis →</span></div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'8px', textAlign:'center'}}><div style={{padding:'10px', border:'3px solid var(--ink)', boxShadow:'4px 4px 0 var(--ink)', borderRadius:'12px', background:'var(--cyan)'}}><b style={{fontFamily:'\'Anton\',sans-serif', fontSize:'20px'}}>42</b><br /><span style={{fontWeight:'800', fontSize:'11px'}}>Mocks</span></div><div style={{padding:'10px', border:'3px solid var(--ink)', boxShadow:'4px 4px 0 var(--ink)', borderRadius:'12px', background:'var(--pink)', color:'white'}}><b style={{fontFamily:'\'Anton\',sans-serif', fontSize:'20px'}}>214</b><br /><span style={{fontWeight:'800', fontSize:'11px'}}>Avg</span></div><div style={{padding:'10px', border:'3px solid var(--ink)', boxShadow:'4px 4px 0 var(--ink)', borderRadius:'12px', background:'var(--lime)'}}><b style={{fontFamily:'\'Anton\',sans-serif', fontSize:'20px'}}>68%</b><br /><span style={{fontWeight:'800', fontSize:'11px'}}>Acc.</span></div></div>
        </div>
      </div>
    </section>
  );
}
