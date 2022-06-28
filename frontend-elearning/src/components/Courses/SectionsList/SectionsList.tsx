import { FC } from "react";
import Section from "../../../models/Course/Section/Section";
import SectionCard from "../SectionCard/SectionCard";
import styles from "./SectionsList.module.css";

interface ListProps {
  sections: Section[];
  className?: string;
}

const SectionsList: FC<ListProps> = (props) => {
  const sectionsJSX = props.sections.map((section, index) => (
    <li className={styles["section"]} key={index}>
      <div className={styles["section__image"]}>
        <img
          className={styles["image"]}
          src={
            section.completed
              ? `${process.env.PUBLIC_URL}/assets/data-images/tick_colored.PNG`
              : `${process.env.PUBLIC_URL}/assets/data-images/tick_grayscale.PNG`
          }
        />
      </div>
      <SectionCard
        className={styles["section__content"]}
        section={section}
      ></SectionCard>
    </li>
  ));

  return (
    <ul className={`${styles["list"]} ${props.className}`}>{sectionsJSX}</ul>
  );
};

export default SectionsList;
