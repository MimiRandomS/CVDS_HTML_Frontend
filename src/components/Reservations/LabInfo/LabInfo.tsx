import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../sharedStyles/labsInfoBtn.module.css";

function LabInfo() {
  return (
    <div className={styles.labs}>
      <button className={styles.labs__btn}>
        <FontAwesomeIcon
          className={styles.labs__icon}
          icon="info-circle"
        ></FontAwesomeIcon>
      </button>
    </div>
  );
}

export default LabInfo;
