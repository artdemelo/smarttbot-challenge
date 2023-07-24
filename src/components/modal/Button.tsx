import styles from "./Button.module.css";

interface ButtonProps {
  buttonText: string,
  buttonType: string,
}

export default function Button({buttonText, buttonType}: ButtonProps) {
  const type = buttonType === "cancel" ? styles.btnCancel : styles.btnCreate
  return (
    <button className={styles.btn + " " + type}>{buttonText}</button>
  )
}
