import "./App.css";
import { useState } from "react";
import Robot from "./components/Robot.tsx";
import Card from "./components/layout/Card.tsx";
import Modal from "./components/layout/Modal.tsx";
import RobotsContainer from "./components/layout/RobotsContainer.tsx";
import CloseButton from "./components/layout/CloseButton.tsx";
import Breadcrumb from "./components/layout/Breadcrumb.tsx";
import Overview from "./components/layout/Overview.tsx";
import NewRobot from "./components/layout/NewRobot.tsx";

export default function App() {
  const [toggleModal, setToggleModal] = useState(false);

  // const robotPapers = [
  //   {
  //     robot_id: 1,
  //     paper: "WINBG20",
  //     position: 5,
  //     type: 0,
  //     paper_value: 45.55,
  //     profit: "RAIL3",
  //     created_at: "2020-10-29 15:53:45"      
  //   },
  //   {
  //     robot_id: 2,
  //     paper: "ABEV3",
  //     position: 5,
  //     type: 0,
  //     paper_value: 45.55,
  //     profit: "RAIL3",
  //     created_at: "2020-10-29 15:53:45"      
  //   },
  //   {
  //     robot_id: 3,
  //     paper: "BOVA11",
  //     position: 5,
  //     type: 0,
  //     paper_value: 45.55,
  //     profit: "RAIL3",
  //     created_at: "2020-10-29 15:53:45"      
  //   },
  // ];

  const robots = [
    { 
      title: "Título do Robô",
      running: 0, 
      updated_at:"2020-10-29 15:53:45",
      mode: 0,
      simulation: "Otimista",
      strategy: "RenkoBot",
      initial_capital: 65000,
      number_trades: 29,
      daily_balance: 61.75,
      created_at: "2020-10-29 15:53:45",
      last_paper: 1,
    },
    { 
      title: "Título do Robô",
      running: 0, 
      updated_at:"2020-10-29 15:53:45",
      mode: 0,
      simulation: "Otimista",
      strategy: "RenkoBot",
      initial_capital: 65000,
      number_trades: 29,
      daily_balance: 61.75,
      created_at: "2020-10-29 15:53:45",
      last_paper: 1,
    },
    { 
      title: "Título do Robô",
      running: 0, 
      updated_at:"2020-10-29 15:53:45",
      mode: 0,
      simulation: "Otimista",
      strategy: "RenkoBot",
      initial_capital: 65000,
      number_trades: 29,
      daily_balance: 61.75,
      created_at: "2020-10-29 15:53:45",
      last_paper: 1,
    },
    { 
      title: "Título do Robô",
      running: 0, 
      updated_at:"2020-10-29 15:53:45",
      mode: 0,
      simulation: "Otimista",
      strategy: "RenkoBot",
      initial_capital: 65000,
      number_trades: 29,
      daily_balance: 61.75,
      created_at: "2020-10-29 15:53:45",
      last_paper: 1,
    },
    { 
      title: "Título do Robô",
      running: 0, 
      updated_at:"2020-10-29 15:53:45",
      mode: 0,
      simulation: "Otimista",
      strategy: "RenkoBot",
      initial_capital: 65000,
      number_trades: 29,
      daily_balance: 61.75,
      created_at: "2020-10-29 15:53:45",
      last_paper: 1,
    },
    { 
      title: "Título do Robô",
      running: 1, 
      updated_at:"2020-10-29 15:53:45",
      mode: 0,
      simulation: "Otimista",
      strategy: "RenkoBot",
      initial_capital: 65000,
      number_trades: 29,
      daily_balance: 61.75,
      created_at: "2020-10-29 15:53:45",
      last_paper: 1,
    },
    { 
      title: "Título do Robô",
      running: 0, 
      updated_at:"2020-10-29 15:53:45",
      mode: 0,
      simulation: "Otimista",
      strategy: "RenkoBot",
      initial_capital: 65000,
      number_trades: 29,
      daily_balance: 61.75,
      created_at: "2020-10-29 15:53:45",
      last_paper: 1,
    },
    { 
      title: "Título do Robô",
      running: 1, 
      updated_at:"2020-10-29 15:53:45",
      mode: 0,
      simulation: "Otimista",
      strategy: "RenkoBot",
      initial_capital: 65000,
      number_trades: 29,
      daily_balance: 61.75,
      created_at: "2020-10-29 15:53:45",
      last_paper: 1,
    },
    { 
      title: "Título do Robô",
      running: 0, 
      updated_at:"2020-10-29 15:53:45",
      mode: 0,
      simulation: "Otimista",
      strategy: "RenkoBot",
      initial_capital: 65000,
      number_trades: 29,
      daily_balance: 61.75,
      created_at: "2020-10-29 15:53:45",
      last_paper: 1,
    },
    { 
      title: "Título do Robô",
      running: 0, 
      updated_at:"2020-10-29 15:53:45",
      mode: 0,
      simulation: "Otimista",
      strategy: "RenkoBot",
      initial_capital: 65000,
      number_trades: 29,
      daily_balance: 61.75,
      created_at: "2020-10-29 15:53:45",
      last_paper: 1,
    },

  ];

  return (
    <>
      <Modal isOpen={toggleModal}>
      <CloseButton visible={toggleModal} onClick={() => {setToggleModal(false);}}>X</CloseButton>
      </Modal>
      <Card heightValue="65px">
        <Breadcrumb />
      </Card>
      <Card heightValue="252px">
        <Overview />
      </Card>
      <Card heightValue="118px" onClick={() => {setToggleModal(true);}}>
        <NewRobot robotQuant={robots.length} />
      </Card>
      <RobotsContainer>
        {robots.length > 0 &&
          robots.map((robot) => (
            <Robot robotValues={robot} />
          ))}
      </RobotsContainer>
    </>
  );
}
