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
      id: 1,
      name: "Raptor"
  },
  {
      id: 2,
      name: "Tamgram"
  },
  {
      id: 3,
      name: "Hórus"
  },
  {
      id: 4,
      name: "Pontos Pivot"
  },
  {
      id: 5,
      name: "Orion"
  },
  {
      id: 6,
      name: "Futuro"
  },
  {
      id: 7,
      name: "Gauss Contro"
  }
  ]
  if (isOpen) {
    return (
      <div className={styles.bg}>
        <div className={styles.modal}>
          <div className={styles.container}>
            <p className={textStyles.regular}>Adicionar novo Robô</p>
            {children}
          </div>
          <div className={styles.titleContainer}>
            <p className={textStyles.largeHeavy}>Vamos criar seu robô</p>
            <p className={textStyles.smallLight}>Preencha as informações abaixo:</p>
          </div>
          <form className={styles.form}>
            <div className={styles.inputsContainer}>
              <Input inputName="productName" placeholder="Nome do produto" labelText="Nome do produto" />
              <Input inputName="initialCapital" placeholder="R$" labelText="Capital inicial do robô" />
            </div>
            <Strategies strategiesList={strategies} />
            <div className={styles.buttonsContainer}>
              <Button buttonText="Cancelar" buttonType="cancel"/>
              <Button buttonText="Criar robô" buttonType="create"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
  return null;
}
