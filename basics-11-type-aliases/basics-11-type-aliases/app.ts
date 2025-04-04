type Combinable = number | string; //* type keyword is usado solo en ts, no js, se ponen los tipos posibles, union types o normales
type ConversionDescriptor = "as-number" | "as-text"; //* literal types
//* type User = { name: string; age: number }; //* object types
function combine(
  // prettier-ignore
  input1: number | string,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result : Combinable;
  if ((typeof input1 === "number" && typeof input2 === "number") || resultConversion === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + " " + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
