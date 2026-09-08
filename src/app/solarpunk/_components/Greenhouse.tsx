import styles from "../page.module.css";

export default function Greenhouse() {
  return (
    <div className={`${styles['exp-wrap']}`} style={{marginTop:'18px'}}>
      <div className={`${styles['exp-copy']}`}>
        <div className={styles.kicker}>◆ THE HALL IS A GREENHOUSE</div><h2>Feels like<br /><em>TCS iON,</em><br />but breathable.</h2>
        <p>Brutal exams don’t need brutal UI. We kept the pressure, added the air — timer that photosynthesizes, palette that grows, instructions like a field guide.</p>
        <div className={styles.point}><i>◷</i><span><strong>Real countdown & auto-harvest.</strong> At 00:00 it shears and submits — just like the centre.</span></div>
        <div className={styles.point}><i style={{background:'var(--cream2)', color:'var(--green)'}}>▦</i><span><strong>Seed palette.</strong> Answered / marked / dormant — in earth tones, instantly readable.</span></div>
        <div style={{display:'flex', gap:'10px', marginTop:'12px', flexWrap:'wrap'}}><a href="#" className={`${styles['btn-leaf']}`}>Try living CBT →</a><span style={{fontSize:'12px', color:'rgba(255,255,255,.7)', alignSelf:'center'}}>No signup to preview</span></div>
      </div>
      <div className={`${styles['exp-visual']}`}>
        <div className={`${styles['exp-top']}`}><strong>🌿 PARAKH GREENHOUSE CBT • GATE 2024 — MOCK 01</strong><span style={{background:'var(--lime)', padding:'4px 8px', borderRadius:'999px', border:'1px solid #fff'}}>● 02:14:33 LEFT</span></div>
        <div className={`${styles['exp-body']}`}>
          <div style={{display:'flex', gap:'6px', marginBottom:'10px', flexWrap:'wrap'}}><span style={{background:'var(--green)', color:'#fff', padding:'6px 12px', borderRadius:'999px', fontSize:'11px', fontWeight:'800'}}>APTITUDE • 10</span><span style={{padding:'6px 12px', borderRadius:'999px', fontSize:'11px', background:'var(--cream)', border:'1px solid rgba(46,125,50,.1)'}}>Core • 55</span></div>
          <div style={{fontSize:'11px', fontWeight:'700', display:'flex', gap:'6px', marginBottom:'8px'}}><span style={{background:'var(--lime)', padding:'4px 8px', borderRadius:'999px'}}>Q14 • +2 −0.66</span><span style={{background:'var(--mint)', padding:'4px 8px', borderRadius:'999px', border:'1px solid rgba(46,125,50,.1)'}}>Marked for review</span></div>
          <div style={{fontWeight:'700', fontSize:'14px', marginBottom:'10px'}}>Q14. A solar panel of 2m² receives 1000 W/m² at 18% efficiency. Power output is:</div>
          <div style={{display:'grid', gap:'7px', marginBottom:'12px'}}><div className={styles.opt}><b>A</b> 280 W</div><div className={`${styles.opt} ${styles.sel}`} style={{borderColor:'var(--green)'}}><b>B</b> 360 W — Your pick 🌱</div><div className={styles.opt}><b>C</b> 420 W</div><div className={styles.opt}><b>D</b> 180 W</div></div>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}><div style={{display:'flex', gap:'6px'}}><span style={{padding:'6px 10px', borderRadius:'999px', border:'1px solid rgba(46,125,50,.12)', background:'#fff', fontSize:'11px', fontWeight:'700'}}>← Prev</span><span style={{padding:'6px 10px', borderRadius:'999px', background:'var(--green)', color:'#fff', fontSize:'11px', fontWeight:'800'}}>Save & Next →</span></div><div style={{display:'flex', gap:'4px'}}><span className={styles.pal} style={{width:'24px', height:'24px'}}>13</span><span className={`${styles.pal} ${styles.mark}`} style={{width:'24px', height:'24px'}}>14</span><span className={styles.pal} style={{width:'24px', height:'24px'}}>15</span></div></div>
        </div>
      </div>
    </div>
  );
}
