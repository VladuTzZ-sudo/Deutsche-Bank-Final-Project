import { FC } from "react";
import styles from "./MiniCard.module.css";

interface MiniCardProps {
  onClick?: React.MouseEventHandler;
  className?: string;
  children?: React.ReactNode;
}

const MiniCard: FC<MiniCardProps> = (props) => {
  return (
    <div className={`${styles["button"]}`}>
      <div className={`${styles["upperButton"]}`}>
        1
      </div>
      <div className={`${styles["lowerButton"]}`}>
        2
      </div>
    </div>
  );
};

export default MiniCard;
