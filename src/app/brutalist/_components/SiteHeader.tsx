import styles from "../page.module.css";

export default function SiteHeader() {
  return (
    <header className={`${styles['raw-head']}`}>
      <div>
        <div className={`${styles['logo-raw']}`}>PARAKH <i>RAW EDITION</i></div>
        <div style={{fontFamily:'Courier,monospace', fontSize:'10px', marginTop:'4px', letterSpacing:'.04em'}}>PDF <u>—TO—</u> CBT CONVERTER // NO TRACKERS // NO COOKIES // JUST WORKS</div>
      </div>
      <div className={`${styles['nav-raw']}`}>
        <a href="#how">HOW IT WORKS</a> |
        <a href="#cbt">CBT VIEW</a> |
        <a href="#exams">EXAMS</a> |
        <a href="#faq">FAQ</a> |
        <a href="#" style={{background:'#000', color:'#fff', textDecoration:'none', padding:'2px 6px', border:'2px outset #fff'}}>UPLOAD PDF [FREE]</a>
      </div>
      <div className={styles.tagline}>UNDER CONSTRUCTION <blink>●</blink> BUT FULLY FUNCTIONAL</div>
    </header>
  );
}
