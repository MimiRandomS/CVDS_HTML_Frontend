import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pickerStyles from "../sharedStyles/picker.module.css";
import inputFieldStyles from "../sharedStyles/inputField.module.css";
import DatePicker from "react-datepicker";

function DateSelector() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className={inputFieldStyles.container}>
      <FontAwesomeIcon
        className={inputFieldStyles.icon}
        icon="calendar"
      ></FontAwesomeIcon>
      <DatePicker
        className={pickerStyles.picker}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Fecha"
        minDate={new Date()}
      ></DatePicker>
    </div>
  );
}

export default DateSelector;
