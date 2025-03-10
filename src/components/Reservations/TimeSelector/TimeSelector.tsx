import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pickerStyles from "../sharedStyles/picker.module.css";
import inputFieldStyles from "../sharedStyles/inputField.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TimeSelector() {
  const [selectedHour, setSelectedHour] = useState<Date | null>(null);

  return (
    <div className={inputFieldStyles.container}>
      <FontAwesomeIcon
        className={inputFieldStyles.icon}
        icon="clock"
      ></FontAwesomeIcon>
      <DatePicker
        className={pickerStyles.picker}
        selected={selectedHour}
        onChange={(date) => setSelectedHour(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeFormat="h:mm aa"
        dateFormat="h:mm aa"
        minTime={new Date(new Date().setHours(7, 0, 0, 0))}
        maxTime={new Date(new Date().setHours(19, 0, 0, 0))}
        placeholderText="Hora"
      ></DatePicker>
    </div>
  );
}

export default TimeSelector;
