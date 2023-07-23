import { MouseEventHandler, ReactNode, useState } from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: ReactNode;
  heightValue?: string;
  onClick?: MouseEventHandler;
}


export default function Card({ onClick, heightValue, children }: CardProps) {
  const [isHover, setIsHover] = useState(false);
  
  const handleMouseEnter = () => {
     setIsHover(true);
  };
  const handleMouseLeave = () => {
     setIsHover(false);
  };
  
if(onClick){
  return (
    <div className={styles.card} style={{ height: heightValue, cursor: "pointer", filter: isHover ?  `drop-shadow(0px 1px 24px rgba(0, 0, 0, 0.1))`: "drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1))",}} onClick={onClick} onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
}
  return (
    <div className={styles.card} style={{ height: heightValue }}>
      {children}
    </div>
  );
}
