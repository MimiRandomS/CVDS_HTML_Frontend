document.addEventListener("DOMContentLoaded", async () => {
  const userId = localStorage.getItem("userId") || "1032373105";
  const mainContainer = document.querySelector(".main");
  
  mainContainer.innerHTML = `
      <div class="loading">
        <p>Cargando reservas...</p>
      </div>
    `;

  try {
    const reservations = await getUserReservations(userId);

    if (reservations.length === 0) {
      mainContainer.innerHTML = "<p>No tienes reservas.</p>";
      return;
    }

    // Crear y mostrar las reservas
    const reservationList = document.createElement("div");
    reservationList.className = "reservation-list";

    reservations.forEach((res) => {
      const resItem = document.createElement("div");
      resItem.className = "reservation-item";
      resItem.innerHTML = `
          <p><strong>Laboratorio:</strong> ${res.lab}</p>
          <p><strong>Fecha:</strong> ${res.date}</p>
          <p><strong>Hora:</strong> ${res.startTime} - ${res.endTime}</p>
          <p><strong>Propósito:</strong> ${res.purpose}</p>
          <p><strong>Estado:</strong> ${res.status}</p>
          ${
            res.status === "CONFIRMED"
              ? `<button onclick="handleCancel('${res.id}')">Cancelar</button>`
              : ""
          }
        `;
      reservationList.appendChild(resItem);
    });

    mainContainer.innerHTML = ""; // Limpiar loader
    mainContainer.appendChild(reservationList);
  } catch (error) {
    mainContainer.innerHTML = `<p style="color: red;">Error al cargar las reservas.</p>`;
  }
});

// Función para cancelar reserva (se puede reutilizar)
async function handleCancel(reservationId) {
  if (!confirm("¿Estás seguro de cancelar esta reserva?")) return;
  try {
    const message = await cancelReservation(reservationId);
    alert(message);
    location.reload(); // Recargar para actualizar lista
  } catch (error) {
    alert("Error al cancelar reserva.");
  }
}
