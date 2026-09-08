import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={`${styles['section-head']}`}>
        <div className={styles.kicker}><i></i> AURORA FLOW — 3 STEPS</div>
        <h2>Paper in. <em>Light out.</em> Hall begins.</h2>
        <p>From dusty PDF to dark hall in three aurora breaths. You watch bands shift; we do the structuring.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>01 — DROP <span>↗</span></div>
          <h3>Drop into the night</h3>
          <p>PYQs, coaching scans, 300-page banks — even phone photos. The aurora accepts anything legible.</p>
          <div className={`${styles['step-visual']}`}><div className={`${styles['upload-box']}`}><div className={`${styles['up-icon']}`}>↑</div><strong style={{fontSize:'13px', color:'white'}}>Drop PDF into aurora</strong><span style={{fontSize:'11px', color:'var(--muted)'}}>or browse • 50MB • aurora dropzone</span></div><div style={{marginTop:'8px', display:'grid', gap:'6px'}}><div style={{fontSize:'12px', fontWeight:'600', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.06)', padding:'7px 9px', borderRadius:'999px', display:'flex', justifyContent:'space-between'}}><span>CAT_2023_Slot2.pdf</span><span style={{background:'rgba(255,255,255,.08)', padding:'3px 7px', borderRadius:'999px', color:'white'}}>8.4 MB</span></div></div></div>
        </div>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>02 — AURORA READS <span>✦</span></div>
          <h3>Aurora dissects light</h3>
          <p>Questions, options, diagrams, marking +3 −1, duration, section locks — lifted as if by the lights themselves.</p>
          <div className={`${styles['step-visual']}`}><div className={styles.grid2}><div className={`${styles['mini-card']}`}><small>DURATION</small><br /><strong>120 mins</strong></div><div className={`${styles['mini-card']}`}><small>MARKING</small><br /><strong>+3 −1</strong></div><div className={`${styles['mini-card']}`}><small>SECTIONS</small><br /><strong>3 bands</strong></div><div className={`${styles['mini-card']}`}><small>QUESTIONS</small><br /><strong>66 lifted</strong></div></div><div style={{marginTop:'8px', fontSize:'11px', fontWeight:'700', padding:'8px', borderRadius:'999px', background:'linear-gradient(135deg,#22C55E,#8B5CF6)', color:'white', textAlign:'center'}}>✓ Instructions preserved in night mode</div></div>
        </div>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>03 — ENTER HALL <span>▶</span></div>
          <h3>Enter the dark hall</h3>
          <p>Timer glows green, palette glimmers violet — mark-for-review, auto-submit, everything hush-quiet and true.</p>
          <div className={`${styles['step-visual']}`}><div style={{display:'flex', justifyContent:'space-between', fontSize:'11px', fontWeight:'800', letterSpacing:'.06em', marginBottom:'8px', color:'white'}}><span>Q 19 / 66</span><span style={{background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.08)', padding:'4px 8px', borderRadius:'999px'}}>01:14:22</span></div><div style={{height:'8px', background:'linear-gradient(90deg,#22C55E,#8B5CF6)', borderRadius:'999px', width:'68%', marginBottom:'8px'}}></div><div style={{height:'7px', background:'rgba(255,255,255,.06)', borderRadius:'999px', width:'88%', marginBottom:'6px'}}></div><div style={{height:'7px', background:'rgba(255,255,255,.04)', borderRadius:'999px', width:'66%'}}></div><div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'6px', marginTop:'10px'}}><span style={{height:'24px', borderRadius:'8px', background:'white', color:'#080A14', display:'grid', placeItems:'center', fontSize:'10px', fontWeight:'800'}}>1</span><span style={{height:'24px', borderRadius:'8px', background:'#22C55E', color:'#052e16', display:'grid', placeItems:'center', fontSize:'10px', fontWeight:'800'}}>2</span><span style={{height:'24px', borderRadius:'8px', background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.08)', display:'grid', placeItems:'center', fontSize:'10px', color:'white'}}>3</span><span style={{height:'24px', borderRadius:'8px', background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.08)', display:'grid', placeItems:'center', fontSize:'10px', color:'white'}}>4</span><span style={{height:'24px', borderRadius:'8px', background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.08)', display:'grid', placeItems:'center', fontSize:'10px', color:'white'}}>5</span></div></div>
        </div>
      </div>
    </section>
  );
}
