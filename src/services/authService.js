import api from "./api";

async function login(email, password) {
  try {
    const response = await api.post("auth/login", { email, password });
    const user = response.data;
    
    // Guardar usuario en localStorage
    localStorage.setItem("user", JSON.stringify(user));

    return user;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return null;
  }
}

async function signup(userData) {
  try {
    const response = await api.post("auth/signup", userData);
    return response.data;
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    return null;
  }
}

function getUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

function logout() {
  localStorage.removeItem("user");
}

export { login, signup, getUser, logout };
