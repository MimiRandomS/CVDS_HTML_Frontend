import api from "./api.js";

async function getUserById(id) {
  try {
    const response = await api.get(`user/getUser/${id}`);
    return response; 
  } catch (error) {
    console.error(`Error al obtener usuario con id ${id}:`, error);
    return null;
  }
}

async function updateUser(id, userData) {
  try {
    const response = await api.patch(`user/update/${id}`, userData); 
    return response;
  } catch (error) {
    console.error(`Error al actualizar usuario con id ${id}:`, error);
    return null;
  }
}

async function deleteUser(id) {
  try {
    const response = await api.delete(`user/delete/${id}`);
    return response;
  } catch (error) {
    return null;
  }
}


export { getUserById, updateUser, deleteUser };
