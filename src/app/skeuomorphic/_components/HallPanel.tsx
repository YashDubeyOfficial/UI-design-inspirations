import styles from "../page.module.css";

export default function HallPanel() {
  return (
    <div className={`${styles['wood-panel']}`}>
      <div>
        <div className={styles.kicker} style={{background:'rgba(201,168,106,.15)', color:'#FFD88A', borderColor:'rgba(201,168,106,.3)'}}>◆ THE HALL FEELING</div>
        <h2>Feels like hall.<br /><em>Not an app.</em></h2>
        <p>Students said flat quizzes don’t build temperament. So we built wood, paper and brass — so your brain thinks it’s the real centre.</p>
        <div className={styles.point}><i>◷</i><span><strong>CRT countdown & auto-submit.</strong> When the clock hits zero, the monitor locks — just like hall.</span></div>
        <div className={styles.point}><i>▦</i><span><strong>Brass palette.</strong> Ivory = not visited, ink = answered, brass = marked.</span></div>
        <div style={{display:'flex', gap:'10px', marginTop:'12px'}}><a href="#" className={`${styles['btn-brass']}`}>Try desk demo →</a><span style={{fontSize:'12px', opacity:'.7', alignSelf:'center'}}>No signup</span></div>
      </div>
      <div className={`${styles['monitor-wrap']}`}>
        <div className={`${styles['monitor-bezel']}`}><span>PARAKH • JEE 2023 — Mock 01</span><span style={{color:'#FFD88A'}}>● 02:14:33 LEFT</span></div>
        <div className={`${styles['monitor-screen']}`} style={{margin:'6px'}}>
          <div style={{padding:'12px'}}>
            <div style={{display:'flex', gap:'6px', marginBottom:'8px'}}><span className={`${styles.tab} ${styles.active}`}>Physics • 30</span><span className={styles.tab}>Chemistry</span><span className={styles.tab}>Maths</span></div>
            <div style={{fontSize:'11px', fontWeight:'700', color:'#7A6A54', marginBottom:'4px'}}>Q14 • +4 −1 • Marked for review</div>
            <div className={styles.question}>Q14. A particle moves with r = 3t² î + (4t − t²) ĵ. Magnitude of acceleration at t=1s is:</div>
            <div className={styles.options}><div className={styles.opt}><b>A</b>6 m/s²</div><div className={`${styles.opt} ${styles.sel}`}><b>C</b>√40 m/s² — Your answer</div><div className={styles.opt}><b>D</b>8 m/s²</div></div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}><div style={{display:'flex', gap:'6px'}}><span className={`${styles['mini-btn']}`}>← Prev</span><span className={`${styles['mini-btn']} ${styles.dark}`}>Save & Next →</span></div><div className={styles.palette} style={{margin:'0'}}><span className={`${styles.pal} ${styles.ans}`}>13</span><span className={`${styles.pal} ${styles.mark}`}>14</span><span className={styles.pal}>15</span></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
