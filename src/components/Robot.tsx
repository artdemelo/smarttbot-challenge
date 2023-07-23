import styles from "./Robot.module.css";
import Status from "./layout/Status";
import Card from "./layout/Card";

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
          <p className="regular">{robotValues.title}</p>
          <Status isOn={robotValues.running === 1 ? true : false}/>
        </Card>
    </div>
  );
}
