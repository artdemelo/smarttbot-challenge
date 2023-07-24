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


  const robots = [
    { 
      id: 12847197,
      title: "Orci In Consequat Consulting",
      running: 0, 
      updated_at:"2020-10-29 15:53:45",
      mode: 0,
      simulation: 0,
      stock_codes: "WING20",
      strategy: "RenkoBot",
      initial_capital: 65000,
      number_trades: 29,
      daily_balance: 61.75,
      created_at: "2020-10-29 15:53:45",
      last_paper: {
        robot_id: 1648753,
        paper: "WINBG20",
        position: 17,
        type: 1,
        paper_value: 84208.15,
        profit: -5.75,
        created_at: "2020-08-28 13:40:52",
        id: 113001,
        robot: {
            title: "Eu Metus LLC"
        }
      },
      movimentations: [],
    },
    { 
      id: 12847197,
      title: "Facilisis Eget Ipsum LLP",
      running: 0, 
      updated_at:"2020-10-29 15:53:45",
      mode: 0,
      simulation: 0,
      stock_codes: "WING20",
      strategy: "RenkoBot",
      initial_capital: 65000,
      number_trades: 29,
      daily_balance: 61.75,
      created_at: "2020-10-29 15:53:45",
      last_paper: {
        robot_id: 1648753,
        paper: "WINBG20",
        position: 17,
        type: 1,
        paper_value: 84208.15,
        profit: -5.75,
        created_at: "2020-08-28 13:40:52",
        id: 113001,
        robot: {
            title: "Eu Metus LLC"
        }
      },
      movimentations: [],
    },
    { 
      id: 12847197,
      title: "Eu Metus LLC",
      running: 0, 
      updated_at:"2020-10-29 15:53:45",
      mode: 0,
      simulation: 0,
      stock_codes: "PETR4",
      strategy: "RenkoBot",
      initial_capital: 65000,
      number_trades: 29,
      daily_balance: 61.75,
      created_at: "2020-10-29 15:53:45",
      last_paper: {
        robot_id: 1648753,
        paper: "WINBG20",
        position: 17,
        type: 0,
        paper_value: 84208.15,
        profit: 5.75,
        created_at: "2020-08-28 13:40:52",
        id: 113001,
        robot: {
            title: "Eu Metus LLC"
        }
      },
      movimentations: [],
    },
    { 
      id: 12847197,
      title: "Sorendo do Robô",
      running: 0, 
      updated_at:"2020-10-29 15:53:45",
      mode: 0,
      simulation: 0,
      stock_codes: "ABEV",
      strategy: "Tamgram",
      initial_capital: 65000,
      number_trades: 102,
      daily_balance: 61.75,
      created_at: "2020-10-29 15:53:45",
      last_paper: {
        robot_id: 1648753,
        paper: "WINBG20",
        position: 17,
        type: 1,
        paper_value: 84208.15,
        profit: -5.75,
        created_at: "2020-08-28 13:40:52",
        id: 113001,
        robot: {
            title: "Eu Metus LLC"
        }
      },
      movimentations: [],
    },
    { 
      id: 12847197,
      title: "Azul Robô",
      running: 0, 
      updated_at:"2020-10-29 15:53:45",
      mode: 0,
      simulation: 1,
      stock_codes: "BBAS3",
      strategy: "Price action",
      initial_capital: 65000,
      number_trades: 45,
      daily_balance: 61.75,
      created_at: "2020-10-29 15:53:45",
      last_paper: {
        robot_id: 1648753,
        paper: "WINBG20",
        position: 17,
        type: 1,
        paper_value: 84208.15,
        profit: 5.75,
        created_at: "2020-08-28 13:40:52",
        id: 113001,
        robot: {
            title: "Eu Metus LLC"
        }
      },
      movimentations: [],
    },
    { 
      id: 12847197,
      title: "Optimus Prime ft. Bumblebee",
      running: 0, 
      updated_at:"2020-10-29 15:53:45",
      mode: 0,
      simulation: 0,
      stock_codes: "WING20",
      strategy: "Raptor",
      initial_capital: 65000,
      number_trades: 29,
      daily_balance: 61.75,
      created_at: "2020-10-29 15:53:45",
      last_paper: {
        robot_id: 1648753,
        paper: "WINBG20",
        position: 17,
        type: 0,
        paper_value: 84208.15,
        profit: 5.75,
        created_at: "2020-08-28 13:40:52",
        id: 113001,
        robot: {
            title: "Eu Metus LLC"
        }
      },
      movimentations: [],
    },
    { 
      id: 12847197,
      title: "Optimus Prime ft. Bumblebee",
      running: 1, 
      updated_at:"2020-10-29 15:53:45",
      mode: 0,
      simulation: 1,
      stock_codes: "BBAS3",
      strategy: "RenkoBot",
      initial_capital: 65000,
      number_trades: 29,
      daily_balance: -61.75,
      created_at: "2020-10-29 15:53:45",
      last_paper: {
        robot_id: 1648753,
        paper: "WINBG20",
        position: 17,
        type: 1,
        paper_value: 84208.15,
        profit: -5.75,
        created_at: "2020-08-28 13:40:52",
        id: 113001,
        robot: {
            title: "Eu Metus LLC"
        }
      },
      movimentations: [],
    },
    { 
      id: 12847197,
      title: "Optimus Prime ft. Bumblebee",
      running: 0, 
      updated_at:"2020-10-29 15:53:45",
      mode: 0,
      simulation: 1,
      stock_codes: "MGLU3",
      strategy: "RenkoBot",
      initial_capital: 65000,
      number_trades: 29,
      daily_balance: 61.75,
      created_at: "2020-10-29 15:53:45",
      last_paper: {
        robot_id: 1648753,
        paper: "WINBG20",
        position: 17,
        type: 1,
        paper_value: 84208.15,
        profit: 5.75,
        created_at: "2020-08-28 13:40:52",
        id: 113001,
        robot: {
            title: "Eu Metus LLC"
        }
      },
      movimentations: [],
    },
    { 
      id: 12847197,
      title: "Optimus Prime ft. Bumblebee",
      running: 1, 
      updated_at:"2020-10-29 15:53:45",
      mode: 0,
      simulation: 0,
      stock_codes: "WING20",
      strategy: "RenkoBot",
      initial_capital: 65000,
      number_trades: 29,
      daily_balance: 61.75,
      created_at: "2020-10-29 15:53:45",
      last_paper: {
        robot_id: 1648753,
        paper: "WINBG20",
        position: 17,
        type: 1,
        paper_value: 84208.15,
        profit: 5.75,
        created_at: "2020-08-28 13:40:52",
        id: 113001,
        robot: {
            title: "Eu Metus LLC"
        }
      },
      movimentations: [],
    },
    { 
      id: 12847197,
      title: "Optimus Prime ft. Bumblebee",
      running: 0, 
      updated_at:"2020-10-29 15:53:45",
      mode: 0,
      simulation: 0,
      stock_codes: "PETR4",
      strategy: "RenkoBot",
      initial_capital: 65000,
      number_trades: 29,
      daily_balance: 61.75,
      created_at: "2020-10-29 15:53:45",
      last_paper: {
        robot_id: 1648753,
        paper: "WINBG20",
        position: 17,
        type: 1,
        paper_value: 84208.15,
        profit: 5.75,
        created_at: "2020-08-28 13:40:52",
        id: 113001,
        robot: {
            title: "Eu Metus LLC"
        }
      },
      movimentations: [],
    },
    { 
      id: 12847197,
      title: "Optimus Prime ft. Bumblebee",
      running: 1, 
      updated_at:"2020-10-29 15:53:45",
      mode: 0,
      simulation: 0,
      stock_codes: "WING20",
      strategy: "RenkoBot",
      initial_capital: 65000,
      number_trades: 29,
      daily_balance: 61.75,
      created_at: "2020-10-29 15:53:45",
      last_paper: {
        robot_id: 1648753,
        paper: "WINBG20",
        position: 17,
        type: 1,
        paper_value: 84208.15,
        profit: 5.75,
        created_at: "2020-08-28 13:40:52",
        id: 113001,
        robot: {
            title: "Eu Metus LLC"
        }
      },
      movimentations: [],
    },

    { 
      id: 12847197,
      title: "Optimus Prime ft. Bumblebee",
      running: 0, 
      updated_at:"2020-10-29 15:53:45",
      mode: 0,
      simulation: 0,
      stock_codes: "BEEF3",
      strategy: "RenkoBot",
      initial_capital: 65000,
      number_trades: 29,
      daily_balance: 61.75,
      created_at: "2020-10-29 15:53:45",
      last_paper: {
        robot_id: 1648753,
        paper: "WINBG20",
        position: 17,
        type: 1,
        paper_value: 84208.15,
        profit: 5.75,
        created_at: "2020-08-28 13:40:52",
        id: 113001,
        robot: {
            title: "Eu Metus LLC"
        }
      },
      movimentations: [{
        date: "2023-07-24 13:40:52",
        value: 55.32
      },
      {
        date: "2023-07-24 13:40:52",
        value: 55.32
      },
      {
        date: "2023-07-24 13:40:52",
        value: 55.32
      },
      {
        date: "2023-07-24 13:40:52",
        value: 55.32
      },
    ],
    },
  ];

  const papers = [
    {
      name: "WING20",
      transactions: 331,
    },
    {
        name: "ABEV",
        transactions: 455,
    },
    {
        name: "PETR4",
        transactions: 214,
    },
    {
        name: "MGLU3",
        transactions: 200,
    },
    {
        name: "BBAS3",
        transactions: 175,
    },
    {
        name: "BEEF3",
        transactions: 150,
    }
  ];

  const robotPapers = [
    {
        robot_id: 12847197,
        paper: "WINBG20",
        position: 95,
        type: 0,
        paper_value: 59220.52,
        profit: -28.93,
        created_at: "2020-09-15 22:18:39",
        id: 167501,
        robot: {
            title: "Consectetuer Cursus Et PC"
        }
    },
    {
      robot_id: 12847197,
      paper: "WINBG20",
      position: 95,
      type: 0,
      paper_value: 59220.52,
      profit: -28.93,
      created_at: "2020-09-15 22:18:39",
      id: 167501,
      robot: {
          title: "Consectetuer Cursus Et PC"
      }
  },
  {
    robot_id: 12847197,
    paper: "WINBG20",
    position: 95,
    type: 0,
    paper_value: 59220.52,
    profit: 28.93,
    created_at: "2020-09-15 22:18:39",
    id: 167501,
    robot: {
        title: "Consectetuer Cursus Et PC"
    }
},
  ];

  let overallProfit:number = 0;

  robotPapers.forEach((robotPaper)=>{
    overallProfit += robotPaper.profit;
  })

  console.log(overallProfit);
  return (
    <>
      <Modal isOpen={toggleModal}>
        <CloseButton visible={toggleModal} onClick={() => {setToggleModal(false);}}/>
      </Modal>
          <div className="wrapper">
            <Breadcrumb />
            <Overview overallProfit={overallProfit} papers={papers} />
            <Card heightValue="118px" onClick={() => {robots.length < 12 ? setToggleModal(true) : alert("Você não possui mais robôs disponíveis.");}}>
              <NewRobot robotQuant={robots.length} />
            </Card>
            <RobotsContainer>
              {robots.length > 0 &&
                robots.map((robot) => (
                  <Robot robotValues={robot} />
                ))}
            </RobotsContainer>
        </div>
    </>
  );
}
