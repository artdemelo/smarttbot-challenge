import style from "./Breadcrumb.module.css"
import textStyles from "./layout/textStyles.module.css";

import VerticalLine from "./breadcrumb/VerticalLine";
import Card from "./layout/Card";

import bars from "../assets/bars.svg";

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
