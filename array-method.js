let numbers = [
  23, 4324, 54, 45, 6452, 2342, 435, 234, 2346, 7, 8, 5, 2, 11, 23, 123, 23,
];

function findEvenNum(arr) {
  let evenNums = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) evenNums.push(arr[i]);
  }
  return evenNums;
}

console.log(findEvenNum(numbers));

let txt = "Bi Mongol ulsiin irgen bilee";
let x = txt.slice(0, 1);
console.log(x);

let txt2 = "Hello World";
txt2 = txt2.replace("Hello", "Welcome");
console.log(txt2);

//Orlogo zarlagiig oloh function

let transaction = [
  25000, -12344, 3234234, -34432, 3344, 1200, -223, 550, -12400,
];

function findIncome(arr) {
  let income = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) income.push(arr[i]);
  }
  return income;
}

function findExpense(arr) {
  let expense = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) expense.push(arr[i]);
  }
  return expense;
}

console.log("Tanii orlogo: ", findIncome(transaction));
console.log("Tanii zarlaga: ", findExpense(transaction));
