import styles from "./Input.module.css";
import textStyles from "../layout/textStyles.module.css";

interface InputProps {
  inputName: string,
  placeholder: string,
  labelText: string,
}

export default function Input({inputName, placeholder, labelText}: InputProps) {
  return (
    <>
      <label htmlFor={inputName} className={textStyles.smallLight+" "+textStyles.label}>{labelText}</label>
      <input name={inputName} type="text" placeholder={placeholder} className={styles.input}></input>
    </>
  )
}
