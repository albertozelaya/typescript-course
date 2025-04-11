let userInput: unknown; //* Se desconoce su tipo, no garantiza que sera un tipo u otro, any es como "haz lo que quieras"
let userName: string; //*No se lo que habrá, pero se que habrá algo en ello

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") userName = userInput; //* Aquí se garantiza que sea string

function generateError(message: string, code: number): never { //*Que nunca retorna nada, ni en el console log
  throw { message: message, errorCode: code }; //* throw tira un error y detiene la ejecución
}

const error = generateError("An error occurred", 500)
console.log("🚀 ~ error:", error)
console.log("ey");