
import { login } from '../../services/authService.js';

function goToRegister() {
    window.location.href = '../src/feature/SignUp/signUp.html';
}
document.getElementById('register').addEventListener('click', goToRegister);

async function handleSubmit(event) {
    event.preventDefault();

    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;

    try {
        const userData = await login(email, password);

        if (userData) {
            console.log("Inicio de sesión exitoso:", userData);
            window.location.href = '../src/feature/Reservation/reservation.html'; 
        } else {
            alert("Error en el inicio de sesión. Revisa tus credenciales.");
        }
    } catch (error) {
        console.error("Error en el inicio de sesión:", error);
    }
}

document.getElementById('loginForm').addEventListener('submit', handleSubmit);
