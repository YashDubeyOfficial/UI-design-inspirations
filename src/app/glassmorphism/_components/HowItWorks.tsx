import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={`${styles['section-head']}`}>
        <div className={styles.kicker}><i></i> GLASS WORKFLOW — 3 STEPS</div>
        <h2>Light as air. <em>Accurate as the hall.</em></h2>
        <p>We kept the magic invisible. You see only frosted glass and soft light — we handle the chaos of marks, sections and instruction pages underneath.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>01 — DROP <span>↗</span></div>
          <h3>Drop any PDF</h3>
          <p>PYQs since 2012, coaching tests, phone-scanned sheets — even 300 pages. Just drag it onto the glass.</p>
          <div className={`${styles['step-visual']}`}>
            <div className={`${styles['upload-box']}`}><div className={`${styles['up-icon']}`}>↑</div><strong style={{fontSize:'13px'}}>Drop PDF onto glass</strong><span style={{fontSize:'11px', color:'var(--muted)'}}>or browse • PDF up to 50MB • frosted dropzone</span></div>
            <div className={`${styles['mini-list']}`}>
              <div className={`${styles['mini-row']}`}>Allen_Minor_03.pdf <b>9.1 MB</b></div>
              <div className={`${styles['mini-row']}`}>UPSC_2022_GS1.pdf <b>12.4 MB</b></div>
            </div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>02 — GLASS AI <span>✦</span></div>
          <h3>Glass AI refracts it</h3>
          <p>We peer through the frost: questions, options, diagrams, marking (+4 −1, +3 −0.33), duration — all lifted intact.</p>
          <div className={`${styles['step-visual']}`}>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px'}}>
              <div style={{background:'rgba(255,255,255,.75)', border:'1px solid rgba(255,255,255,.8)', borderRadius:'12px', padding:'10px', textAlign:'center'}}>
                <small style={{fontSize:'10px', fontWeight:'800', letterSpacing:'.06em', color:'var(--muted)'}}>DURATION</small><br /><strong style={{fontFamily:'\'Outfit\',sans-serif', fontSize:'16px'}}>180 mins</strong>
              </div>
              <div style={{background:'rgba(255,255,255,.75)', border:'1px solid rgba(255,255,255,.8)', borderRadius:'12px', padding:'10px', textAlign:'center'}}>
                <small style={{fontSize:'10px', fontWeight:'800', letterSpacing:'.06em', color:'var(--muted)'}}>MARKING</small><br /><strong style={{fontFamily:'\'Outfit\',sans-serif', fontSize:'16px'}}>+4 −1</strong>
              </div>
              <div style={{background:'rgba(255,255,255,.75)', border:'1px solid rgba(255,255,255,.8)', borderRadius:'12px', padding:'10px', textAlign:'center'}}>
                <small style={{fontSize:'10px', fontWeight:'800', letterSpacing:'.06em', color:'var(--muted)'}}>SECTIONS</small><br /><strong style={{fontFamily:'\'Outfit\',sans-serif', fontSize:'16px'}}>3 lifted</strong>
              </div>
              <div style={{background:'rgba(255,255,255,.75)', border:'1px solid rgba(255,255,255,.8)', borderRadius:'12px', padding:'10px', textAlign:'center'}}>
                <small style={{fontSize:'10px', fontWeight:'800', letterSpacing:'.06em', color:'var(--muted)'}}>QUESTIONS</small><br /><strong style={{fontFamily:'\'Outfit\',sans-serif', fontSize:'16px'}}>90 found</strong>
              </div>
            </div>
            <div style={{marginTop:'8px', fontSize:'11px', fontWeight:'700', padding:'8px', borderRadius:'999px', background:'linear-gradient(135deg,#7C3AED,#EC4899)', color:'white', textAlign:'center'}}>✓ Instructions preserved verbatim</div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>03 — ENTER <span>▶</span></div>
          <h3>Step into the light</h3>
          <p>A translucent exam hall: timer glow, soft palette, mark-for-review, auto-submit. Everything floats, nothing distracts.</p>
          <div className={`${styles['step-visual']}`} style={{padding:'10px'}}>
            <div style={{display:'flex', justifyContent:'space-between', fontSize:'11px', fontWeight:'800', letterSpacing:'.06em', marginBottom:'8px'}}><span>Q 14 / 90</span><span style={{background:'var(--ink)', color:'white', padding:'4px 8px', borderRadius:'999px'}}>01:42:11</span></div>
            <div style={{height:'8px', background:'linear-gradient(90deg,#7C3AED,#EC4899)', borderRadius:'999px', width:'74%', marginBottom:'8px'}}></div>
            <div style={{height:'7px', background:'rgba(26,23,64,.08)', borderRadius:'999px', width:'88%', marginBottom:'6px'}}></div>
            <div style={{height:'7px', background:'rgba(26,23,64,.06)', borderRadius:'999px', width:'66%'}}></div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'6px', marginTop:'10px'}}>
              <span style={{height:'24px', borderRadius:'8px', background:'var(--ink)', color:'white', display:'grid', placeItems:'center', fontSize:'10px', fontWeight:'700'}}>1</span><span style={{height:'24px', borderRadius:'8px', background:'#FEF08A', display:'grid', placeItems:'center', fontSize:'10px', fontWeight:'700', border:'1px solid rgba(251,191,36,.2)'}}>2</span><span style={{height:'24px', borderRadius:'8px', background:'rgba(255,255,255,.8)', border:'1px solid rgba(26,23,64,.08)', display:'grid', placeItems:'center', fontSize:'10px'}}>3</span><span style={{height:'24px', borderRadius:'8px', background:'rgba(255,255,255,.8)', border:'1px solid rgba(26,23,64,.08)', display:'grid', placeItems:'center', fontSize:'10px'}}>4</span><span style={{height:'24px', borderRadius:'8px', background:'rgba(255,255,255,.8)', border:'1px solid rgba(26,23,64,.08)', display:'grid', placeItems:'center', fontSize:'10px'}}>5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
