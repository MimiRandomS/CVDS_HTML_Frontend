import { createReservation, getReservations } from "../../services/reservationService.js";

document.addEventListener("DOMContentLoaded", () => {
  const labSelect = document.getElementById("labSelect");
  const dateSelector = document.getElementById("dateSelector");
  const timeSelector = document.getElementById("timeSelector");
  const durationSelector = document.getElementById("durationSelector");
  const prioritySelector = document.getElementById("prioritySelector");
  const purposeInput = document.getElementById("purpose");
  const reserveButton = document.getElementById("reserveButton");

  reserveButton.addEventListener("click", async () => {
    const labId = labSelect.value;
    const date = dateSelector.value;
    const time = timeSelector.value;
    const duration = parseInt(durationSelector.value, 10);
    const priority = parseInt(prioritySelector.value, 10);
    const purpose = purposeInput.value.trim();

    if (!labId || !date || !time || !purpose) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      const response = await createReservation({
        labId,
        date,
        time,
        duration,
        priority,
        purpose,
      });

      if (response.success) {
        alert("Reserva creada con éxito.");
        loadReservations(labId);
      } else {
        alert(response.message || "Error al crear la reserva.");
      }
    } catch (error) {
      console.error("Error al crear la reserva:", error);
      alert("Ocurrió un error inesperado.");
    }
  });

  async function loadReservations(labId) {
    try {
      const reservations = await getReservations(labId);
      renderReservations(reservations);
    } catch (error) {
      console.error("Error al cargar reservas:", error);
    }
  }

  function renderReservations(reservations) {
    const calendarGrid = document.getElementById("calendarGrid");

   
    const existingReservations = calendarGrid.querySelectorAll(".reservation");
    existingReservations.forEach((el) => el.remove());

    reservations.forEach((reservation) => {
      const { date, time, duration, purpose } = reservation;
      const startTime = new Date(`${date}T${time}`);
      const dayIndex = (startTime.getDay() + 6) % 7; 

      const hour = startTime.getHours();
      const position = dayIndex + hour * 7 + 1;

      const reservationElement = document.createElement("div");
      reservationElement.className = "reservation";
      reservationElement.textContent = purpose;
      reservationElement.style.gridColumn = dayIndex + 2;
      reservationElement.style.gridRow = hour - 7 + 2; 
      calendarGrid.appendChild(reservationElement);
    });
  }
});
