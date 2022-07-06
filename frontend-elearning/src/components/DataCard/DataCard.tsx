import { FC, MouseEventHandler } from "react";
import Data from "../../models/Data";
import styles from "./DataCard.module.css";

interface DataProps {
  dataInfo: Data;
  className?: string;
  onClick?: (e: MouseEvent, dataInfo: Data) => void;
}

const DataCard: FC<DataProps> = (props) => {
  const onClickHandler = (e: any) => {
    if (props.onClick) {
      props.onClick(e, props.dataInfo);
    }
  };

  const image =
    props.dataInfo.icon === ""
      ? process.env.PUBLIC_URL + "/assets/data-images/folder-blue-icon.png"
      : props.dataInfo.icon;

  let date;

  if (props.dataInfo.date) {
    const temp = new Date(props.dataInfo.date);
    date =
      temp.getDate() +
      "/" +
      (temp.getMonth() + 1) +
      "/" +
      temp.getFullYear() +
      " " +
      temp.getHours() +
      ":" +
      temp.getMinutes();
  } else {
    date = "";
  }

  return (
    <div
      className={`${styles["card"]} ${props.className}`}
      onClick={onClickHandler}
    >
      <div className={styles["card__image-container"]}>
        <img src={image} className={`${styles["card__image"]}`} />
      </div>
      <div className={styles["card__content"]}>
        {props.dataInfo.title === "" ? null : (
          <p className={styles["card__title"]}>{props.dataInfo.title}</p>
        )}
        {props.dataInfo.date === null ? null : (
          <p className={styles["card__date"]}>{date}</p>
        )}
      </div>
    </div>
  );
};

// 09/28/2021, 10:44 am

export default DataCard;
