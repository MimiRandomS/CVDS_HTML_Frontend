import {
  getReservations,
  cancelReservation,
} from "../../../services/reservationService.js";


document.addEventListener("DOMContentLoaded", async () => {
  const listContainer = document.getElementById("listReservations");
  const detailModal = document.getElementById("detailModal");
  const cancelModal = document.getElementById("cancelModal");
  const detailContent = document.getElementById("detailContent");
  const cancelBtn = document.getElementById("cancelBtn");
  const confirmCancelBtn = document.getElementById("confirmCancelBtn");

  let userId = localStorage.getItem("userId");

  if (!userId) {
    alert("Error: No se encontró el ID del usuario en localStorage. Se usará un ID temporal.");
    userId = 1032373105; // ✅ Ahora sí cambia el valor
  }
  

  let reservationsList = await getReservations(userId); // Llamada a API con el ID del usuario
  let selectedReservation = null;
  let reservationToCancel = null;

  function renderReservations() {
    listContainer.innerHTML = "";

    const confirmedReservations = reservationsList.filter(
      (res) => res.status === "CONFIRMED"
    );
    if (confirmedReservations.length === 0) {
      listContainer.innerHTML = `
        <div class="card noReservationsCard">
          <h3>No tienes reservas confirmadas</h3>
          <p class="noReservationsText">Parece que aún no has realizado ninguna reserva.</p>
        </div>`;
    } else {
      confirmedReservations.forEach((res) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <div class="titleCard"><h3>Reserva del ${res.date}</h3></div>
          <div class="bodyCard">
            <button class="icoButton"><img src="../../../assets/public/info.ico" alt="Información reserva" class="ico" /></button>
          </div>
        `;
        card.querySelector(".icoButton").onclick = () => openDetailModal(res);
        listContainer.appendChild(card);
      });
    }
  }

  function openDetailModal(reservation) {
    selectedReservation = reservation;
    detailContent.innerHTML = `
    <div class="modalOverlay">
      <div class="modalContent">
        <div class="mainModal">
          <div class="containerModal">
          <div class="rowModal"><div><span>Fecha:</span> ${reservation.date}</div><div><span>Laboratorio:</span> ${reservation.lab}</div></div>
          <div class="rowModal"><div><span>Hora:</span> ${reservation.startTime} - ${reservation.endTime}</div></div>
          <div class="rowModal"><div><span>Propósito:</span> ${reservation.purpose}</div></div>
          <div class="rowModal">
          <button class="btn btn1Modal" id="cancelReservationBtn">Cancelar Reserva</button>
          <button class="btn btn2Modal" id="closeDetailBtn">Ok</button>
          </div>  
          </div>
          </div>
        </div>
      </div>
    </div>
    `;
    detailModal.style.display = "flex";

    document.getElementById("closeDetailBtn").onclick = closeDetailModal;
    document.getElementById("cancelReservationBtn").onclick = () => {
      closeDetailModal();
      openCancelModal(reservation);
    };
  }

  function closeDetailModal() {
    detailModal.style.display = "none";
  }

  function openCancelModal(reservation) {
    reservationToCancel = reservation;
    cancelModal.style.display = "flex";
  }

  function closeCancelModal() {
    cancelModal.style.display = "none";
    reservationToCancel = null;
  }

  async function handleCancelReservation() {
    try {
      await cancelReservation(userId, reservationToCancel.id); // Pasamos también el ID del usuario
      reservationsList = reservationsList.filter(
        (res) => res.id !== reservationToCancel.id
      );
      renderReservations();
    } catch (error) {
      console.error("Error al cancelar la reserva", error);
      alert("Hubo un problema al cancelar la reserva. Intenta de nuevo.");
    } finally {
      closeCancelModal();
    }
  }

  cancelBtn.onclick = closeCancelModal;
  confirmCancelBtn.onclick = handleCancelReservation;

  renderReservations(); // Renderizar las reservas al inicio
});
