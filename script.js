// Clasificación de frutas

let index = 0;
let index2 = 0;
let index4 = 0;

const frutas = [
    { nombre: "Manzana", esCitrica: false },
    { nombre: "Banana", esCitrica: false },
    { nombre: "Naranja", esCitrica: true },
    { nombre: "Manzana", esCitrica: false },
    { nombre: "Pera", esCitrica: false },
    { nombre: "Limón", esCitrica: true },
    { nombre: "Uva", esCitrica: false },
    { nombre: "Naranja", esCitrica: true },
    { nombre: "Fresa", esCitrica: false },
    { nombre: "Limón", esCitrica: true },
    { nombre: "Piña", esCitrica: false },
    { nombre: "Papaya", esCitrica: false },
    { nombre: "Mandarina", esCitrica: true },
    { nombre: "Mango", esCitrica: false },
    { nombre: "Granada", esCitrica: false },
    { nombre: "Cereza", esCitrica: false },
    { nombre: "Kiwi", esCitrica: true },
    { nombre: "Melón", esCitrica: false },
    { nombre: "Coco", esCitrica: false },
    { nombre: "Frambuesa", esCitrica: false }
  ];

  // Contador while
total = frutas.length;
console.log("Total de frutas: ", total);

while (index <= frutas.length-1) {
    if (frutas[index].esCitrica === true) {
        index2++
    }
    
    index++;   
}

console.log("Número de frutas cítricas (while): ", index2);


//Contador For

for (let index3 = 0; index3 <= frutas.length-1; index3++) {
    if (frutas[index3].esCitrica === true) {
        index4++
    }
}

console.log("Número de frutas cítricas (for): ", index4);