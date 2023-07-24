import style from "./Breadcrumb.module.css"
import VerticalLine from "./VerticalLine";
import bars from "../../assets/bars.svg";
import textStyles from "./textStyles.module.css";
import Card from "./Card";

export default function Overview() {
  return (
    <>
      <div className={style.wrapper}>
        <Card heightValue="65px">
            <img src={bars} alt="bars icon" />
            <VerticalLine />
            <div style={{cursor: "pointer"}}>
              <p className={textStyles.regular}>Análise Geral <span className={textStyles.regularLight}>/</span><span className={textStyles.regularLight+" "+textStyles.gain}> Principal</span></p>
            </div>
        </Card>
      </div>
    </>
  )
}
