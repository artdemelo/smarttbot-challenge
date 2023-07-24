import { MouseEventHandler, ReactNode } from "react";
import styles from "./CloseButton.module.css"
import close from "../../assets/close.svg"

interface CloseButtonProps {
  visible?: boolean;
  children?: ReactNode;
  onClick: MouseEventHandler;
}
export default function CloseButton({
  onClick,
  visible = true,
}: CloseButtonProps) {
  if (visible) {
    return (
      <button className={styles.btn} onClick={onClick}>
        <img src={close} alt="close icon" />
      </button>
      );
  }
  return null;
}
