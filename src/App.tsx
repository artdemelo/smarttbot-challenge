import { useEffect, useState } from "react";

import "./App.css";

import axios from "axios";

import Robot from "./components/Robot.tsx";
import Card from "./components/layout/Card.tsx";
import Modal from "./components/Modal.tsx";
import RobotsContainer from "./components/robot/RobotsContainer.tsx";
import CloseButton from "./components/modal/CloseButton.tsx";
import Breadcrumb from "./components/Breadcrumb.tsx";
import Overview from "./components/Overview.tsx";
import NewRobot from "./components/NewRobot.tsx";


export default function App() {
  const [toggleModal, setToggleModal] = useState(false);
  const [roboto, setRoboto] = useState([]);
  const [robotPaper, setRobotPaper] = useState([]);
  const [overviewValue, setOverviewValue] = useState([]);
    

  const url ="https://api.k8s.smarttbot.com/api-front-test/api/v1/";
  const getRobots = async()=>{
      try {
        const response = await axios.get(url+"/robot", {headers:{Accept: "application/json", limit: 10,}});
          setRoboto(response.data.data);
        }
        catch(error) {
          console.log(error);
        }
      }
  
  const getRobotPaper = async()=>{
    try {
      const response = await axios.get(url+"/robot/paper", {headers:{Accept: "application/json"}});

        setRobotPaper(response.data.data);
      }
      catch(error) {
        console.log(error);
       }
    };
  
  const getOverview = async()=>{
    try {
      const response = await axios.get(url+"/robot/overview", {headers:{Accept: "application/json"}});
      const data = response.data.data;
        setOverviewValue(data);
        console.log("oi",data);
      }
      catch(error) {
        console.log(error);
       }
    };
  
  
  useEffect(()=>{  
    getRobots();
    getRobotPaper();
    getOverview();
  },[]);


  return (
    <>
      <Modal isOpen={toggleModal}>
        <CloseButton visible={toggleModal} onClick={() => {setToggleModal(false);}}/>
      </Modal>
          <div className="wrapper">
            <Breadcrumb />
            <Overview overview={overviewValue} />
            <Card heightValue="118px" onClick={() => {roboto.length < 12 ? setToggleModal(true) : alert("Você não possui mais robôs disponíveis.");}}>
              <NewRobot robotQuant={roboto.length} />
            </Card>
            <RobotsContainer>
              {roboto && roboto.length > 0 ?
                roboto.map((robot) => (
                  <Robot robotValues={robot} robotPaper={robotPaper} />
                  )):"Carregando..."}
            </RobotsContainer>
        </div>
    </>
  );
}
