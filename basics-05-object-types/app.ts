// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string] //* Tuple array especial con dos elementos
// } = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

const ADMIN = 0; //*Después de la declaración de enum, se puede cambiar el valor
// const READ_ONLY = 2;
// const AUTHOR = 2;

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
} //*Se les puede asignar en este objeto tipo enum

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin"); //!Para push no se asigna un error, hay que tener en cuenta
// person.role[1] = 10;

// person.role = [0, "admin", "user"];

let favoriteActivities: string[];
// let favoriteActivities: any[]; // * any[] para cualquier tipo de dato, evitarlo para no tener error de tipos
// let favoriteActivities: any[];
// favoriteActivities = ["Sports", 1];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hoby of person.hobbies) {
  console.log(hoby.toUpperCase());
  // console.log(hoby.map()); // !!! ERROR !!!
}
if (person.role === Role.AUTHOR) {
  console.log("author");
}
