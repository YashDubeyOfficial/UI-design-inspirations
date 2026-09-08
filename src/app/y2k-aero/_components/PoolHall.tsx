import styles from "../page.module.css";

export default function PoolHall() {
  return (
    <div className={`${styles['exp-wrap']}`} style={{marginTop:'18px'}}>
      <div className={`${styles['exp-visual']}`}>
        <div className={`${styles['exp-top']}`}><strong>PARAKH AQUA CBT • NEET 2023 — Mock 02</strong><span style={{background:'linear-gradient(135deg,#00D4FF,#0097B2)', color:'#fff', padding:'4px 8px', borderRadius:'999px', fontSize:'10px', border:'1px solid #fff'}}>● 01:58:41 LEFT</span></div>
        <div className={`${styles['exp-body']}`}>
          <div style={{display:'flex', gap:'6px', marginBottom:'10px', flexWrap:'wrap'}}><span style={{background:'linear-gradient(135deg,#00D4FF,#0097B2)', color:'#fff', padding:'6px 12px', borderRadius:'999px', fontSize:'11px', fontWeight:'800', border:'1px solid #fff'}}>BOTANY • 50</span><span style={{padding:'6px 12px', borderRadius:'999px', fontSize:'11px', background:'rgba(255,255,255,.7)'}}>Zoology</span><span style={{padding:'6px 12px', borderRadius:'999px', fontSize:'11px', background:'rgba(255,255,255,.7)'}}>Physics</span></div>
          <div style={{fontSize:'11px', fontWeight:'700', display:'flex', gap:'6px', marginBottom:'8px'}}><span style={{background:'#FFE600', padding:'4px 8px', borderRadius:'999px', border:'1px solid #fff'}}>Q27 • +4 −1</span><span style={{background:'#E6FCFF', padding:'4px 8px', borderRadius:'999px', border:'1px solid rgba(0,212,255,.15)'}}>Marked</span></div>
          <div style={{fontWeight:'700', fontSize:'14px', marginBottom:'10px'}}>Q27. Which is not a characteristic of collenchyma?</div>
          <div style={{display:'grid', gap:'7px', marginBottom:'12px'}}><div className={styles.opt}><b>A</b> Living cells</div><div className={`${styles.opt} ${styles.sel}`}><b>B</b> Thickened corners — Your pick ✨</div><div className={styles.opt}><b>C</b> Dead at maturity</div><div className={styles.opt}><b>D</b> Provides support</div></div>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}><div style={{display:'flex', gap:'6px'}}><span style={{padding:'6px 10px', borderRadius:'999px', border:'1px solid rgba(14,36,64,.08)', background:'rgba(255,255,255,.8)', fontSize:'11px', fontWeight:'700'}}>← Prev</span><span style={{padding:'6px 10px', borderRadius:'999px', background:'linear-gradient(135deg,#00D4FF,#0097B2)', color:'#fff', fontSize:'11px', fontWeight:'800'}}>Save & Next →</span></div><div style={{display:'flex', gap:'4px'}}><span className={styles.pal} style={{width:'24px', height:'24px'}}>26</span><span className={`${styles.pal} ${styles.mark}`} style={{width:'24px', height:'24px'}}>27</span><span className={styles.pal} style={{width:'24px', height:'24px'}}>28</span></div></div>
        </div>
      </div>
      <div className={`${styles['exp-copy']}`}>
        <div className={styles.kicker}>✦ THE HALL IS A POOL</div><h2>So glossy, <em>you forget it&apos;s AI.</em></h2>
        <p>Most mocks feel like homework. Ours feels like the centre — aqua chrome, soft bubbles, timer dripping. You focus on the question, the water does the rest.</p>
        <div className={styles.point}><i>◷</i><span><strong>Real countdown & auto-pop.</strong> At 00:00 the bubble bursts and submits — just like NTA.</span></div>
        <div className={styles.point}><i style={{background:'linear-gradient(135deg,#C8FF00,#FFE600)', color:'#0E2440'}}>▦</i><span><strong>Bubble palette.</strong> Answered, marked, not visited — all in gentle gloss.</span></div>
        <div style={{display:'flex', gap:'10px', marginTop:'12px', flexWrap:'wrap'}}><a href="#" className={`${styles['btn-aqua']}`}>Try aqua CBT →</a><span style={{fontSize:'12px', color:'var(--ink2)', alignSelf:'center'}}>No signup to preview</span></div>
      </div>
    </div>
  );
}
