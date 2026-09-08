import Link from "next/link";
import styles from "../page.module.css";

export default function FabSwitcher() {
  return (
    <details className={styles.fab}>
      <summary aria-label="Switch version">◈</summary>
      <div className={`${styles['fab-panel']}`}>
        <div className={`${styles['fab-header']}`}>SWITCH STYLE <span>19 STYLES</span></div>
        <div className={`${styles['fab-grid']}`}>
          <Link href="/" className={`${styles['fab-link']}`}>V1 SaaS <small>Premium SaaS</small></Link>
          <Link href="/neumorphic" className={`${styles['fab-link']}`}>Neumorphic <small>Soft extruded</small></Link>
          <Link href="/" className={`${styles['fab-link']} ${styles.active}`}>Skeuomorphic <small>Wood + paper</small></Link>
          <Link href="/glassmorphism" className={`${styles['fab-link']}`}>Glassmorphism <small>Frosted glass</small></Link>
          <Link href="/claymorphism" className={`${styles['fab-link']}`}>Claymorphism <small>Soft clay</small></Link>
          <Link href="/aurora" className={`${styles['fab-link']}`}>Aurora <small>Glowing gradients</small></Link>
          <Link href="/metalmorphism" className={`${styles['fab-link']}`}>Metalmorphism <small>Brushed metal</small></Link>
          <Link href="/flat" className={`${styles['fab-link']}`}>Flat <small>Zero depth</small></Link>
          <Link href="/flat-2" className={`${styles['fab-link']}`}>Flat 2.0 <small>Semi-flat</small></Link>
          <Link href="/material" className={`${styles['fab-link']}`}>Material <small>Google depth</small></Link>
          <Link href="/fluent" className={`${styles['fab-link']}`}>Fluent <small>Microsoft light</small></Link>
          <Link href="/hig" className={`${styles['fab-link']}`}>HIG <small>Apple clean</small></Link>
          <Link href="/neubrutalism" className={`${styles['fab-link']}`}>Neubrutalism <small>Raw neon</small></Link>
          <Link href="/brutalist" className={`${styles['fab-link']}`}>Brutalist <small>Anti-UX raw</small></Link>
          <Link href="/cyberpunk" className={`${styles['fab-link']}`}>Cyberpunk <small>Neon synthwave</small></Link>
          <Link href="/y2k-aero" className={`${styles['fab-link']}`}>Y2K Aero <small>Glossy bubbles</small></Link>
          <Link href="/solarpunk" className={`${styles['fab-link']}`}>Solarpunk <small>Green futurism</small></Link>
          <Link href="/bento" className={`${styles['fab-link']}`}>Bento Grid <small>Boxed layout</small></Link>
          <Link href="/minimalist" className={`${styles['fab-link']}`}>Minimalist <small>Whites + type</small></Link>
          <Link href="/dark" className={`${styles['fab-link']}`}>Dark Mode <small>OLED first</small></Link>
        </div>
      </div>
    </details>
  );
}
