import HorizontalLine from "./HorizontalLine";
import Tag from "./Tag";
import textStyles from "./textStyles.module.css"

export default function Overview() {
  return (
    <>
      <p className={textStyles.regular}>Resumo geral operações</p>
      <p className={textStyles.smallLight}>Resumo de movimentação</p>
      <p className={textStyles.mediumHeavy+" "+textStyles.loss}>-R$220,00</p>
      <HorizontalLine />
      <p className={textStyles.smallLighter}>Papéis negociados</p>
      <div>
        <Tag><p className={textStyles.smallHeavy}>WING20</p></Tag>
        <Tag><p className={textStyles.smallHeavy}>ABEV3</p></Tag>
        <Tag><p className={textStyles.smallHeavy}>BOVA11</p></Tag>
      </div>
    </>
  )
}
