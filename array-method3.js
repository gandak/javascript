// FIND, SPREAD METHOD

// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];

// let foundItem = inventory.find((fruit) => {
//   return fruit.name === "apples";
// });
// console.log("Tanii haisan ym", foundItem);

// html-d oruulj uzeh

// const inventory2 = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];
// let search = prompt("Ta haih ymaa oruulnuu");
// let foundItem2 = inventory.find((fruit) => {
//   return fruit.name === search;
// });
// console.log("Tanii haisan ym", fountItem);

// SPREAD OPERATOR

// let numbers = [3, 5, 6, 2, 1];
// let numbers2 = [4, 6, 1, 10, 23];

// //Hamgiin ih toog ol

// let allNumbers = [...numbers, ...numbers2];
// let max = allNumbers[0];
// allNumbers.map((number) => {
//   if (max < number) {
//     max = number;
//   }
// });
// console.log(max);
// let person = { name: "Bilguun", age: 21 };
// let employee = { ...person, gender: "male", skill: "js" };
// console.log(employee);

// TASK

const names = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 25 },
  { name: "John", age: 30 },
  { name: "Jane", age: 35 },
  { name: "Joe", age: 40 },
];
const names2 = [
  { name: "Andy", age: 20 },
  { name: "Bilguun", age: 25 },
  { name: "Jargalmaa", age: 30 },
  { name: "Anguuch", age: 35 },
  { name: "Mah", age: 40 },
  { name: "Chinguun", age: 45 },
];

// 1. FIND FIRST PERSON THAT NAME STARTS WITH 'C'

allNames = [...names, ...names2];

let nameWithC = allNames.find((arr) => {
  if (arr.name[0] == "C") return arr;
});
console.log(nameWithC);

// 2. FIND FIRST PERSON THAT OLDER THAN 25
let olderPersons = allNames.find((arr) => {
  if (arr.age >= 25) return arr;
});
console.log(olderPersons);
