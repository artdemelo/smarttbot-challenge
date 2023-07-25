import { useState } from "react";

import styles from "./Strategies.module.css";
import textStyles from "../layout/textStyles.module.css";

interface StrategySchema {
  id: number,
  name: string,
}

interface StrategiesProps {
  strategiesList: Array<StrategySchema>,
  childToParent: React.FormEventHandler,
}

export default function Strategies({ strategiesList, childToParent }:StrategiesProps) {
  const [activeId, setActiveId] = useState(1);

  
  return (
    <>
    <div className={styles.container} onClick={childToParent(activeId)}>
        <label htmlFor="strategies" className={textStyles.regular}>Selecione uma das estratégias abaixo</label>
        <ul className={styles.strategies} >
        {strategiesList.length > 0 &&
          strategiesList.map((strategy) => (
            <li className={styles.strategy} id={activeId===strategy.id ? styles.active : undefined} onClick={()=>{setActiveId(strategy.id)}} >{strategy.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
