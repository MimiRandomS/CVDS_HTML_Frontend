const API_BASE_URL = "https://localhost:8443";

const api = {
  get: async (endpoint) => {
    const token = localStorage.getItem("token"); 
    const headers = {
      "Content-Type": "application/json",
    };
    
    if (token) {
      headers["Authorization"] = `Bearer ${token}`; 
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, { headers });

    if (!response.ok) throw new Error("Error en la solicitud GET");
    return response.json();
  },

  put: async (endpoint) => {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "PUT",
      headers,
    });

    if (!response.ok) throw new Error("Error en la solicitud PUT");
    return response.text();
  },

  post: async (endpoint, data) => {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error en la solicitud POST");
    }

    return response.json();
  },
};

export default api;
