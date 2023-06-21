// Obtener una referencia a los botones "Reservar"
const reservAutomaqButton = document.getElementById("reservAutomaq");
const reservOne2oneButton = document.getElementById("reservOne2one");
const reservBridesButton = document.getElementById("reservBrides");

// Agregar un controlador de eventos a cada botón
reservAutomaqButton.addEventListener("click", function() {
  confirmarReserva("Automakeup");
});

reservOne2oneButton.addEventListener("click", function() {
  confirmarReserva("One to One");
});

reservBridesButton.addEventListener("click", function() {
  confirmarReserva("Brides");
});

// Función para mostrar el alert de confirmación
function confirmarReserva(taller) {
  const confirmReserva = confirm("¿Deseas confirmar tu reserva para el workshop " + taller + "?");
    if (confirmReserva){
        window.location.href = "reservas.html";
    } else{
        alert("Se eligió no realizar la reseva. Podrás seguir investigando sobre nuestras opciones de Workshops.")
    }
  // Resto del código para redireccionar si se confirma la reserva
}
