function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num): void {
  //*void si no retorna nada
  console.log("Result: ", num);
  // return //*Esto es retornar undefined
}

printResult(add(5, 12)); //*Si se consoloea algo que no retorna una función, dara un tipo undefined

//* let someValue: undefined;
