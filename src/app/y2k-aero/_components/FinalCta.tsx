import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={`${styles['final-card']}`}>
        <div style={{position:'relative'}}>
          <h2>READY TO MAKE<br />YOUR PDF <span style={{background:'#fff', color:'var(--aqua-dark)', padding:'2px 10px', borderRadius:'999px'}}>POP?</span></h2>
          <p style={{color:'rgba(255,255,255,.85)', margin:'10px 0', fontSize:'14px'}}>Join 40k splashers who practice under aqua pressure — not dry quizzes. 3 free pops!</p>
          <div style={{display:'flex', gap:'10px', flexWrap:'wrap', position:'relative'}}><a href="#" style={{background:'#fff', color:'var(--aqua-dark)', padding:'12px 20px', borderRadius:'999px', fontFamily:'\'Baloo 2\',cursive', fontWeight:'800', border:'1px solid #fff', boxShadow:'0 6px 16px rgba(0,0,0,.12)'}}>Upload — It&apos;s free! →</a><a href="#" style={{background:'rgba(255,255,255,.15)', color:'#fff', padding:'12px 18px', borderRadius:'999px', fontWeight:'700', border:'1px solid rgba(255,255,255,.3)'}}>Watch 30s splash</a></div>
        </div>
        <div className={`${styles['final-visual']}`}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px'}}><strong style={{fontSize:'11px', letterSpacing:'.06em'}}>YOUR BUBBLE LIBRARY</strong><span style={{background:'linear-gradient(135deg,#C8FF00,#FFE600)', padding:'4px 8px', borderRadius:'999px', fontSize:'11px', fontWeight:'800', border:'1px solid #fff'}}>3/3 FREE</span></div>
          <div style={{border:'1px solid rgba(0,212,255,.12)', padding:'10px', borderRadius:'16px', display:'flex', justifyContent:'space-between', alignItems:'center', background:'linear-gradient(180deg,#E6FCFF,#D6F9FF)', marginBottom:'10px'}}><div><strong style={{fontSize:'13px'}}>JEE 2023 — Shift 1</strong><br /><span style={{fontSize:'11px', color:'var(--ink2)'}}>Score 214/360 • pop!</span></div><span style={{background:'linear-gradient(135deg,#00D4FF,#0097B2)', color:'#fff', padding:'6px 10px', borderRadius:'999px', fontSize:'11px', fontWeight:'800', border:'1px solid #fff'}}>Analysis →</span></div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'8px', textAlign:'center'}}><div style={{background:'linear-gradient(180deg,#E6FCFF,#D6F9FF)', border:'1px solid #fff', padding:'10px', borderRadius:'16px'}}><b style={{fontFamily:'\'Baloo 2\',cursive', fontSize:'18px', color:'var(--aqua-dark)'}}>42</b><br /><span style={{fontSize:'11px', color:'var(--ink2)'}}>Mocks</span></div><div style={{background:'linear-gradient(180deg,#FFF8E1,#FFECB3)', border:'1px solid #fff', padding:'10px', borderRadius:'16px'}}><b style={{fontFamily:'\'Baloo 2\',cursive', fontSize:'18px'}}>214</b><br /><span style={{fontSize:'11px', color:'var(--ink2)'}}>Avg</span></div><div style={{background:'linear-gradient(180deg,#E8FFD6,#C8FF00)', border:'1px solid #fff', padding:'10px', borderRadius:'16px'}}><b style={{fontFamily:'\'Baloo 2\',cursive', fontSize:'18px'}}>68%</b><br /><span style={{fontSize:'11px', color:'var(--ink2)'}}>Acc</span></div></div>
        </div>
      </div>
    </section>
  );
}
