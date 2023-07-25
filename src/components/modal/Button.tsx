import { MouseEventHandler} from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  buttonText: string,
  buttonType: string,
  onClick: MouseEventHandler,
}

export default function Button({buttonText, buttonType, onClick}: ButtonProps) {

if (buttonType === "cancel"){
  return (
    <button className={styles.btn+" "+styles.btnCancel} onClick={onClick} type="reset">{buttonText}</button>
  )
}

return (
  <button className={styles.btn+" "+styles.btnCreate} onClick={onClick} type="submit">{buttonText}</button>
)
}
