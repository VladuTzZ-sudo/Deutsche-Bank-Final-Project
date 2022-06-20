import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Dispatch, SetStateAction } from "react";

interface Setting {
  icon: IconDefinition;
  second_icon: IconDefinition;
  title: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default Setting;
