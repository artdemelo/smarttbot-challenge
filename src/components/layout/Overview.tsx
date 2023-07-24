import HorizontalLine from "./HorizontalLine";
import Paper from "./Paper";
import textStyles from "./textStyles.module.css"
import styles from "./Overview.module.css"
import Card from "./Card";

interface PaperSchema {
  name: string,
  transactions: number,
}

interface OverviewProps {
  papers: Array<PaperSchema>,
}

export default function Overview({papers}: OverviewProps) {
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
                <p className={textStyles.mediumHeavy+" "+textStyles.loss}>-R$220,00</p>
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
