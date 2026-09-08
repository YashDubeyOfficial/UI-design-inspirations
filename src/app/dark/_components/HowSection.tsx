import styles from "../page.module.css";
import { compareNew, compareOld, features } from "../_data/content";

export default function HowSection() {
  return (
    <section className={styles.section} id="how">
      <div className={`${styles['section-head']}`}>
        <div className={styles.kicker}><i></i> PDF → DARK MOCK IN 3</div>
        <h2>Upload. <em>We see in dark.</em><br />You attempt.</h2>
        <p>OLED blacks, lime accents, zero eye strain. Designed for 2AM PYQ sessions — not daytime quizzes.</p>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>01 / UPLOAD <span className={styles.lime}>↗</span></div>
          <h3>Drop any PDF</h3>
          <p>Previous-year bundles, coaching scans, photo Xerox — up to 300 pages. Night or day.</p>
          <div className={`${styles['step-visual']}`}>
            <div className={`${styles['upload-box']}`}><div className={styles.up}>↑</div><strong>Drop PDF into dark</strong><span>PDF up to 50MB • any scan</span></div>
            <div className={`${styles['mini-list']}`}>
              <div className={`${styles['mini-row']}`}>UPSC_2022_GS1.pdf <b>12.4 MB</b></div>
              <div className={`${styles['mini-row']}`}>Allen_Test_07.pdf <b>8.1 MB</b></div>
            </div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>02 / AI SCAN <span>✦</span></div>
          <h3>AI parses glow</h3>
          <p>Finds questions, options, sections, duration and +4 −1 — even when PDF is a bad night scan.</p>
          <div className={`${styles['step-visual']}`}>
            <div className={`${styles['extract-grid']}`}>
              <div className={`${styles['extract-card']}`}><small>DURATION</small><strong>180<span style={{fontSize:'12px', color:'var(--lime)'}}> m</span></strong></div>
              <div className={`${styles['extract-card']}`}><small>MARKING</small><strong>+4 −1</strong></div>
              <div className={`${styles['extract-card']}`}><small>SECTIONS</small><strong>3</strong></div>
              <div className={`${styles['extract-card']}`}><small>QUESTIONS</small><strong>90</strong></div>
            </div>
            <div className={`${styles['badge-verbatim']}`}>✓ Instructions preserved — dark verbatim</div>
          </div>
        </div>
        <div className={styles.step}>
          <div className={`${styles['step-num']}`}>03 / AFTER DARK <span>▶</span></div>
          <h3>Attempt after dark</h3>
          <p>True CBT: lime timer bleed, palette glow, mark-for-review and auto-submit.</p>
          <div className={`${styles['step-visual']}`} style={{padding:'0', overflow:'hidden'}}>
            <div style={{display:'flex', justifyContent:'space-between', padding:'10px 12px', borderBottom:'1px solid var(--line2)', fontSize:'11px', fontWeight:'700'}}><span>Q 14 / 90</span><span style={{background:'var(--lime)', color:'#0A0A0F', padding:'4px 8px', borderRadius:'999px'}}>01:42:11</span></div>
            <div style={{padding:'12px'}}>
              <div style={{height:'8px', background:'var(--lime)', borderRadius:'999px', width:'74%', marginBottom:'8px', boxShadow:'0 0 8px var(--lime-glow)'}}></div>
              <div style={{height:'7px', background:'rgba(255,255,255,.08)', borderRadius:'999px', width:'90%', marginBottom:'6px'}}></div>
              <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'6px', marginTop:'12px'}}>
                <span className={`${styles.pal} ${styles.ans}`}>1</span><span className={`${styles.pal} ${styles.mark}`}>2</span><span className={styles.pal}>3</span><span className={styles.pal}>4</span><span className={styles.pal}>5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles['exp-wrap']}`} id="cbt" style={{marginTop:'16px'}}>
        <div className={`${styles['exp-copy']}`}>
          <div className={styles.kicker}><i></i> THE DARK HALL</div>
          <h2>Feels like<br /><em>TCS iON</em><br />at midnight.</h2>
          <p>We kept the pressure, dimmed the UI. Timer glows lime, palette breathes, instructions stay crisp on true black.</p>
          <div className={`${styles['exp-point']}`}><i>◷</i><span><strong>Neon countdown & auto-submit.</strong> At 00:00 it cuts — no mercy, just like centre.</span></div>
          <div className={`${styles['exp-point']}`}><i>▦</i><span><strong>OLED palette.</strong> Answered / marked / not visited — lime coded, eye-safe.</span></div>
          <div className={`${styles['exp-cta']}`}>
            <a href="#" className={`${styles['btn-lime']}`}>Try dark CBT →</a>
            <span style={{fontSize:'12px', alignSelf:'center', color:'var(--muted)'}}>No signup to preview</span>
          </div>
        </div>
        <div className={`${styles['exp-visual']}`}>
          <div className={`${styles['exp-top']}`}><strong>PARAKH DARK • NEET 2023 — MOCK 02</strong><span style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'11px', color:'var(--lime)'}}>● 02:14:33 LEFT</span></div>
          <div className={`${styles['exp-body']}`}>
            <div className={`${styles['section-tabs']}`}><span className={styles.active}>BOTANY • 50</span><span>ZOOLOGY</span><span>CHEM</span></div>
            <div className={`${styles['q-meta']}`}><span>Q27 • +4 −1</span><span style={{background:'rgba(255,255,255,.04)', borderColor:'var(--line)', color:'var(--muted)'}}>Marked</span></div>
            <div className={`${styles['q-title']}`}>Q27. Which is NOT a characteristic of collenchyma?</div>
            <div className={`${styles['q-options']}`}>
              <div className={styles.opt}><b>A</b> Living cells</div>
              <div className={`${styles.opt} ${styles.sel}`}><b>C</b> Dead at maturity — Your pick</div>
              <div className={styles.opt}><b>B</b> Thickened corners</div>
              <div className={styles.opt}><b>D</b> Mechanical support</div>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:'10px', flexWrap:'wrap', paddingTop:'12px', borderTop:'1px solid var(--line2)'}}>
              <div style={{display:'flex', gap:'8px'}}><span className={`${styles['mini-btn']}`} style={{padding:'8px 12px'}}>← Previous</span><span className={`${styles['mini-btn']} ${styles.dark}`} style={{padding:'8px 12px'}}>Save & Next →</span></div>
              <div style={{display:'flex', gap:'6px'}}><span className={`${styles.pal} ${styles.ans}`} style={{width:'26px', height:'26px'}}>26</span><span className={`${styles.pal} ${styles.mark}`} style={{width:'26px', height:'26px'}}>27</span><span className={styles.pal} style={{width:'26px', height:'26px'}}>28</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.features}>
        {features.map((f) => (
          <div key={f.title} className={styles.feat}><div className={`${styles['feat-icon']}`}>{f.icon}</div><h4>{f.title}</h4><p>{f.text}</p></div>
        ))}
      </div>

      <div className={styles.compare}>
        <div className={`${styles.cmp} ${styles.old}`}>
          <h4>❌ Day-mode pain</h4>
          <ul>
            {compareOld.map((item) => (
              <li key={item.title}><i>✕</i><span><b>{item.title}</b> {item.text}</span></li>
            ))}
          </ul>
        </div>
        <div className={`${styles.cmp} ${styles.new}`}>
          <h4>✦ Dark mode real</h4>
          <ul>
            {compareNew.map((item) => (
              <li key={item.title}><i>✓</i><span><b>{item.title}</b> {item.text}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
