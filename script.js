// Clasificación de frutas

let index = 0;
let index2 = 0;

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
    { nombre: "Limón", esCitrica: true }
  ];

  // Contador
total = frutas.length;
console.log("Total de frutas: ", total);

while (index <= frutas.length-1) {
    if (frutas[index].esCitrica === true) {
        index2++
    }
    
    index++;   
}

console.log("Número de frutas cítricas: ", index2);