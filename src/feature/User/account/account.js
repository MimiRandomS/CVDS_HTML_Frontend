import { login } from "../../../services/authService.js";

document.addEventListener("DOMContentLoaded", async () => {
    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("Iniciando sesión automáticamente con usuario de prueba...");
        try {
            user = await login("daniel@gmail.com", "Contra#123");

            if (!user) {
                alert("Error: No se pudo iniciar sesión. Verifica las credenciales.");
                return;
            }

            localStorage.setItem("user", JSON.stringify(user));
        } catch (error) {
            console.error("Error al iniciar sesión automáticamente:", error);
            alert("Error al iniciar sesión. Inténtalo más tarde.");
            return;
        }
    }

    document.querySelector(".info").innerHTML = generateAccountHTML(user.name, user.id, user.email);

    document.querySelector(".btn-name").addEventListener("click", () => openModal("name"));
    document.querySelector(".btn-password").addEventListener("click", () => openModal("password"));
    document.querySelector(".btn-delete").addEventListener("click", () => openModal("delete"));
    document.querySelector(".btn1Modal").addEventListener("click", logout);

    function logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        alert("Sesión cerrada.");
        window.location.href = "../../Login/login.html";
    }
    
});

function generateAccountHTML(name, idNumber, email) {
    return `
        <div class="info">
            <h1 class="info__name">${name}</h1>
            <div class="info__data">
                <div class="data__items">
                    <div class="data__item">
                        <h3 class="item__title">No Identificación</h3>
                        <p class="item__text">${idNumber}</p>
                    </div>
                    <div class="data__item">
                        <h3 class="item__title">Correo</h3>
                        <p class="item__text">${email}</p>
                    </div>
                </div>
                <div class="data__update">
                    <button class="btn btn-name">Cambiar Nombre</button>
                    <button class="btn btn-password">Cambiar Contraseña</button>
                    <button class="btn btn-delete">Borrar Cuenta</button>
                </div>
            </div>
            <div class="btnContainer">
                <button class="btn btn1Modal">Cerrar sesión</button>
            </div>
        </div>
    `;
}

function openModal(action) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");
    const confirmBtn = document.getElementById("modalConfirm");

    modal.style.display = "flex";
    modalBody.innerHTML = "";

    if (action === "name") {
        modalTitle.textContent = "Cambiar Nombre";
        modalBody.innerHTML = `<input type="text" id="newName" placeholder="Nuevo nombre" class="inputModal">`;
        confirmBtn.onclick = () => saveName();
    } else if (action === "password") {
        modalTitle.textContent = "Cambiar Contraseña";
        modalBody.innerHTML = `
            <input type="password" id="oldPassword" placeholder="Contraseña actual" class="inputModal">
            <input type="password" id="newPassword" placeholder="Nueva contraseña" class="inputModal">
        `;
        confirmBtn.onclick = () => savePassword();
    } else if (action === "delete") {
        modalTitle.textContent = "Borrar Cuenta";
        modalBody.innerHTML = `<p>¿Estás seguro de que deseas eliminar tu cuenta? Esta acción es irreversible.</p>`;
        confirmBtn.onclick = () => deleteAccount();
    }

    modal.addEventListener("click", (event) => {
        if (event.target === modal) closeModal();
    });
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function saveName() {
    const newName = document.getElementById("newName").value.trim();
    if (newName !== "") {
        document.querySelector(".info__name").textContent = newName;
        closeModal();
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function savePassword() {
    const oldPassword = document.getElementById("oldPassword").value.trim();
    const newPassword = document.getElementById("newPassword").value.trim();

    if (oldPassword !== "" && newPassword !== "") {
        alert("Contraseña cambiada exitosamente.");
        closeModal();
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

function deleteAccount() {
    alert("Cuenta eliminada.");
    closeModal();
}





