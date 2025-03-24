import { signup } from '../../services/authService.js';

function goToLogin(){
    window.location.href = '../../index.html';
}

document.getElementById('login').addEventListener('click', goToLogin);

async function handleSubmit(event) {
    event.preventDefault();

    const id = document.getElementById('inputId').value; 
    const name = document.getElementById('inputName').value; 
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value; 

    const userData = { id, name, email, password };

    try {
        const newUser = await signup(userData);

        if (newUser) {
            console.log("Registro exitoso:", newUser);
            window.location.href = '../src/feature/Reservation/reservation.html';
        } else {
            alert("Error en el registro. Verifica los datos.");
        }
    } catch (error) {
        console.error("Error durante el registro:", error);
    }
}

document.getElementById('signupForm').addEventListener('submit', handleSubmit);