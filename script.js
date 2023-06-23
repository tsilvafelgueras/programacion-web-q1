// console.log(personas.length)
// for(let i=0; i<personas.length; i++){
//     console.log(personas[i].first_name)
//     console.log(personas[i].id)
//     personas[i].id = personas[i].id++
//     console.log(personas[i].id)
// }

// console.table(personas)

// let bd = JSON.stringify(personas)
// console.log(bd)
// let array1 = [1,2,3]
// console.log(array1)
// console.log(array1[0]);

// const ARRAY2 = [1]
// //Metodos de arrays
// //POP : elimina el ultimo elemento
// array1.pop()


// array1.push(3.14)
// console.log(array1);

// let nombreCompra = document.getElementById("name")
// // nombreCompra.innerHTML= 

let almacenar = document.getElementById("enviarDatos");
almacenar.addEventListener("click", guardar);

function guardar() {
  console.log("funcione");
}

// window.onload = function cargarDatos() {
//   // Resto del código para cargar los datos del localStorage en los campos
//     document.getElementById("name").value = localStorage.getItem("name");
//     document.getElementById("lastname").value = localStorage.getItem("lastname");
//     document.getElementById("cellphone").value = localStorage.getItem("cellphone");
//     document.getElementById("mail").value = localStorage.getItem("mail");
//     document.getElementById("consultbox").value = localStorage.getItem("consultbox");
// }

let dat = document.getElementById("enviarDatos");
dat.addEventListener("click", sendDatos);

function guardar(){
    console.log("funcione")
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let cellphone = document.getElementById("cellphone").value;
    let mail = document.getElementById("mail").value;
    let consultbox = document.getElementById("consultbox").value;
    localStorage.setItem("name", name);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("cellphone", cellphone);
    localStorage.setItem("mail", mail);
    localStorage.setItem("consultbox", consultbox);
}

document.getElementById("enviarDatos").addEventListener("click", sendDatos);

function sendDatos(){
    alert("¡Gracias por enviar tu consulta! Te estaremos respondiendo en breve a través del mail ingresado.");
}