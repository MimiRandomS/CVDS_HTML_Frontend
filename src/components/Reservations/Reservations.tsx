import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Reservations.module.css";
import inputFieldStyles from "./sharedStyles/inputField.module.css";
import "react-datepicker/dist/react-datepicker.css";
import LabSelection from "./LabSelection/LabSelection";
import LabInfo from "./LabInfo/LabInfo";
import DateSelector from "./DateSelector/DateSelector";
import TimeSelector from "./TimeSelector/TimeSelector";
import DurationSelector from "./DurationSelector/DurationSelector";
import Button from "../Button/Button";
import WeeklyCalendar from "./WeeklyCalendar/WeeklyCalendar";

function Reservations() {
  const labs = ["LABIS-W", "LABIS-X", "LABIS-Y"];
  const durations = [30, 60, 90, 120, 150, 180];

  const [selectedLab, setSelectedLab] = useState(labs[0]);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.labs__container}>
          <h2 className={styles.labs__labName}>{selectedLab}</h2>
          <div className={styles.labs__icons}>
            <LabSelection
              items={labs}
              onSelectLab={setSelectedLab}
            ></LabSelection>
            <LabInfo></LabInfo>
          </div>
        </div>
        <div className={styles.data}>
          <div className={styles.data__selector}>
            <DateSelector></DateSelector>
            <TimeSelector></TimeSelector>
            <DurationSelector items={durations}></DurationSelector>
          </div>
          <div className={inputFieldStyles.container}>
            <FontAwesomeIcon icon="pencil" />
            <input
              placeholder="Proposito de la reserva"
              type="text"
              className={styles.purpose__input}
            />
          </div>
          <Button className={styles.data__btn} text="Reservar"></Button>
        </div>
      </div>
      <WeeklyCalendar />
    </div>
  );
}

export default Reservations;
