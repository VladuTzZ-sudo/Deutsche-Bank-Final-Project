import { faStar, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import UserScore from "../../models/UserScore";
import styles from "./Leaderboard.module.css";

interface LeaderboardProps {
  participants: UserScore[];
}

const Leaderboard: FC<LeaderboardProps> = (props) => {
  const awardsIcons: IconDefinition[] = [faStar, faStar, faStar];

  const participants: JSX.Element[] = props.participants.map((user, index) => (
    <li className={styles["list__participant"]}>
      {index < awardsIcons.length ? (
        <FontAwesomeIcon
          className={styles["list__icon"]}
          icon={awardsIcons[index]}
        />
      ) : (
        <span
          className={`${styles["list__decimal-style"]} ${styles["list__number"]}`}
        >
          {index + 1}.
        </span>
      )}
      {index === 0 ? (
        <div className={styles["list__text-container"]}>
          <span className={styles["list__text--top"]}>Top Learner</span>
          <span className={styles["list__text"]}>{user.name}</span>
        </div>
      ) : (
        <span className={styles["list__text"]}>{user.name}</span>
      )}
      <span className={`${styles["list__score"]} ${styles["list__number"]}`}>
        {user.score}
      </span>
    </li>
  ));

  return <ul className={`${styles["list"]}`}>{participants}</ul>;
};

export default Leaderboard;
