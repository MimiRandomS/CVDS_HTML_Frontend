import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./DurationSelector.module.css";
import inputFieldStyles from "../sharedStyles/inputField.module.css";
import listStyles from "../sharedStyles/labsList.module.css";

type Props = {
  readonly items: number[];
};

function DurationSelector({ items }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [duration, setDuration] = useState(30);

  const handleSelect = (item: number) => {
    setDuration(item);
    setIsOpen(false);
  };

  return (
    <div className={`${inputFieldStyles.container} ${listStyles.container}`}>
      <FontAwesomeIcon
        className={inputFieldStyles.icon}
        icon="clock"
      ></FontAwesomeIcon>
      <button className={styles.btn} onClick={() => setIsOpen(!isOpen)}>
        {duration} min
      </button>
      <ul
        className={`${listStyles.list} ${
          isOpen ? listStyles.listVisible : ""
        }  ${styles.list}`}
      >
        {items.map((item) => (
          <li key={item} className={listStyles.item}>
            <button
              className={listStyles.itemBtn}
              onClick={() => handleSelect(item)}
            >
              {item} min
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DurationSelector;
