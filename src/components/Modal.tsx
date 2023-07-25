import { MouseEventHandler, ReactNode, useEffect, useState } from "react";

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
  const [strategiesList, setStrategiesList] = useState([]);
  
  const robot = {
    title: title,
    mode: 0, 
    strategy_id: strategy,
    initial_capital: capital,
    simulation: 0, 
    broker_id: 1 
  }


    const childToParent = (childdata: number) => {
      setStrategy(childdata);
    }

    
  const strategies = async()=>{
    const url ="https://api.k8s.smarttbot.com/api-front-test/api/v1/";
    try {
      const response = await axios.get(url+"/strategy", {headers:{Accept: "application/json"}});
      setStrategiesList(response.data.data);
      }
      catch(error) {
        console.log(error);
       }
    };

    useEffect(()=>{
      strategies();
    },[])
    

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
                }} />
              <Input inputName="initialCapital" placeholder="R$" labelText="Capital inicial do robô" onChange={(e: React.FormEvent<HTMLInputElement>)=>{
                // @ts-expect-error
                setCapital(e.currentTarget.value)
                }}/>
            </div>
            {/* @ts-expect-error */}
            <Strategies childToParent={childToParent} strategiesList={strategiesList}/>
            <div className={styles.buttonsContainer}>
              <Button buttonText="Cancelar" buttonType="cancel" onClick={closeModal}/>
              <Button buttonText="Criar robô" buttonType="create" onClick={(e)=>{
                e.preventDefault(); 
                // @ts-expect-error
                postRobot(robot);}}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
  return null;
}
