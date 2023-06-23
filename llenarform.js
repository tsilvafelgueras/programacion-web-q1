const { jsPDF } = window.jspdf;

const enviarReserva = document.getElementById("envRes");
enviarReserva.addEventListener("click", generarPDF);
enviarReserva.addEventListener("click", guardar);

let listaClientes = [];

function guardar(){
    console.log("funcione");
    const name = document.getElementById("nameRes").value;
    const lastname = document.getElementById("lastnameRes").value;
    let cellphone = document.getElementById("cellRes").value;
    let mail = document.getElementById("emailRes").value;
    
    const cliente = {
        name,
        lastname,
        cellphone,
        mail
    };
    
    listaClientes.push(cliente);
    
    localStorage.setItem("clientes", JSON.stringify(listaClientes));
}

function generarPDF() {
    const doc = new jsPDF();

    // Obtener la imagen del logotipo desde un elemento HTML
    const logoElement = document.getElementById("logo");
    const logoURL = logoElement.src;

    // Cargar el logotipo como imagen
    const logo = new Image();
    logo.onload = function() {
        // Logo
        doc.addImage(logo, "PNG", 10, 10, 40, 40);

        // Línea separadora
        doc.setLineWidth(0.3);
        doc.line(10, 60, 200, 60);

        // Título
        doc.setFontSize(16);
        doc.text("Comprobante de reserva", 10, 75);

        // Contenido con nombre y datos del cliente
        const name = document.getElementById("nameRes").value;
        const lastname = document.getElementById("lastnameRes").value;
        const cellphone = document.getElementById("cellRes").value;
        const mail = document.getElementById("emailRes").value;

        const content = `Nombre: ${name}\nApellido: ${lastname}\nTeléfono: ${cellphone}\nCorreo electrónico: ${mail}`;
        doc.setFontSize(12);
        doc.text(content, 10, 85);

        // Pasos para señar la reserva
        doc.setFontSize(14);
        const pasosX = 10;
        let pasosY = 120;
        doc.text("Pasos para señar la reserva", pasosX, pasosY);
        doc.setFontSize(12);
        pasosY += 12;
        doc.text("1. Realizar un depósito", pasosX + 5, pasosY);
        pasosY += 7;
        doc.text("2. Confirmar la fecha", pasosX + 5, pasosY);
        pasosY += 7;
        doc.text("3. Firmar el contrato", pasosX + 5, pasosY);

        // Línea como footer
        doc.setLineWidth(0.3);
        const footerY = 200;
        doc.line(10, footerY, 200, footerY);

        doc.save("reserva.pdf");
    };
    logo.src = logoURL;
}

//     const name = document.getElementById("nameRes").value;
//     const lastname = document.getElementById("lastnameRes").value;
//     const cellphone = document.getElementById("cellRes").value;
//     const mail = document.getElementById("emailRes").value;
    
//     const content = `Nombre: ${name}\nApellido: ${lastname}\nTeléfono: ${cellphone}\nCorreo electrónico: ${mail}`;
    
//     doc.text(content, 10, 10);
//     doc.save("reserva.pdf");
// }

