import { Fragment } from "react";
import styles from "../page.module.css";
import { faqs } from "../_data/content";

export default function Faq() {
  return (
    <div className={styles.section} id="faq">
      <h2>04. FAQ <span>READ BEFORE UPLODING</span></h2>
      <div style={{border:'2px solid #000', padding:'8px', marginBottom:'8px', background:'#E5E5E5'}}>
        {faqs.map((f, i) => (
          <Fragment key={f.q}>
            <div style={{fontWeight:'900', fontSize:'13px'}}>{f.q}</div>
            <div style={{fontSize:'12px', marginLeft:'14px'}}>{f.a}{f.linkText ? (<> <a href="#">{f.linkText}</a></>) : null}</div>
            {i < faqs.length - 1 ? <hr className={styles.thin} /> : null}
          </Fragment>
        ))}
      </div>
      <div style={{textAlign:'center', border:'3px double #000', padding:'10px', background:'#FFE600'}}>
        <div style={{fontFamily:'Times New Roman,serif', fontSize:'20px', fontWeight:'900'}}>READY TO TURN YOUR PDF INTO A MOCK?</div>
        <div style={{fontSize:'12px', margin:'6px 0'}}>Join 40k aspirants. No signup needed to preview.</div>
        <a href="#" className={`${styles['btn-raw']}`} style={{fontSize:'14px'}}>UPLOAD PDF — IT&apos;S FREE →</a>
        <span style={{fontSize:'11px', marginLeft:'8px'}}><a href="#">WATCH 30s DEMO</a></span>
      </div>
    </div>
  );
}
