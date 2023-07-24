import styles from "./Robot.module.css";
import textStyles from "./layout/textStyles.module.css"

import Status from "./robot/Status";
import Card from "./layout/Card";
import gain from "../assets/gain.svg";
import loss from "../assets/loss.svg";
import arrow from "../assets/arrow.svg";

interface lastPaperSchema {
  robot_id: number,
  paper: string,
  position: number,
  type: number,
  paper_value: number,
  profit: number,
  created_at: string,
  id: number,
  robot: object,
}

interface movimentationSchema {
  date: string,
  value: number,
}

interface RobotSchema {
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
      last_paper: lastPaperSchema,
      movimentations: Array<movimentationSchema>,
}



interface RobotProps {
  robotValues: RobotSchema;
}

export default function Robot({ robotValues }: RobotProps) {
  const now = new Date();
  const date = now.toISOString().slice(0,10);

  let tradesToday : number = 0;

  robotValues.movimentations.forEach((movimentation)=>{
    if (movimentation.date.match(date)) {
      tradesToday++;
    }
  });
  return (
    <div className={styles.robot}>
        <Card heightValue="100%">
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
                <p className={textStyles.largeHeavy}>{robotValues.last_paper.position}</p>
                <div className={styles.paperContainer}>
                  <p className={textStyles.heavy+" "+textStyles.paper}>{robotValues.last_paper.paper}</p>
                  <p className={textStyles.smallLightDark}>{robotValues.last_paper.type === 0 ? "Compra":"Venda"}</p>
                </div>
                <div className={styles.balanceContainer}>
                  <p className={textStyles.smallLighter}>{robotValues.last_paper.paper_value}</p>
                  <div className={styles.statusContainer}>
                    <img src={robotValues.last_paper.profit >= 0 ? gain : loss} alt="triangle icon" />
                    <p className={textStyles.mediumLight+" "+ (robotValues.last_paper.profit >=0 ? textStyles.gain : textStyles.loss)}>{robotValues.last_paper.profit <=0 ? "-":undefined}R${robotValues.last_paper.profit >=0 ? robotValues.last_paper.profit.toString().replace(".",",") : (robotValues.last_paper.profit*(-1)).toString().replace(".",",")}</p>
                  </div>
                </div>
              </div>
              <div className={styles.robotLowerContainer}>
                <div className={styles.dailyBalanceWrapper}>
                  <div className={styles.dailyBalanceContainer}>
                    <p className={textStyles.smallLighterVariation}>Saldo diário</p>
                    <img src={arrow} alt="arrow icon" />
                  </div>
                  <p className={textStyles.mediumHeavy+" "+textStyles.loss}>-R${robotValues.daily_balance.toString().replace(".",",")}</p>
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
