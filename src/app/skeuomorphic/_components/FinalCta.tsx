import styles from "../page.module.css";

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className={`${styles['final-card']}`}>
        <div>
          <h2 style={{fontFamily:'\'Crimson Pro\',serif', fontSize:'36px', lineHeight:'.9', marginBottom:'8px'}}>Ready to place<br /><em style={{color:'#FFD88A', fontWeight:'400'}}>your paper on the desk?</em></h2>
          <p style={{color:'#D9C7A0', fontSize:'13px', marginBottom:'12px'}}>Join 40k aspirants who practice with real desk pressure. 3 free mocks — no card.</p>
          <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}><a href="#" className={`${styles['btn-brass']}`}>Upload PDF — Free →</a><a href="#" className={`${styles['btn-brass']} ${styles['btn-dark']}`}>Watch 30s demo</a></div>
        </div>
        <div className={`${styles['final-visual']}`}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px'}}><strong style={{fontSize:'11px', letterSpacing:'.06em'}}>YOUR LEDGER</strong><span style={{fontSize:'11px', background:'linear-gradient(180deg,#FFD88A,#C9A86A)', padding:'4px 8px', borderRadius:'999px', fontWeight:'800', border:'1px solid #8C6A2E'}}>3/3 FREE</span></div>
          <div style={{padding:'10px', borderRadius:'10px', background:'white', border:'1px solid #E8D9B0', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px'}}><div><strong style={{fontSize:'13px'}}>JEE Main 2023</strong><br /><span style={{fontSize:'11px', color:'#7A6A54'}}>Score 214/360</span></div><span style={{fontSize:'11px', background:'#1A1208', color:'#FFD88A', padding:'5px 9px', borderRadius:'999px'}}>Analysis →</span></div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'8px', textAlign:'center'}}><div style={{padding:'10px', borderRadius:'10px', background:'linear-gradient(180deg, white, #FFFBEB)', border:'1px solid #E8D9B0'}}><b style={{fontSize:'18px'}}>42</b><br /><span style={{fontSize:'11px', color:'#7A6A54'}}>Mocks</span></div><div style={{padding:'10px', borderRadius:'10px', background:'linear-gradient(180deg, white, #FFFBEB)', border:'1px solid #E8D9B0'}}><b style={{fontSize:'18px'}}>214</b><br /><span style={{fontSize:'11px', color:'#7A6A54'}}>Avg</span></div><div style={{padding:'10px', borderRadius:'10px', background:'linear-gradient(180deg, white, #FFFBEB)', border:'1px solid #E8D9B0'}}><b style={{fontSize:'18px'}}>68%</b><br /><span style={{fontSize:'11px', color:'#7A6A54'}}>Acc.</span></div></div>
        </div>
      </div>
    </section>
  );
}
