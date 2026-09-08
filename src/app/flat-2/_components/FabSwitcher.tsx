import Link from "next/link";
import styles from "../page.module.css";

export default function FabSwitcher() {
  return (
    <details className={styles.fab}><summary>◈</summary><div className={`${styles['fab-panel']}`}><div className={`${styles['fab-header']}`}>SWITCH STYLE <span>19 STYLES</span></div><div className={`${styles['fab-grid']}`}>
      <Link href="/" className={`${styles['fab-link']}`}>V1 SaaS</Link>
      <Link href="/neumorphic" className={`${styles['fab-link']}`}>Neumorphic</Link>
      <Link href="/skeuomorphic" className={`${styles['fab-link']}`}>Skeuomorphic</Link>
      <Link href="/glassmorphism" className={`${styles['fab-link']}`}>Glassmorphism</Link>
      <Link href="/claymorphism" className={`${styles['fab-link']}`}>Claymorphism</Link>
      <Link href="/aurora" className={`${styles['fab-link']}`}>Aurora</Link>
      <Link href="/metalmorphism" className={`${styles['fab-link']}`}>Metalmorphism</Link>
      <Link href="/flat" className={`${styles['fab-link']}`}>Flat</Link>
      <Link href="/" className={`${styles['fab-link']} ${styles.active}`}>Flat 2.0</Link>
      <Link href="/material" className={`${styles['fab-link']}`}>Material</Link>
      <Link href="/fluent" className={`${styles['fab-link']}`}>Fluent</Link>
      <Link href="/hig" className={`${styles['fab-link']}`}>HIG</Link>
      <Link href="/neubrutalism" className={`${styles['fab-link']}`}>Neubrutalism</Link>
      <Link href="/brutalist" className={`${styles['fab-link']}`}>Brutalist</Link>
      <Link href="/cyberpunk" className={`${styles['fab-link']}`}>Cyberpunk</Link>
      <Link href="/y2k-aero" className={`${styles['fab-link']}`}>Y2K Aero</Link>
      <Link href="/solarpunk" className={`${styles['fab-link']}`}>Solarpunk</Link>
      <Link href="/bento" className={`${styles['fab-link']}`}>Bento Grid</Link>
      <Link href="/minimalist" className={`${styles['fab-link']}`}>Minimalist</Link>
      <Link href="/dark" className={`${styles['fab-link']}`}>Dark Mode</Link>
    </div></div></details>
  );
}
