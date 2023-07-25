import styles from "./Input.module.css";
import textStyles from "../layout/textStyles.module.css";


interface InputProps {
  inputName: string,
  placeholder: string,
  labelText: string,
  onChange: React.FormEventHandler,
}

export default function Input({inputName, placeholder, labelText, onChange}: InputProps) {
  return (
    <>
      <div>
        <label htmlFor={inputName} className={textStyles.smallLight+" "+textStyles.label}>{labelText}</label>
        <input name={inputName} type="text" placeholder={placeholder} className={styles.input} onChange={onChange} required></input>
      </div>
    </>
  )
}
