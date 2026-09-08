import styles from "../page.module.css";

export default function HeroVisual() {
  return (
    <div className={`${styles['hero-visual']}`}>
      <div className={`${styles.block} ${styles.pdf}`}>
        <div className={styles.head}><div className={`${styles['icon-box']}`}>≡</div><div><strong style={{fontWeight:'900'}}>JEE_Mains_2019_S1.pdf</strong><br /><span style={{fontSize:'11px', fontWeight:'800', color:'var(--muted)'}}>18 pages • 6.1 MB • flat scan</span></div><span style={{marginLeft:'auto', border:'3px solid var(--ink)', background:'var(--ink)', color:'white', padding:'5px 8px', fontWeight:'900', fontSize:'10px'}}>PDF</span></div>
        <div className={styles.lines}><div className={`${styles.line} ${styles.w90}`}></div><div className={`${styles.line} ${styles.w80}`}></div><div className={`${styles.line} ${styles.w65}`}></div></div>
        <div style={{marginTop:'12px', border:'3px solid var(--ink)', padding:'10px', background:'var(--gray)'}}><b style={{fontWeight:'900'}}>Q14. If α, β roots of x² −6x+4=0 …</b><div className={`${styles.line} ${styles.w65}`} style={{marginTop:'8px'}}></div><div className={`${styles.line} ${styles.w40}`}></div></div>
        <div className={styles.squares}><span className={`${styles.sq} ${styles['fill-yellow']}`}>Instructions • 3p</span><span className={`${styles.sq} ${styles['fill-green']}`}>+4 −1</span><span className={styles.sq}>OMR</span></div>
      </div>
      <div className={`${styles.block} ${styles.ai}`}>
        <div className={`${styles['ai-logo']}`}>✦</div>
        <div style={{flex:'1'}}><strong style={{fontWeight:'900'}}>PARAKH FLAT AI</strong><br /><span style={{fontSize:'11px', fontWeight:'800', opacity:'.8'}}>Parsing • 36s • solid</span></div>
        <div className={styles.bar}><i></i></div>
        <div style={{fontWeight:'900', background:'var(--yellow)', color:'var(--ink)', border:'3px solid white', padding:'6px 9px', fontSize:'11px'}}>36s</div>
      </div>
      <div className={`${styles.block} ${styles.cbt}`}>
        <div className={`${styles['cbt-top']}`}><strong style={{fontWeight:'900'}}>MOCK 01 • FLAT CBT • JEE MAIN</strong><span className={`${styles['cbt-timer']}`}>02:47:12 LEFT</span></div>
        <div style={{display:'grid', gridTemplateColumns:'1.4fr .9fr', gap:'12px'}}>
          <div>
            <div style={{display:'flex', gap:'6px', marginBottom:'10px'}}><span style={{border:'3px solid white', background:'white', color:'var(--ink)', padding:'6px 10px', fontWeight:'900', fontSize:'11px'}}>Physics</span><span style={{border:'3px solid white', padding:'6px 10px', fontWeight:'900', fontSize:'11px', opacity:'.8'}}>Chemistry</span><span style={{border:'3px solid white', padding:'6px 10px', fontWeight:'900', fontSize:'11px', opacity:'.8'}}>Maths</span></div>
            <div style={{fontWeight:'900', marginBottom:'10px'}}>Q14. α³+β³ = ?</div>
            <div style={{display:'grid', gap:'6px'}}>
              <div style={{border:'3px solid white', background:'white', color:'var(--ink)', padding:'9px', fontWeight:'800', display:'flex', gap:'8px'}}><span style={{width:'22px', height:'22px', border:'3px solid var(--ink)', display:'grid', placeItems:'center', fontSize:'11px'}}>A</span> 144</div>
              <div style={{border:'3px solid white', background:'var(--yellow)', color:'var(--ink)', padding:'9px', fontWeight:'900', display:'flex', gap:'8px'}}> <span style={{width:'22px', height:'22px', background:'var(--ink)', color:'white', display:'grid', placeItems:'center', fontSize:'11px', border:'3px solid var(--ink)'}}>B</span> 136 — Selected</div>
              <div style={{border:'3px solid white', background:'white', color:'var(--ink)', padding:'9px', fontWeight:'800', display:'flex', gap:'8px'}}><span style={{width:'22px', height:'22px', border:'3px solid var(--ink)', display:'grid', placeItems:'center'}}>C</span> 128</div>
            </div>
          </div>
          <div style={{border:'3px solid white', background:'white', color:'var(--ink)', padding:'12px'}}>
            <div style={{display:'flex', justifyContent:'space-between', fontWeight:'900', fontSize:'11px', marginBottom:'8px'}}><span>Palette</span><span style={{border:'3px solid var(--ink)', padding:'2px 6px'}}>14/90</span></div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'6px'}}>
              <span style={{height:'26px', border:'3px solid var(--ink)', background:'var(--ink)', color:'white', display:'grid', placeItems:'center', fontWeight:'900'}}>1</span><span style={{height:'26px', border:'3px solid var(--ink)', background:'var(--yellow)', display:'grid', placeItems:'center', fontWeight:'900'}}>2</span><span style={{height:'26px', border:'3px solid var(--ink)', display:'grid', placeItems:'center', fontWeight:'900'}}>3</span><span style={{height:'26px', border:'3px solid var(--ink)', display:'grid', placeItems:'center'}}>4</span><span style={{height:'26px', border:'3px solid var(--ink)', display:'grid', placeItems:'center'}}>5</span>
            </div>
            <div style={{marginTop:'10px', display:'flex', gap:'8px', fontWeight:'800', fontSize:'10px'}}><span style={{width:'10px', height:'10px', background:'var(--ink)', border:'2px solid var(--ink)', display:'inline-block'}}></span> Done <span style={{width:'10px', height:'10px', background:'var(--yellow)', border:'2px solid var(--ink)', display:'inline-block'}}></span> Marked</div>
          </div>
        </div>
      </div>
    </div>
  );
}
