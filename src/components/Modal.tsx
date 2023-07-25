import { MouseEventHandler, ReactNode, useState } from "react";

import axios from "axios";
import styles from "./Modal.module.css";
import textStyles from "./layout/textStyles.module.css";

import Input from "./modal/Input";
import Button from "./modal/Button";
import Strategies from "./modal/Strategies";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  closeModal: MouseEventHandler;
  post: MouseEventHandler;
  postRobot: React.FormEventHandler;
}

export default function Modal({ isOpen, children, closeModal, postRobot}: ModalProps) {
  
  const [title, setTitle] = useState("");
  const [capital, setCapital] = useState(0);
  const [strategy, setStrategy] = useState(0);
  
  let robot = {
    title: title, //buscar da caixa de texto titulo
    mode: 0, //manter em 0
    strategy_id: strategy, //buscar o id da estratégia selecionada
    initial_capital: capital, //buscar da caixa de texto de capital
    simulation: 0, //manter 0
    broker_id: 1 //manter 1
  }
  // const postRobot = async()=>{
  //   const url ="https://api.k8s.smarttbot.com/api-front-test/api/v1/";

  //   try {
  //     const response = await axios.post(url+"/robot/", robot, {headers:{Accept: "application/json"}});
  //     console.log(response);
  //     }
  //     catch(error) {
  //       console.log(error);
  //      }

  //   };

    const childToParent = (childdata: number) => {
      setStrategy(childdata);
    }

    

    

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
              <Input inputName="productName" placeholder="Nome do produto" labelText="Nome do produto" onChange={(e : React.FormEvent<HTMLInputElement>)=>{
                setTitle(e.currentTarget.value);
                console.log(title);
                }} />
              <Input inputName="initialCapital" placeholder="R$" labelText="Capital inicial do robô" onChange={(e: React.FormEvent<HTMLInputElement>)=>{
                setCapital(e.currentTarget.value)
                console.log(capital);
                }}/>
            </div>
            <Strategies childToParent={childToParent} strategiesList={strategies}/>
            <div className={styles.buttonsContainer}>
              <Button buttonText="Cancelar" buttonType="cancel" onClick={closeModal}/>
              <Button buttonText="Criar robô" buttonType="create" onClick={(e)=>{
                e.preventDefault(); 
                postRobot(robot);}}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
  return null;
}
