import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={`${styles['final-card']}`}>
        <div className={`${styles['final-copy']}`}>
          <h2>Ready to <em>puff your PDF</em> into a mock?</h2>
          <p>40,000 aspirants already squish their PYQs every evening. Three mocks free — warm, inflated, exam-accurate. Come knead!</p>
          <div className={`${styles['final-actions']}`}>
            <a href="#try" className={`${styles['btn-clay']}`} style={{background:'var(--ink)', color:'white'}}>Upload PDF — puff free →</a>
            <a href="#how" className={`${styles['btn-clay']}`} style={{background:'white', color:'var(--ink)'}}>Watch 30s puff</a>
          </div>
          <div style={{marginTop:'12px', display:'flex', gap:'12px', fontSize:'12px', fontWeight:'700', flexWrap:'wrap', opacity:'.7'}}><span>♡ No card</span><span>✓ Scanned OK</span><span>✓ ~38s to puff</span></div>
        </div>
        <div className={`${styles['final-visual']}`}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px'}}><strong style={{fontFamily:'\'Nunito\',sans-serif', fontSize:'11px', letterSpacing:'.06em'}}>YOUR PUFF LIBRARY</strong><span style={{fontSize:'11px', fontWeight:'900', background:'var(--ink)', color:'#FFDCC3', padding:'5px 10px', borderRadius:'999px', border:'2px solid white'}}>3/3 FREE ♡</span></div>
          <div style={{padding:'12px', borderRadius:'16px', background:'linear-gradient(135deg, #FFF4E8, #FFDCC3)', border:'3px solid white', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'12px', boxShadow:'4px 4px 10px rgba(166,120,70,.08)'}}>
            <div><strong style={{fontFamily:'\'Nunito\',sans-serif', fontSize:'13px'}}>UPSC GS1 2022 — Mock 01</strong><br /><span style={{fontSize:'11px', color:'var(--muted)', fontWeight:'700'}}>Score 82/200 • puffed!</span></div><span style={{fontWeight:'900', background:'var(--ink)', color:'white', padding:'6px 10px', borderRadius:'999px', border:'2px solid white'}}>Analysis →</span>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'8px', textAlign:'center'}}>
            <div style={{padding:'12px', borderRadius:'16px', background:'linear-gradient(135deg,#FFF4E8,#FFE0C8)', border:'3px solid white', boxShadow:'4px 4px 10px rgba(166,120,70,.06)'}}><b style={{fontFamily:'\'Nunito\',sans-serif', fontSize:'20px'}}>37</b><br /><span style={{fontSize:'11px', fontWeight:'800', color:'var(--muted)'}}>Puffs</span></div>
            <div style={{padding:'12px', borderRadius:'16px', background:'linear-gradient(135deg,#F0FFF0,#D6F5D6)', border:'3px solid white', boxShadow:'4px 4px 10px rgba(166,120,70,.06)'}}><b style={{fontFamily:'\'Nunito\',sans-serif', fontSize:'20px'}}>214</b><br /><span style={{fontSize:'11px', fontWeight:'800', color:'var(--muted)'}}>Avg</span></div>
            <div style={{padding:'12px', borderRadius:'16px', background:'linear-gradient(135deg,#F5F0FF,#E8E0FF)', border:'3px solid white', boxShadow:'4px 4px 10px rgba(166,120,70,.06)'}}><b style={{fontFamily:'\'Nunito\',sans-serif', fontSize:'20px'}}>71%</b><br /><span style={{fontSize:'11px', fontWeight:'800', color:'var(--muted)'}}>Acc.</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
