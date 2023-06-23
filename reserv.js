const reservAutomaqButton = document.getElementById("reservAutomaq");
const reservOne2oneButton = document.getElementById("reservOne2one");
const reservBridesButton = document.getElementById("reservBrides");

reservAutomaqButton.addEventListener("click", function() {
  confirmarReserva("Automakeup");
});

reservOne2oneButton.addEventListener("click", function() {
  confirmarReserva("One to One");
});

reservBridesButton.addEventListener("click", function() {
  confirmarReserva("Brides");
});

function confirmarReserva(taller) {
  const confirmReserva = confirm("¿Deseas confirmar tu reserva para el workshop " + taller + "?");
    if (confirmReserva){
        window.location.href = "reservas.html";
    } else{
        alert("Se eligió no realizar la reseva. Podrás seguir investigando sobre nuestras opciones de Workshops.")
    }
}
