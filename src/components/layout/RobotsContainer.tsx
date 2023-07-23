import { ReactNode } from "react";
import styles from "./RobotsContainer.module.css";

interface RobotsContainerProps {
  children: ReactNode;
}

export default function RobotsContainer({ children }: RobotsContainerProps) {
  return <div className={styles.gridContainer}>{children}</div>;
}
