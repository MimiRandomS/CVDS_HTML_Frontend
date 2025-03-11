const getUserReservations = async (userId) => {
  try {
    const data = await api.get(`reservations/user/${userId}`);
    return data;
  } catch (error) {
    console.error("Error al obtener reservas:", error.message);
    throw error;
  }
};

const cancelReservation = async (reservationId) => {
  try {
    const message = await api.put(`reservations/cancel/${reservationId}`);
    return message;
  } catch (error) {
    console.error("Error al cancelar reserva:", error.message);
    throw error;
  }
};

window.getUserReservations = getUserReservations;
window.cancelReservation = cancelReservation;
