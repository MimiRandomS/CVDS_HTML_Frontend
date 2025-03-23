import api from "./api.js";

async function login(email, password) {
  try {
    const response = await api.post("auth/login", { email, password });

    if (!response || !response.data) {
      throw new Error("Respuesta inválida del servidor");
    }

    const apiResponse = response;
    if (apiResponse.status === "success" && apiResponse.data && apiResponse.token) {
      localStorage.setItem("token", apiResponse.token);
      localStorage.setItem("user", JSON.stringify(apiResponse.data));
      return apiResponse.data;
    } else {
      console.error("Error en login:", apiResponse.message);
      return null;
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error.message);
    return null;
  }
}

async function signup(userData) {
  try {
    const response = await api.post("auth/signup", userData);

    const apiResponse = response.data;
    if (apiResponse.status === "success" && apiResponse.data && apiResponse.token) {
      localStorage.setItem("token", apiResponse.token);
      localStorage.setItem("user", JSON.stringify(apiResponse.data));
      return apiResponse.data;
    } else {
      console.error("Error en signup:", apiResponse.message);
      return null;
    }
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    return null;
  }
}

function getUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

function getToken() {
  return localStorage.getItem("token");
}

function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}

export { login, signup, getUser, getToken, logout };
