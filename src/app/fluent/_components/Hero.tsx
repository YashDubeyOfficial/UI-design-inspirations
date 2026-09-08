import styles from "../page.module.css";
import { heroOptions, heroPalette } from "../_data/content";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <div className={styles.eyebrow}><b>FLUENT</b> Acrylic • Depth • Light</div>
        <h1>Your PDF,<br /><span className={styles.fluent}>fluent in exam.</span></h1>
        <p className={styles.sub}>Parakh brings <strong>Fluent’s light and depth</strong> to your PYQs and scanned banks — acrylic surfaces float over mica, reveal highlights guide your eye, and the hall feels calm for 3 hours. Like TCS iON, but fluent.</p>
        <div className={`${styles['hero-actions']}`}>
          <a href="#try" className={`${styles['btn-hero-primary']}`}>Upload PDF & float into CBT →</a>
          <a href="#how" className={`${styles['btn-hero-secondary']}`}>See acrylic demo <span style={{width:'18px', height:'18px', borderRadius:'50%', background:'var(--fluent)', color:'white', display:'grid', placeItems:'center', fontSize:'10px'}}>▶</span></a>
        </div>
        <div className={styles.trust}>
          <div className={styles.avatars}><span>A</span><span>S</span><span>R</span></div>
          <span><strong>40k+</strong> fluent users</span>
          <span>• 2.3M Qs rendered</span>
          <span style={{background:'var(--fluent)', color:'white', padding:'4px 8px', borderRadius:'4px', fontWeight:'700'}}>4.9★</span>
          <span style={{background:'rgba(255,255,255,.7)', border:'1px solid var(--border2)', padding:'5px 8px', borderRadius:'4px', fontWeight:'600'}}>JEE • NEET • UPSC</span>
        </div>
      </div>

      <div className={`${styles['hero-visual']}`}>
        <div className={`${styles.layer} ${styles['pdf-layer']}`}>
          <div className={`${styles['pdf-head']}`}><div className={`${styles['pdf-icon']}`}>≡</div><div className={`${styles['pdf-meta']}`}><strong>JEE_Main_2023_S1.pdf</strong><br /><span>18 pages • acrylic scan • light 40s</span></div><span className={styles.badge}>PDF</span></div>
          <div className={styles.lines}><div className={`${styles.line} ${styles.w90}`}></div><div className={`${styles.line} ${styles.w80}`}></div><div className={`${styles.line} ${styles.w60}`}></div></div>
          <div style={{marginTop:'12px', padding:'12px', borderRadius:'6px', background:'rgba(255,255,255,.6)', border:'1px solid var(--border)'}}><b style={{fontSize:'12px'}}>Q14. If α, β roots of x² −6x+4=0 …</b><div className={`${styles.line} ${styles.w60}`} style={{marginTop:'8px'}}></div><div className={`${styles.line} w40`}></div></div>
          <div style={{display:'flex', gap:'6px', marginTop:'10px', flexWrap:'wrap'}}><span className={styles.pill}>Instructions • 3p</span><span className={`${styles.pill} ${styles.live}`}>+4 −1</span></div>
        </div>

        <div className={`${styles['acrylic-bridge']}`}>
          <div className={`${styles['bridge-logo']}`}>✦</div>
          <div style={{flex:'1'}}><strong style={{fontSize:'13px'}}>PARAKH FLUENT AI</strong><br /><span style={{fontSize:'11px', opacity:'.85'}}>Acrylic parsing • 40s • reveal</span></div>
          <div className={`${styles['reveal-bar']}`}><i></i></div>
        </div>

        <div className={`${styles.layer} ${styles['cbt-layer']}`}>
          <div className={`${styles['cbt-top']}`}><strong>FLUENT CBT • JEE MAIN — MOCK 01</strong><span className={styles.timer}>● 02:47:12 <b>left</b></span></div>
          <div className={`${styles['cbt-body']}`}>
            <div className={`${styles['cbt-left']}`}>
              <div className={styles.pivot}><span className={styles.active}>Physics</span><span>Chemistry</span><span>Maths</span></div>
              <div className={styles.question}>Q14. If α and β are roots of x² −6x+4=0, then α³+β³ = ?</div>
              <div className={styles.options}>
                {heroOptions.map((opt) => (
                  <div key={opt.code} className={opt.selected ? `${styles.opt} ${styles.sel}` : styles.opt}><b>{opt.code}</b> {opt.text}</div>
                ))}
              </div>
              <div className={styles.actions}><span className={styles.mini}>← Previous</span><span className={`${styles.mini} ${styles.dark}`}>Save & Next →</span><span className={styles.mini} style={{background:'#FFF4CE', borderColor:'#FDE68A'}}>Mark</span></div>
            </div>
            <div className={`${styles['cbt-right']}`}>
              <div className={`${styles['palette-head']}`}><span>Palette</span><span>14 / 90</span></div>
              <div className={styles.palette}>
                {heroPalette.map((dot) => (
                  <span
                    key={dot.label}
                    className={
                      dot.variant === "ans"
                        ? `${styles.pal} ${styles.ans}`
                        : dot.variant === "mark"
                          ? `${styles.pal} ${styles.mark}`
                          : dot.variant === "curr"
                            ? `${styles.pal} ${styles.curr}`
                            : styles.pal
                    }
                  >{dot.label}</span>
                ))}
              </div>
              <div className={styles.legend}><span><i className={styles.a}></i>Answered</span><span><i className={styles.m}></i>Marked</span><span><i className={styles.o}></i>Not visited</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
