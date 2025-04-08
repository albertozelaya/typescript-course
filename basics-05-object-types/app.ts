function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num): void {
  //*void si no retorna nada
  console.log("Result: ", num);
  // return //*Esto es retornar undefined
}

//*void es que se va a ignorar si retorna algo, no se hará nada con ese return

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12)); //*Si se consoloea algo que no retorna una función, dara un tipo undefined

//* let someValue: undefined;
let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = 5;
// combineValues = printResult;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => console.log("Resultado: \t", result));
