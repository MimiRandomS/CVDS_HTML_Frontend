function openModal(action) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");
    const confirmBtn = document.getElementById("modalConfirm");

    modal.style.display = "flex"; 
    modalBody.innerHTML = ""; 
    if (action === "name") {
        modalTitle.textContent = "Cambiar Nombre";
        modalBody.innerHTML = `
            <input type="text" id="newName" placeholder="Escribe tu nuevo nombre" class="inputModal">
        `;
        confirmBtn.onclick = () => {
            saveName();
        };
    } 
    else if (action === "password") {
        modalTitle.textContent = "Cambiar Contraseña";
        modalBody.innerHTML = `
            <input type="password" id="oldPassword" placeholder="Contraseña actual" class="inputModal">
            <input type="password" id="newPassword" placeholder="Nueva contraseña" class="inputModal">
        `;
        confirmBtn.onclick = () => {
            savePassword();
        };
    } 
    else if (action === "delete") {
        modalTitle.textContent = "Borrar Cuenta";
        modalBody.innerHTML = `
            <p>¿Estás seguro de que deseas eliminar tu cuenta? Esta acción es irreversible.</p>
        `;
        confirmBtn.onclick = () => {
            deleteAccount();
        };
    }

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
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

document.querySelector(".btn:nth-child(1)").addEventListener("click", () => openModal("name"));
document.querySelector(".btn:nth-child(2)").addEventListener("click", () => openModal("password"));
document.querySelector(".btn:nth-child(3)").addEventListener("click", () => openModal("delete"));
