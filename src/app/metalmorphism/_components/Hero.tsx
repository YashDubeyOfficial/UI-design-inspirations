import styles from "../page.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles['hero-copy']}`}>
        <div className={`${styles['hero-badge']}`}><b>HEAVY INDUSTRY</b> PDF → FORGE → CBT <i></i> 40s CAST</div>
        <h1>Forge your PDF<br /><span className={styles.steel}>into cold, hard</span><br /><span className={styles.forge}>CBT steel.</span></h1>
        <p className={styles.sub}>Not a soft quiz — a <strong>machined hall</strong>. Parakh hammers your PYQs, coaching plates and scanned blueprints into a beveled, riveted CBT with the weight of TCS iON.</p>
        <div className={`${styles['hero-actions']}`}>
          <a href="#try" className={`${styles['btn-hero-steel']}`}>Drop PDF into forge →</a>
          <a href="#how" className={`${styles['btn-hero-gun']}`}>See forging <span style={{width:'18px', height:'18px', borderRadius:'50%', background:'rgba(255,255,255,.06)', display:'grid', placeItems:'center', fontSize:'10px', border:'1px solid rgba(255,255,255,.08)'}}>▶</span></a>
        </div>
        <div className={styles.trust}>
          <div className={styles.avatars}><span>A</span><span>S</span><span>R</span></div>
          <span><strong>40,000</strong> forgings • <strong>2.3M</strong> rivets set • <strong>4.8★</strong> tensile strength</span>
          <span style={{background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.06)', padding:'5px 10px', borderRadius:'6px'}}>JEE • GATE • SSC • UPSC</span>
        </div>
      </div>

      <div className={`${styles['hero-visual']}`}>
        <div className={`${styles.slab} ${styles['metal-card']} ${styles['slab-gun']}`}>
          <div className={`${styles.rivet} ${styles.r1}`}></div><div className={`${styles.rivet} ${styles.r2}`}></div><div className={`${styles.rivet} ${styles.r3}`}></div><div className={`${styles.rivet} ${styles.r4}`}></div>
          <div className={`${styles['slab-head']}`}><div className={`${styles['slab-icon']}`}>⬢</div><div className={`${styles['slab-meta']}`}><strong>GATE_2024_ME_S1.pdf</strong><span>PLATE 14 • 22 pages • 9.2 MB • brushed scan</span></div><span className={`${styles['slab-badge']}`}>PDF</span></div>
          <div className={`${styles['slab-lines']}`}><div className={`${styles.line} ${styles.w90}`}></div><div className={`${styles.line} ${styles.w80}`}></div><div className={`${styles.line} ${styles.w65}`}></div></div>
          <div className={`${styles['q-slab']}`}><b>Q.14 &nbsp; A steel rod of length L … — PRESSURE TEST</b><div className={`${styles.line} ${styles.w65}`} style={{marginTop:'8px', background:'#323E4B'}}></div><div className={`${styles['q-opt']}`}></div><div className={`${styles['q-opt']} ${styles.fill}`}></div><div className={`${styles['q-opt']}`}></div></div>
          <div className={`${styles['slab-lines']}`} style={{marginTop:'12px'}}><div className={`${styles.line} ${styles.w80}`}></div><div className={`${styles.line} ${styles.w40}`}></div></div>
          <div style={{display:'flex', gap:'6px', marginTop:'12px'}}><span style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px', fontWeight:'800', padding:'5px 8px', borderRadius:'6px', background:'rgba(255,107,44,.12)', border:'1px solid rgba(255,107,44,.2)', color:'#FF8A4D'}}>≡ Instructions • 3 plates</span><span style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px', fontWeight:'800', padding:'5px 8px', borderRadius:'6px', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.06)', color:'var(--muted)'}}>NAT detected</span></div>
        </div>

        <div className={`${styles['forge-bridge']}`}>
          <div className={`${styles['forge-logo']}`}>✦</div>
          <div className={`${styles['forge-meta']}`}><strong>PARAKH FORGE</strong><br /><span>Hammering • 44s • 1420°C</span></div>
          <div className={styles.beam}><i></i></div>
          <div style={{textAlign:'right'}}><div style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px', fontWeight:'800', color:'white'}}>90 Qs</div><div style={{fontSize:'10px', color:'rgba(255,255,255,.7)'}}>180 min</div></div>
        </div>

        <div className={`${styles.slab} ${styles['chrome-card']} ${styles.monitor}`}>
          <div className={`${styles['monitor-top']}`}><strong>CHROME CBT • GATE 2024 — MOCK 01</strong><div style={{display:'flex', gap:'8px', alignItems:'center'}}><div className={`${styles['bezel-dots']}`}><i></i><i></i><i></i></div><span className={styles.timer}><span style={{width:'6px', height:'6px', background:'#FF6B2C', borderRadius:'50%', display:'inline-block', boxShadow:'0 0 6px rgba(255,107,44,.5)'}}></span> 02:12:04 <b>left</b></span></div></div>
          <div className={`${styles['monitor-body']}`}>
            <div className={`${styles['cbt-left']}`}>
              <div className={styles.tabs}><span className={`${styles.tab} ${styles.active}`}>Aptitude</span><span className={styles.tab}>Mechanics</span><span className={styles.tab}>Thermo</span></div>
              <div className={styles.question}>Q14. A steel rod length L, cross-section A, E = 200 GPa. Elongation under 10 kN?</div>
              <div className={styles.options}>
                <div className={styles.opt}><b>A</b> 0.25 mm</div>
                <div className={`${styles.opt} ${styles.sel}`}><b>B</b> 0.50 mm — Forged ✓</div>
                <div className={styles.opt}><b>C</b> 0.75 mm</div>
                <div className={styles.opt}><b>D</b> 1.00 mm</div>
              </div>
              <div className={`${styles['cbt-actions']}`}><span className={`${styles['mini-btn']}`}>← Prev</span><span className={`${styles['mini-btn']} ${styles.dark}`}>Save & Next →</span></div>
            </div>
            <div className={`${styles['cbt-right']}`}>
              <div className={`${styles['pal-head']}`}><span>PLATE 14 / 65</span><span>Q14</span></div>
              <div className={styles.palette}><span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.ans}`}>2</span><span className={styles.pal}>3</span><span className={`${styles.pal} ${styles.mark}`}>4</span><span className={styles.pal}>5</span><span className={styles.pal}>6</span><span className={`${styles.pal} ${styles.ans}`}>7</span><span className={styles.pal}>8</span><span className={`${styles.pal} ${styles.curr}`}>9</span><span className={`${styles.pal} ${styles.mark}`}>10</span><span className={`${styles.pal} ${styles.ans}`}>11</span><span className={styles.pal}>12</span><span className={styles.pal}>13</span><span className={`${styles.pal} ${styles.ans}`} style={{background:'#FF6B2C', color:'white', borderColor:'#FF6B2C'}}>14</span><span className={styles.pal}>15</span></div>
              <div className={styles.legend}><span><i className={styles.ans}></i>Set</span><span><i className={styles.mark}></i>Hold</span><span><i className={styles.not}></i>Empty</span></div>
            </div>
          </div>
        </div>
        <div className={`${styles['float-steel']} ${styles.fs1}`}><span className={styles.ic}>◷</span> Auto-forged submit</div>
        <div className={`${styles['float-steel']} ${styles.fs2}`}><span className={styles.ic}>✓</span> Riveted negatives</div>
      </div>
    </section>
  );
}
