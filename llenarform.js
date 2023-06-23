const { jsPDF } = window.jspdf;


function generarPDF(){
    const doc = new jsPDF();
    
    doc.text("hola", 10, 10);
    doc.save("probando.pdf");
}

const enviarReserva = document.getElementById("envRes");
enviarReserva.addEventListener("click", generarPDF);