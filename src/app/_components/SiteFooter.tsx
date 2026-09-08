import styles from "../page.module.css";

export default function SiteFooter() {
  return (
    <footer>
      <div><strong>PARAKH</strong> © 2026 • Crafted for Indian aspirants • <span style={{textDecoration:'underline'}}>Privacy</span> • <span style={{textDecoration:'underline'}}>Terms</span> • Support: hello@parakh.ai</div>
      <div className={`${styles['foot-links']}`}><span>Made in India 🇮🇳</span><span>● System live</span></div>
    </footer>
  );
}
