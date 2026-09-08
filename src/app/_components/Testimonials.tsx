import styles from "../page.module.css";
import { testimonials } from "../_data/content";

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={`${styles['section-head']}`}>
        <div className={styles.kicker}><i></i> LOVED BY SERIOUS ASPIRANTS</div>
        <h2>Make every mock<br /><em>count like the final.</em></h2>
      </div>
      <div className={styles.testis}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.testi}>
            <div className={`${styles['testi-top']}`}><div className={styles.avatar} style={t.avatarStyle}>{t.avatar}</div><div><strong>{t.name}</strong><br /><span>{t.detail}</span></div><span style={{marginLeft:'auto', color:'#FFB020', fontSize:'12px'}}>★★★★★</span></div>
            <p>{t.quote}</p>
            <span className={`${styles['exam-tag']}`}>{t.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
