// let nombre = prompt("Inserte su nombre:")

// console.log(nombre)

// let array0 = [0,1,2,3]
// for(let x=0; x<4; x++){
//     console.log(array[x])
// }

let personas = [
    {id:1, first_name:"trinidad",last_name:"silva", edad:19},
    {id:2, first_name:"agus",last_name:"edaliab", edad:19}
]

console.log(personas.length)
for(let i=0; i<personas.length; i++){
    console.log(personas[i].first_name)
    console.log(personas[i].id)
    personas[i].id = personas[i].id++
    console.log(personas[i].id)
}

console.table(personas)

let bd = JSON.stringify(personas)
console.log(bd)
// let array1 = [1,2,3]
// console.log(array1)
// console.log(array1[0]);

// const ARRAY2 = [1]
// //Metodos de arrays
// //POP : elimina el ultimo elemento
// array1.pop()

// //Push: añade un elemento al array

// array1.push(3.14)
// console.log(array1);

let nombreCompra = document.getElementById("name")
// nombreCompra.innerHTML= 

// onClick=