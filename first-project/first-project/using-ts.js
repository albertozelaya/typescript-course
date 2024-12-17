const button = document.querySelector("button");
const input1 = document.getElementById("num1"); //* El ! al final, indica que siempre encontrara un elemento
const input2 = document.getElementById("num2");
const form = document.getElementById("form");

//* El as es para decirle el tipo de elemento que seria
function add(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return +num1 + +num2;
  }
}
button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value)); //*input.value es SIEMPRE un string
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
});
