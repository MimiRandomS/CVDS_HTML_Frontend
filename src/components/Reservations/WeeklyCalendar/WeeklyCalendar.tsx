import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./WeeklyCalendar.module.css";

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const hours = Array.from({ length: 24 }, (_, i) => {
  const hour = Math.floor(i / 2) + 7;
  const minutes = i % 2 === 0 ? "00" : "30";
  return `${hour}:${minutes}`;
});

const getWeekRange = (weekOffset: number) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  const mondayCurrentWeek = new Date();
  mondayCurrentWeek.setDate(
    currentDate.getDate() - (currentDay === 0 ? 6 : currentDay - 1)
  );

  const monday = new Date();
  monday.setDate(mondayCurrentWeek.getDate() + weekOffset * 7);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  const formatDate = (date: Date) =>
    `${date.getDate()} de ${date.toLocaleString("es-ES", { month: "long" })}`;

  return `${formatDate(monday)} - ${formatDate(sunday)}`;
};

function WeeklyCalendar() {
  const [weekOffset, setWeekOffset] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button
          className={styles.header__btn}
          onClick={() => setWeekOffset((prev) => prev - 1)}
        >
          <FontAwesomeIcon icon="arrow-left" className={styles.header__icon} />
        </button>
        <h2>Calendario semanal: {getWeekRange(weekOffset)}</h2>
        <button
          className={styles.header__btn}
          onClick={() => setWeekOffset((prev) => prev + 1)}
        >
          <FontAwesomeIcon icon="arrow-right" className={styles.header__icon} />
        </button>
      </div>
      <div className={styles.calendar}>
        <div className={styles.calendar__header}>Hora</div>
        {days.map((day) => (
          <div key={day} className={styles.calendar__header}>
            {day}
          </div>
        ))}
        {hours.map((hour) => (
          <>
            <div key={hour} className={styles.calendar__hour}>
              {hour}
            </div>
            {days.map((day) => (
              <div
                key={`${day}-${hour}`}
                className={styles.calendar__cell}
              ></div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
}

export default WeeklyCalendar;
