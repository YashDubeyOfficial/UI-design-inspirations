import styles from "../page.module.css";

export default function MarqueeBar() {
  return (
    <div className={`${styles['marquee-bar']}`}>
      <marquee scrollamount="6" behavior="scroll">*** DROP ANY PDF → AI READS IT IN 40 SECONDS → REAL NTA / TCS iON CBT APPEARS — JEE • NEET • UPSC • GATE • SSC • BANKING • CUET • STATE EXAMS — PYQs SINCE 2012 — NO TYPING — NO MANUAL SETUP — <span>TRY NOW — IT&apos;S FREE</span> ***</marquee>
    </div>
  );
}
