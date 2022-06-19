import { FC } from "react";
import styles from "./DataCard.module.css";

interface DataProps {
  image?: string;
  className?: string;
  onClick?: React.MouseEventHandler;
}

const DataCard: FC<DataProps> = (props) => {
  const cardImage =
    props.image !== "" && props.image !== undefined
      ? props.image
      : process.env.PUBLIC_URL + "/assets/data-images/folder-blue-icon.png";

  return (
    <div
      className={`${styles["card"]} ${props.className}`}
      onClick={props.onClick}
    >
      <img src={cardImage} className={styles["card__image"]} />
    </div>
  );
};

export default DataCard;
