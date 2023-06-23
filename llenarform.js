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
    const workshop = document.getElementById("opciones-workshops").value; 
    const mesPreferencia = document.getElementById("opciones-mes").value;
    
    const cliente = {
        name,
        lastname,
        cellphone,
        mail,
        workshop,
        mesPreferencia
    };
    
    listaClientes.push(cliente);
    
    localStorage.setItem("clientes", JSON.stringify(listaClientes));
}

function generarPDF() {
    const doc = new jsPDF("p", "mm", "a4");

    const logoFoto = document.getElementById("logo");
    const logoURL = logoFoto.src;

    const logo = new Image();
    logo.onload = function () {
        const logoWidth = 40;
        const logoHeight = 40;
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const logoX = (pageWidth - logoWidth) / 2;
        const logoY = 10;

        doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
        doc.setLineWidth(0.3);
        doc.line(10, 60, pageWidth - 10, 60);

        doc.setFontSize(16);
        doc.text("Comprobante de reserva:", 10, 75);

        const name = document.getElementById("nameRes").value;
        const lastname = document.getElementById("lastnameRes").value;
        const cellphone = document.getElementById("cellRes").value;
        const mail = document.getElementById("emailRes").value;
        const workshop = document.getElementById("opciones-workshops").value;
        const mesPreferencia = document.getElementById("opciones-mes").value;

        const content = `Nombre: ${name}\nApellido: ${lastname}\nCelular: ${cellphone}\nCorreo electrónico: ${mail}\nWorkshop: ${workshop}\nFecha: ${mesPreferencia}`;
        doc.setFontSize(12);
        doc.text(content, 10, 85);

        doc.setFontSize(12);
        let pasosY = 120;
        doc.text("Información necesaria para realizar la seña:", 10, pasosY);
        pasosY += 10;
        doc.setFontSize(10);
        doc.text("1. Una vez enviada la reserva, se le enviará por Whatsapp los datos bancarios para finalizar el pago.", 15, pasosY);
        pasosY += 7;
        doc.text("2. Seleccione el medio de pago y una vez realizado, envíe el comprobante al contacto que se comunicó con usted.", 15, pasosY);
        pasosY += 7;
        doc.text("3. Tiene hasta 48hs para pagar la seña. Caso contrario, se liberará el cupo y perderá su lugar en el Workshop.", 15, pasosY);

        const agradecimientoX = 10;
        const agradecimientoY = pasosY + 15;
        doc.setFontSize(12);
        doc.text("¡Muchas gracias por confiar en nosotras!", agradecimientoX, agradecimientoY);
        doc.text("Nos estaremos comunicando con vos próximamente.", agradecimientoX, agradecimientoY + 7);
        doc.text("de la Vega makeup Studio", agradecimientoX, agradecimientoY + 15);

        const footerY = pageHeight - 40;
        doc.setLineWidth(0.3);
        doc.line(10, footerY, pageWidth - 10, footerY);

        const direccionX = pageWidth / 2;
        const direccionY = footerY + 15;
        doc.setFontSize(10);
        doc.text("República de Eslovenia 1985, Cañitas", direccionX, direccionY, { align: "center" });
        doc.text("Teléfono: 11-5400-0706", direccionX, direccionY + 5, { align: "center" });

        doc.save("Reserva.pdf");
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