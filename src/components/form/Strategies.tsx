import styles from "./Strategies.module.css";

interface StrategySchema {
  title: string,
}

interface StrategiesProps {
  strategiesList: Array<StrategySchema>,
}

export default function Strategies({ strategiesList }:StrategiesProps) {
  // utilizar um estado para armazenar a informação de qual estratégia está ativa(selecionada em laranja)
  return (
    <>
      {strategiesList.length > 0 &&
        strategiesList.map((strategy) => (
          <div className={styles.strategy}>{strategy.title}</div>
        ))}
    </>
  )
}
