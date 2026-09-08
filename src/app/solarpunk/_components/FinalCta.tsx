import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={`${styles['final-card']}`}>
        <div style={{position:'relative'}}>
          <h2>READY TO <em>GROW</em><br />YOUR PDF?</h2>
          <p style={{color:'rgba(255,255,255,.8)', margin:'10px 0', fontSize:'14px'}}>Join 40k growers who practice under canopy pressure — not quiz drought. 3 free seeds.</p>
          <div style={{display:'flex', gap:'10px', flexWrap:'wrap', position:'relative'}}><a href="#" style={{background:'#fff', color:'var(--green)', padding:'12px 20px', borderRadius:'999px', fontWeight:'800', boxShadow:'0 6px 16px rgba(0,0,0,.12)'}}>Plant PDF — It&apos;s free →</a><a href="#" style={{background:'rgba(255,255,255,.14)', color:'#fff', padding:'12px 18px', borderRadius:'999px', fontWeight:'700', border:'1px solid rgba(255,255,255,.2)'}}>Watch 30s sprout</a></div>
          <div style={{marginTop:'10px', fontSize:'11px', color:'rgba(255,255,255,.7)'}}>🌱 CARBON-NEGATIVE HOSTING • MADE IN INDIA 🇮🇳</div>
        </div>
        <div className={`${styles['final-visual']}`}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px'}}><strong style={{fontSize:'11px', letterSpacing:'.06em'}}>YOUR GREENHOUSE</strong><span style={{background:'var(--lime)', padding:'4px 8px', borderRadius:'999px', fontSize:'11px', fontWeight:'800'}}>3/3 FREE</span></div>
          <div style={{border:'1px solid rgba(46,125,50,.1)', padding:'10px', borderRadius:'16px', display:'flex', justifyContent:'space-between', alignItems:'center', background:'var(--mint)', marginBottom:'10px'}}><div><strong style={{fontSize:'13px'}}>JEE 2023 — Shift 1</strong><br /><span style={{fontSize:'11px', color:'var(--earth)'}}>Score 214/360 • rooted!</span></div><span style={{background:'var(--green)', color:'#fff', padding:'6px 10px', borderRadius:'999px', fontSize:'11px', fontWeight:'800'}}>Harvest →</span></div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'8px', textAlign:'center'}}><div style={{background:'var(--cream)', border:'1px solid rgba(46,125,50,.08)', padding:'10px', borderRadius:'16px'}}><b style={{fontFamily:'\'Fraunces\',serif', fontSize:'18px', color:'var(--green)'}}>42</b><br /><span style={{fontSize:'11px', color:'var(--earth)'}}>Mocks</span></div><div style={{background:'var(--mint)', border:'1px solid rgba(46,125,50,.08)', padding:'10px', borderRadius:'16px'}}><b style={{fontFamily:'\'Fraunces\',serif', fontSize:'18px'}}>214</b><br /><span style={{fontSize:'11px', color:'var(--earth)'}}>Avg</span></div><div style={{background:'var(--lime)', border:'1px solid rgba(46,125,50,.1)', padding:'10px', borderRadius:'16px'}}><b style={{fontFamily:'\'Fraunces\',serif', fontSize:'18px'}}>68%</b><br /><span style={{fontSize:'11px', color:'var(--earth)'}}>Acc</span></div></div>
        </div>
      </div>
    </section>
  );
}
