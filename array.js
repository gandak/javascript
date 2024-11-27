function sumOfAges(ages) {
  let sum = 0;
  for (let i = 0; i < ages.length; i++) {
    sum = sum + ages[i];
  }
  return sum;
}
let answer = sumOfAges([10, 20, 30, 12, 34, 54]);
console.log(answer);

function sumOfAges(ages) {
  let sum = 0;
  for (let i = 0; i < ages.length; i++) {
    sum = sum + ages[i];
  }
  return sum / ages.length;
}
let answer2 = sumOfAges([10, 20, 30, 12, 34, 54]);
console.log(answer);

let ages = [10, 40, 30, 12, 34, 54];
function findSumOfAges(ages) {
  let sum = 0;
  for (let i = 0; i < ages.length; i++) {
    sum = sum + ages[i];
  }
  return sum;
}
function findAverageOfAges(ages) {
  let sum = findSumOfAges(ages);
  return sum / ages.length;
}
console.log("Average of Ages is: ", findAverageOfAges(ages));

//Array dotorh hamgiin baga utga oloh

let numbers = [123, 1231, 312, 23, 22, 435, 6546];
let minNum = numbers[0];
function minNumber(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (minNum > numbers[i]) minNum = numbers[i];
  }
  return minNum;
}

console.log(minNumber(numbers));

//Array dotorh hamgin baga gehdee songdoi toog ol

let numbers2 = [123, 1231, 312, 23, 11, 435, 6546];
let minOddNum = numbers2[0];
function minOddNumber(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (minOddNum > numbers2[i] && numbers2[i] % 2 == 1)
      minOddNum = numbers2[i];
  }
  return minOddNum;
}

console.log(minOddNumber(numbers2));

//Array dotorh hamgiin ih tegsh too

let numbers3 = [12380, 1231, 312, 23, 11, 435, 6546];
let maxEvenNum = numbers3[0];
function minEvenNumber(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (maxEvenNum < numbers3[i] && numbers3[i] % 2 == 0)
      maxEvenNum = numbers3[i];
  }
  return maxEvenNum;
}

console.log(minEvenNumber(numbers3));
