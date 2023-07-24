import styles from "./Robot.module.css";
import textStyles from "./layout/textStyles.module.css"
import Status from "./layout/Status";
import Card from "./layout/Card";
import gain from "../assets/gain.svg";
import loss from "../assets/loss.svg";

interface RobotSchema {
      title: string,
      running: number, 
      updated_at: string,
      mode: number,
      simulation: string,
      strategy: string,
      initial_capital: number,
      number_trades: number,
      daily_balance: number,
      created_at: string,
      last_paper: number,
}

interface RobotProps {
  robotValues: RobotSchema;
}

export default function Robot({ robotValues }: RobotProps) {
  return (
    <div className={styles.robot}>
        <Card heightValue="100%">
          <div className={styles.robotsContainer}>
          <div className={styles.titleStatusContainer}>
            <p className={textStyles.regular}>{robotValues.title}</p>
            <Status isOn={robotValues.running === 1 ? true : false}/>
          </div>
              <p className={textStyles.smallLighter}>#2871249182</p>
              <div className={styles.tagsContainer}>
                <div className={styles.tag+" "+textStyles.smallLighter}>Pessimista</div>
                <div className={styles.tag+" "+textStyles.smallLighter}>Win%</div>
                <div className={styles.tag+" "+textStyles.smallLighter}>Price action</div>
              </div>
              <div className={styles.overallContainer}>
                <p className={textStyles.largeHeavy}>35</p>
                <div className={styles.paperContainer}>
                  <p className={textStyles.heavy+" "+textStyles.paper}>WING20</p>
                  <p className={textStyles.smallLightDark}>Compra</p>
                </div>
                <div className={styles.balanceContainer}>
                  <p className={textStyles.smallLighter}>114.093.33</p>
                  <div className={styles.statusContainer}>
                    <img src={gain} alt="gain icon" />
                    <p className={textStyles.mediumLight+" "+textStyles.gain}>R$32,33</p>
                  </div>
                </div>
              </div>
          </div>
        </Card>
    </div>
  );
}
