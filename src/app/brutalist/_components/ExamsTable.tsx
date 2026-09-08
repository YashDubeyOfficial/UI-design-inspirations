import styles from "../page.module.css";
import { examRows } from "../_data/content";

export default function ExamsTable() {
  return (
    <div className={styles.section} id="exams">
      <h2>03. EXAMS SUPPORTED <span>ONE PLATFORM // EVERY PDF</span></h2>
      <p style={{fontSize:'12px'}}>If your exam has a PDF, we brutalize it into a mock. From JEE to State PCS. <a href="#">Full list</a>:</p>
      <table className={`${styles['exam-table']}`}>
        <tr><th>EXAM</th><th>DETAILS</th><th>FORMAT</th><th>TRY</th></tr>
        {examRows.map((row) => (
          row.special ? (
            <tr key={row.exam}><td style={{background:'#000', color:'#fff'}}><b style={{color:'#fff'}}>{row.exam}</b></td><td style={{background:'#000', color:'#FFE600'}}>{row.details}</td><td style={{background:'#000', color:'#fff'}}>{row.format}</td><td style={{background:'#FFE600'}}><a href="#" style={{color:'#000'}}>TRY RAW →</a></td></tr>
          ) : (
            <tr key={row.exam}><td><b>{row.exam}</b></td><td>{row.details}</td><td>{row.format}</td><td><a href="#">OPEN →</a></td></tr>
          )
        ))}
      </table>
      <div style={{marginTop:'8px', fontSize:'11px', border:'2px solid #000', padding:'6px', background:'#E5E5E5'}}>NOTE: Table uses &lt;table border=&quot;1&quot;&gt; intentionally. No CSS grid polishing. Works in Lynx too.</div>
    </div>
  );
}
