import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import btnStyles from "../sharedStyles/labsInfoBtn.module.css";
import listStyles from "../sharedStyles/labsList.module.css";

type Props = {
  readonly items: string[];
  readonly onSelectLab: (lab: string) => void;
};

function LabSelection({ items, onSelectLab }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (item: string) => {
    onSelectLab(item);
    setIsOpen(false);
  };

  return (
    <div className={btnStyles.container}>
      <button
        className={btnStyles.labs__btn}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon
          className={btnStyles.labs__icon}
          icon="list"
        ></FontAwesomeIcon>
      </button>
      <ul
        className={`${listStyles.list} ${isOpen ? listStyles.listVisible : ""}`}
      >
        {items.map((item) => (
          <li key={item} className={listStyles.item}>
            <button
              className={listStyles.itemBtn}
              onClick={() => handleSelection(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LabSelection;
