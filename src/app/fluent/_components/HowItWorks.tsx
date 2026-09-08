import styles from "../page.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={`${styles['section-head']}`}>
        <div className={styles.kicker}><i></i> PDF → ACRYLIC → HALL</div>
        <h2>Light, depth, <em>and accuracy.</em></h2>
        <p>Mica behind, acrylic floating — your PDF lifts through depth layers, not flat jumps. Eye stays calm, hall stays true.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>01 — DROP <span>↗</span></div>
          <h3>Drop onto mica</h3>
          <p>PYQs, phone scans, 300-page banks — mica accepts all, acrylic lifts.</p>
          <div className={styles.sheet}><div className={styles.drop}><div className={styles.ic}>↑</div><strong>Drop PDF here</strong><br /><span style={{fontSize:'11px', color:'var(--muted)'}}>or browse • 50MB • reveal on drag</span></div></div>
        </div>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>02 — FLUENT READS <span>✦</span></div>
          <h3>Fluent reveals structure</h3>
          <p>Duration, marking, sections — revealed with soft light, not harsh pop.</p>
          <div className={styles.sheet}>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px'}}>
              <div style={{background:'rgba(255,255,255,.6)', border:'1px solid var(--border)', borderRadius:'6px', padding:'10px', textAlign:'center'}}><small style={{fontSize:'10px', color:'var(--muted)'}}>DURATION</small><br /><strong>180m</strong></div>
              <div style={{background:'rgba(255,255,255,.6)', border:'1px solid var(--border)', borderRadius:'6px', padding:'10px', textAlign:'center'}}><small style={{fontSize:'10px', color:'var(--muted)'}}>MARKING</small><br /><strong>+4 −1</strong></div>
              <div style={{background:'rgba(255,255,255,.6)', border:'1px solid var(--border)', borderRadius:'6px', padding:'10px', textAlign:'center'}}><small style={{fontSize:'10px', color:'var(--muted)'}}>SECTIONS</small><br /><strong>3</strong></div>
              <div style={{background:'rgba(255,255,255,.6)', border:'1px solid var(--border)', borderRadius:'6px', padding:'10px', textAlign:'center'}}><small style={{fontSize:'10px', color:'var(--muted)'}}>Qs</small><br /><strong>90</strong></div>
            </div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>03 — FLOAT <span>▶</span></div>
          <h3>Float into hall</h3>
          <p>Acrylic CBT floats above mica — palette, timer, mark — depth you feel.</p>
          <div className={styles.sheet}>
            <div style={{display:'flex', justifyContent:'space-between', fontSize:'11px', fontWeight:'700'}}><span>Q14 / 90</span><span style={{background:'var(--ink)', color:'white', padding:'4px 8px', borderRadius:'4px'}}>01:42:11</span></div>
            <div style={{height:'6px', background:'var(--fluent)', borderRadius:'999px', width:'72%', marginTop:'8px'}}></div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'6px', marginTop:'10px'}}><span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.mark}`}>2</span><span className={styles.pal}>3</span><span className={styles.pal}>4</span><span className={styles.pal}>5</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
