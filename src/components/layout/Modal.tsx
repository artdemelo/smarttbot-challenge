import { ReactNode } from "react";
import styles from "./Modal.module.css";
import textStyles from "./textStyles.module.css";
import Input from "../form/Input";
import Button from "../form/Button";
import Strategies from "../form/Strategies";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}

export default function Modal({ isOpen, children }: ModalProps) {
  const strategies = [
    {
      title: "Tangram",
    },
    {
      title: "Price Action",
    }
  ]
  if (isOpen) {
    return (
      <div className={styles.bg}>
        <div className={styles.modal}>Modal{children}
          <form className={styles.form}>
            <Input inputName="productName" placeholder="Nome do produto" labelText="Nome do produto" />
            <Input inputName="initialCapital" placeholder="R$" labelText="Capital inicial do robô" />
            <label htmlFor="strategies" className={textStyles.smallLight+" "+textStyles.label}>Selecione uma das estratégias abaixo</label>
            <Strategies strategiesList={strategies} />
            <Button buttonText="Cancelar" buttonType="cancel"/>
            <Button buttonText="Criar robô" buttonType="create"/>
          </form>
        </div>
      </div>
    );
  }
  return null;
}
