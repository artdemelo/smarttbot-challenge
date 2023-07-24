import styles from "./Paper.module.css";
import textStyles from "../layout/textStyles.module.css";

interface PaperProps {
  name: string,
  transactions: number,
}

export default function Paper({name, transactions}: PaperProps) {
  console.log("transactions", transactions);
  return (
    <div className={styles.container}>
      <div className={styles.tag+" "+textStyles.smallHeavy}>{name}</div>
      <div className={styles.dashedLine}></div>
      <div className={styles.text}><p className={textStyles.smallLighterVariation}><span className={textStyles.smallHeavyDark}>{transactions}</span> transações</p></div>
    </div>
  )
}