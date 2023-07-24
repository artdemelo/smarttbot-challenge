import styles from "./Overview.module.css";
import textStyles from "./layout/textStyles.module.css";

import HorizontalLine from "./overview/HorizontalLine";
import Paper from "./overview/Paper";
import Card from "./layout/Card";

interface PaperSchema {
  name: string,
  trasactions: number,
}

type Overview = {
    moviment_summary: number,
    transactions: number,
    open_positions: number,
    papers: Array<PaperSchema>
}

interface OverviewProps {
  overview: Overview
}

export default function Overview({overview}: OverviewProps) {
  return (
    <>
      <Card heightValue="252px">
        <div className={styles.overviewContainer}>
          <div className={styles.titleContainer}>
            <p className={textStyles.regular}>Resumo geral operações</p>
            <div className={styles.statusWrapper}>
              <div className={styles.resumeContainer}>
                <p className={textStyles.smallLight}>Resumo de movimentação</p>
                <p className={textStyles.mediumHeavy+" "+(overview.moviment_summary<0?textStyles.loss : textStyles.gain)}>{overview.moviment_summary < 0 ? "-":undefined}R${overview.moviment_summary ? (overview.moviment_summary < 0 ? (overview.moviment_summary*(-1)).toFixed(2).replace(".",",") : overview.moviment_summary.toFixed(2).replace(".",",")) : "0"}</p>
              </div>
              <div className={styles.totalTransactions}>
                <p className={textStyles.smallLight}>Total de transações realizadas</p>
                <p className={textStyles.mediumHeavy}>{overview.transactions}</p>
              </div>
            </div>
            <HorizontalLine />
          </div>
          <div className={styles.papersContainer}>
              <p className={textStyles.smallLighter}>Papéis negociados</p>
              <div className={styles.paperSections}>
                <div className={styles.papers}>
                  {overview.papers ? (overview.papers.length > 0 &&
                  overview.papers.map((paper) => (
                    <Paper name={paper.name} transactions={paper.trasactions}/>
                  ))):<p>paper</p>}
                </div>
              </div>
            </div>
          </div>
      </Card>
    </>
  )
}
