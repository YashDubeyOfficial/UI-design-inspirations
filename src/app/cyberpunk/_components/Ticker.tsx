import styles from "../page.module.css";

export default function Ticker() {
  return (
    <div className={styles.ticker}>
      <div className={`${styles['ticker-inner']}`}>
        <div className={`${styles['ticker-label']}`}>EXAMS_ON_GRID //</div>
        <div style={{overflow:'hidden', flex:'1'}}>
          <div className={`${styles['ticker-track']}`}>
            <span><b>JEE</b> Mains • 90Qs • 180m</span><span><b>NEET</b> UG • 200Qs</span><span><b>UPSC</b> CSE • GS+CSAT</span><span><b>GATE</b> 30 papers</span><span><b>SSC</b> CGL • 100Qs</span><span><b>CAT</b> • <b>CUET</b></span><span>STATE PCS</span><span><b>JEE</b> Mains • 90Qs • 180m</span><span><b>NEET</b> UG • 200Qs</span><span><b>UPSC</b> CSE • GS+CSAT</span><span><b>GATE</b> 30 papers</span><span><b>SSC</b> CGL • 100Qs</span><span><b>CAT</b> • <b>CUET</b></span><span>STATE PCS</span>
          </div>
        </div>
        <div style={{fontFamily:'\'JetBrains Mono\',monospace', fontSize:'10px', color:'var(--cyan)', whiteSpace:'nowrap'}}>+ ANY PDF → NEON MOCK</div>
      </div>
    </div>
  );
}
