import styles from "../page.module.css";
import { compareNew, compareOld } from "../_data/content";

export default function Compare() {
  return (
    <div className={styles.compare}>
      <div className={`${styles.cmp} ${styles.old}`}>
        <h4>❌ Cluttered tray</h4>
        <ul>
          {compareOld.map((item) => (
            <li key={item.title}><i>✕</i><span><b>{item.title}</b> {item.text}</span></li>
          ))}
        </ul>
      </div>
      <div className={`${styles.cmp} ${styles.new}`}>
        <h4>✦ Bento perfect</h4>
        <ul>
          {compareNew.map((item) => (
            <li key={item.title}><i>✓</i><span><b>{item.title}</b> {item.text}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
