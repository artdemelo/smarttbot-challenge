import smarttBot from "../assets/smarttbot.svg"
import textStyles from "./layout/textStyles.module.css"

interface NewRobotProps {
  robotQuant: number,
}

export default function NewRobot({robotQuant}: NewRobotProps) {
  const remaining = 12 - robotQuant ;
  return (
    <>
    <img src={smarttBot} alt="smarttbot icon" />
        <div style={{margin: "25px"}}>
          <span className={textStyles.regular}>Adicionar novo Robô</span>
          <p className={textStyles.smallLighter}>Você possui <span className={textStyles.smallLighter+" "+(remaining===0 ? textStyles.loss : textStyles.gain)}>{remaining}{remaining === 1 ? " Robô" : " Robôs"}</span> {remaining === 1 ? " disponível" : " disponíveis"}</p>
        </div>
    </>
  )
}
