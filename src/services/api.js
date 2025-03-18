const API_BASE_URL = "https://unireserva-haa2a4e3aueeeqes.brazilsouth-01.azurewebsites.net";

const api = {
  get: async (endpoint) => {
    const response = await fetch(API_BASE_URL + endpoint, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw new Error("Error en la solicitud GET");
    return response.json();
  },

  put: async (endpoint) => {
    const response = await fetch(API_BASE_URL + endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw new Error("Error en la solicitud PUT");
    return response.text(); // o response.json() según respuesta de tu API
  },
};

export default api;
