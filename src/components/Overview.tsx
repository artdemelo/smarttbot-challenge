import styles from "./Overview.module.css";
import textStyles from "./layout/textStyles.module.css";

import HorizontalLine from "./overview/HorizontalLine";
import Paper from "./overview/Paper";
import Card from "./layout/Card";

interface PaperSchema {
  name: string,
  transactions: number,
}

interface OverviewProps {
  papers: Array<PaperSchema>,
  overallProfit: number,
}

export default function Overview({papers, overallProfit}: OverviewProps) {
  let totalTransactions = 0;

  papers.forEach ((paper)=>{
    totalTransactions+=paper.transactions;
  })
  return (
    <>
      <Card heightValue="252px">
        <div className={styles.overviewContainer}>
          <div className={styles.titleContainer}>
            <p className={textStyles.regular}>Resumo geral operações</p>
            <div className={styles.statusWrapper}>
              <div className={styles.resumeContainer}>
                <p className={textStyles.smallLight}>Resumo de movimentação</p>
                <p className={textStyles.mediumHeavy+" "+(overallProfit<0?textStyles.loss : textStyles.gain)}>{overallProfit < 0 ? "-":undefined}R${overallProfit < 0 ? (overallProfit*-1).toFixed(2).replace(".",",") : overallProfit.toFixed(2).replace(".",",")}</p>
              </div>
              <div className={styles.totalTransactions}>
                <p className={textStyles.smallLight}>Total de transações realizadas</p>
                <p className={textStyles.mediumHeavy}>{totalTransactions}</p>
              </div>
            </div>
            <HorizontalLine />
          </div>
          <div className={styles.papersContainer}>
              <p className={textStyles.smallLighter}>Papéis negociados</p>
              <div className={styles.paperSections}>
                <div className={styles.papers}>
                  {papers.length > 0 &&
                  papers.map((paper) => (
                    <Paper name={paper.name} transactions={paper.transactions}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
      </Card>
    </>
  )
}
