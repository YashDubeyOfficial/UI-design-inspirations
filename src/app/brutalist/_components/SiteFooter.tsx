import Link from "next/link";
import styles from "../page.module.css";

export default function SiteFooter() {
  return (
    <>
      <footer className={`${styles['raw-foot']}`}>
        <div><b style={{background:'#fff', color:'#000', padding:'1px 4px'}}>PARAKH BRUTALIST</b> © 2026 • Built for Indian aspirants • <a href="#">Privacy (one line)</a> • <a href="#">Terms</a> • hello@parakh.ai</div>
        <div>MADE IN INDIA 🇮🇳 • <blink>● LIVE</blink> • <a href="#" style={{color:'#FFE600'}}>VIEW SOURCE</a></div>
      </footer>
      <div style={{textAlign:'center', fontSize:'10px', padding:'6px', letterSpacing:'.06em'}}>THIS PAGE INTENTIONALLY UNPOLISHED — CONTRAST WITH <Link href="/neubrutalism">NEUBRUTALISM (POLISHED POP)</Link> • NO TRACKERS • NO ANIMATIONS (EXCEPT BLINK) • 14KB HTML</div>
    </>
  );
}
