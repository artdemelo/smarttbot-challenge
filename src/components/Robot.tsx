import styles from "./Robot.module.css";
import textStyles from "./layout/textStyles.module.css"

import Status from "./robot/Status";
import Card from "./layout/Card";
import gain from "../assets/gain.svg";
import loss from "../assets/loss.svg";
import arrow from "../assets/arrow.svg";

interface movimentationSchema {
  date: string,
  value: number,
}

type Robot = {
      id: number,
      title: string,
      running: number, 
      updated_at: string,
      mode: number,
      simulation: number,
      stock_codes: string,
      strategy: string,
      initial_capital: number,
      number_trades: number,
      daily_balance: number,
      created_at: string,
      last_paper: {
        created_at: string,
        id: number,
        paper: string,
        paper_value: number,
        position: number,
        profit: number,
        robot: object,
        robot_id: number,
        type: number,
      },
      movimentations: Array<movimentationSchema>,
}



interface RobotProps {
  robotValues: Robot;
}

export default function Robot({ robotValues,}: RobotProps) {

  const now = new Date();
  const date = now.toISOString().slice(0,10);
  // @ts-ignore
  const last_paper: any = robotValues.last_paper;
  let tradesToday : number = 0;

  robotValues.movimentations.forEach((movimentation)=>{
    if (movimentation.date.match(date)) {
      tradesToday++;
    }
  });
  return (
    <div className={styles.robot}>
        <Card heightValue="100%" onClick={()=>undefined}>
          <div className={styles.robotsContainer}>
          <div className={styles.titleStatusContainer}>
            <p className={robotValues.title.length < 22 ? textStyles.regular : textStyles.regularMinor}>{robotValues.title}</p>
            <Status isOn={robotValues.running === 1 ? true : false}/>
          </div>
              <p className={textStyles.smallLighter}>#{robotValues.id}</p>
              <div className={styles.tagsContainer}>
                <div className={styles.tag+" "+textStyles.smallLighter}>{robotValues.simulation===0 ? "Otimista":"Pessimista"}</div>
                <div className={styles.tag+" "+textStyles.smallLighter}>{robotValues.stock_codes}</div>
                <div className={styles.tag+" "+textStyles.smallLighter}>{robotValues.strategy}</div>
              </div>
              <div className={styles.overallContainer}>
                <div className={styles.overallLeftWrapper}>
                <p className={textStyles.largeHeavy}>{last_paper ? last_paper.position : "0"}</p>
                  <div className={styles.paperContainer}>
                    <p className={textStyles.heavy+" "+textStyles.paper}>{last_paper ? last_paper.paper : "NONE"}</p>
                    <p className={textStyles.smallLightDark}>{last_paper ? (last_paper.type === 0 ? "Compra":"Venda"):"Nenhum"}</p>
                  </div>
                </div>
                <div className={styles.balanceContainer}>
                  <p className={textStyles.smallLighter}>{last_paper ? last_paper.paper_value : "0,00"}</p>
                  <div className={styles.statusContainer}>
                    <img src={last_paper ? (last_paper.profit >= 0 ? gain : loss) : gain} alt="triangle icon" />
                    <p className={textStyles.mediumLight+" "+ (last_paper ? (last_paper.profit >=0 ? textStyles.gain : textStyles.loss) : textStyles.gain)}>{last_paper ? (last_paper.profit < 0 ? "-":undefined):undefined}R${last_paper ? (last_paper.profit >=0 ? last_paper.profit.toString().replace(".",",") : (last_paper.profit*(-1)).toString().replace(".",",")):"0,00"}</p>
                  </div>
                </div>
              </div>
              <div className={styles.robotLowerContainer}>
                <div className={styles.dailyBalanceWrapper}>
                  <div className={styles.dailyBalanceContainer}>
                    <p className={textStyles.smallLighterVariation}>Saldo diário</p>
                    <img src={arrow} alt="arrow icon" />
                  </div>
                  <p className={textStyles.mediumHeavy+" "+(robotValues.daily_balance < 0 ? textStyles.loss : textStyles.gain)}>{robotValues.daily_balance < 0 ? "-":undefined}R${robotValues.daily_balance >= 0 ? robotValues.daily_balance.toString().replace(".",",") : (robotValues.daily_balance*(-1)).toString().replace(".",",")}</p>
                </div>

                <div className={styles.dayTradesContainer}>
                  <p className={textStyles.smallLighterVariation}>Trades no dia</p>
                  <p className={textStyles.mediumHeavyGray}>{tradesToday}</p>
                </div>
              </div>
          </div>
        </Card>
    </div>
  );
}
