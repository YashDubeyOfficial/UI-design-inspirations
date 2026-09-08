import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={`${styles['final-card']}`}>
        <div className={`${styles['final-copy']}`}>
          <h2>Let your <em>PDF dissolve</em> into aurora?</h2>
          <p>40,000 aspirants already study under these lights — quiet, accurate, hall-true. Three mocks free, no card. Just drop.</p>
          <div className={`${styles['final-actions']}`}>
            <a href="#try" className={`${styles['btn-final-primary']}`}>Upload PDF — under lights →</a>
            <a href="#how" className={`${styles['btn-final-ghost']}`}>Watch 28s aurora</a>
          </div>
          <div style={{marginTop:'14px', display:'flex', gap:'14px', fontSize:'12px', color:'var(--muted)', flexWrap:'wrap'}}><span>✓ No signup for demo</span><span>✓ Scanned PDFs OK</span><span>✓ ~41s to hall</span></div>
        </div>
        <div className={`${styles['final-visual']}`}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'12px'}}><strong style={{fontSize:'11px', letterSpacing:'.06em', color:'white'}}>YOUR AURORA LIBRARY</strong><span style={{fontSize:'11px', fontWeight:'800', background:'linear-gradient(135deg,#22C55E,#8B5CF6)', color:'white', padding:'5px 9px', borderRadius:'999px'}}>3/3 FREE</span></div>
          <div style={{padding:'12px', borderRadius:'14px', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.06)', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'12px'}}>
            <div><strong style={{fontSize:'13px', color:'white'}}>CAT 2023 Slot 2 — Mock 01</strong><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>Score 42/66 • Aurora perfect</span></div><span style={{fontWeight:'800', background:'white', color:'#080A14', padding:'6px 10px', borderRadius:'999px', fontSize:'12px'}}>Analysis →</span>
          </div>
          <div style={{height:'6px', background:'rgba(255,255,255,.06)', borderRadius:'999px', overflow:'hidden', marginBottom:'12px'}}><div style={{height:'100%', width:'64%', background:'linear-gradient(90deg,#22C55E,#8B5CF6)', borderRadius:'999px'}}></div></div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'8px', textAlign:'center'}}>
            <div style={{padding:'10px', borderRadius:'14px', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.06)'}}><b style={{color:'white', fontSize:'18px'}}>37</b><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>Mocks</span></div>
            <div style={{padding:'10px', borderRadius:'14px', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.06)'}}><b style={{color:'white', fontSize:'18px'}}>42</b><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>Avg</span></div>
            <div style={{padding:'10px', borderRadius:'14px', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.06)'}}><b style={{color:'#4ADE80', fontSize:'18px'}}>71%</b><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>Acc.</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
