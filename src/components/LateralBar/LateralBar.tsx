import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./LateralBar.module.css";

function LateralBar() {
  const items = ["Reservas", "Mis reservas"];
  return (
    <div className={styles.lateralBar}>
      <div className={styles.lateralBar__listContainer}>
        <ul className={styles.lateralBar__list}>
          {items.map((element) => (
            <li key={element} className={styles.lateralBar__item}>
              {element}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.lateralBar__account}>
        <FontAwesomeIcon icon="user"></FontAwesomeIcon>
        <p className={styles.lateralBar__p}>Mi cuenta</p>
      </div>
    </div>
  );
}

export default LateralBar;
