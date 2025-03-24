import api from "./api.js";


async function createReservation({ labId, date, time, duration, priority, purpose }) {
  try {
    const reservation = {
      labId: labId,
      date: date,
      time: time,
      duration: duration,
      priority: priority,
      purpose: purpose
    };

    const response = await api.post("/reservations", reservation);
    return response.data;
  } catch (error) {
    console.error("Error al crear la reserva:", error);
    return { success: false, message: "Error al crear la reserva" };
  }
}

async function getReservations(userId) {
  try {
    const response = await api.get(`/reservations/user/${userId}`);
    return response.data; 
  } catch (error) {
    console.error("Error al obtener reservas:", error);
    return [];
  }
}

async function cancelReservation(id) {
  try {
    const response = await api.put(`/reservations/cancel/${id}`);
    return response;
  } catch (error) {
    console.error(`Error al cancelar la reserva con id ${id}:`, error);
    return { success: false, message: "Error al cancelar la reserva" };
  }
}

export { getReservations, cancelReservation, createReservation };
