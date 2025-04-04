enum Role { //*number 0, n1, n2
  ADMIN = "ADMIN", //0 //*Por defecto se ponen como numerales incrementales
  READ_ONLY = 100, //1
  AUTHOR = "AUTHOR", //2
} //*Se les puede asignar en este objeto tipo enum, y se ponen los valores como =

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!');
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
