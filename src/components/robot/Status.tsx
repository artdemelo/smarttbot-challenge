import styles from "./Status.module.css"
import textStyles from "../layout/textStyles.module.css"


interface StatusProps {
  isOn: boolean;
}


export default function Status({isOn}: StatusProps) {
  const active = isOn ? styles.active : undefined;
    return (
      <div className={styles.container}>
        <div className={styles.circle +" "+active}></div>
        <span className={textStyles.mediumLight}>{isOn ? "Em execução" : "Parado"}</span>
      </div>
    )
}
