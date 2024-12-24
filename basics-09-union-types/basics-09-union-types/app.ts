//? Union Types
function combine(input1: number | string, input2: number | string, resultConversion: "as-number" | "as-text") {
  //*literals son valores concretos
  //*Si se ponen los parámetros, se debe poner la lógica que maneje ambos tipos
  //* Se declaran los tipos dentro de funciones o variables, no directamente a menos que sea let
  let result: string | number;
  if ((typeof input1 === "number" && typeof input2 === "number") || resultConversion === "as-number") {
    //*se puede añadir un runtime , validación
    result = +input1 + +input2; //*Se puede asignar string|number|object cuantos se quiera, se garantiza que son números
  } else {
    result = input1.toString() + input2.toString(); //*convertir a string
  }
  return result;
  // if (resultConversion === "as-number") {
  //   return Number(result);
  // } else {
  //   return String(result);
  // }
}
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log("🚀 ~ combinedStringAges:", combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log("🚀 ~ combinedNames:", combinedNames);
//* Arrays types string[] | number[] | boolean[]
//* tuples [number, string]
//* Object types {name: string, age: number, hobbies: string[]}
//* Any types any[] | any evitar su uso

//?Literal types

// const arrayoso = [{name: "Mx"}, {name: "Al"}];
// const ordenado = arrayoso.sort((a, b) => (a.name > b.name ? 1 : -1)); //*si es mayor alfabéticamente
// const arrayoso = [1, 9, 4, 2];
// const ordenado = arrayoso.sort((a, b) => a - b); //*si es mayor alfabéticamente, originalmente de menor a mayor
// console.log(ordenado);
// const productos = [
//   { nombre: "Mouse", precio: 50 },
//   { nombre: "Teclado", precio: 50 },
//   { nombre: "Monitor", precio: 200 },
//   { nombre: "Laptop", precio: 1000 },
// ];
// const resultado = productos.sort((a, b) => {
//   if (a.precio === b.precio) return a.nombre > b.nombre ? 1 : -1;
//   return a.precio - b.precio;
// });
// console.log(resultado);

// const ejer = [1, 2, 3, 4, 756, 4];
// console.log(Math.max(...ejer)); //*Para pasar solo los valores
