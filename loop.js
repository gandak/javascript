// for (let i = 1; i < 101; i++) {
//   console.log(i);
// }

// for (let i = 1; i < 101; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i < 101; i=i+2) {
//       console.log(i+1);
//   }

// for (let i = 100; i > 0; i = i - 2) {
//   console.log(i - 1);
// }

// let n = 0;
// for (let i = 1; i < 1001; i = i + 1) {
//   n = n + i;
// }
// console.log(n);

// for (let i = 0; i < 16; i++) {
//   if (i == 0) {
//     console.log(i, "is even");
//   } else if (i % 2 == 0) {
//     console.log(i, "is even");
//   } else {
//     console.log(i, "is odd");
//   }
// }

// Write a JavaScript program that iterates integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number and for
// multiples of five print "Buzz". For numbers multiples of both three
// and five print "FizzBuzz".

// for (i = 1; i < 101; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i, "FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log(i, "Fizz");
//   } else if (i % 5 == 0) {
//     console.log(i, "Buzz");
//   } else {
//     console.log(i);
//   }
// }

// let num = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(num, "*", i, "=", num * i);
// }

// CODEFORWIN EXERCISES

// 6.
// let sum = 0;
// let n = 10;
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// 7.
// let sum = 0;
// let n = 10;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

// 8.
// let sum = 0;
// let n = 10;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 1) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

// 9.

// let n = 8;
// for (let i = 1; i <= 10; i++) {
//   console.log(n, "*", i, "=", n * i);
// }

// 10.
// let num = 253212;
// let digit = 0;
// for (let i = num; i > 0; i = Math.floor(i / 10)) {
//   digit = digit + 1;
// }
// console.log(digit);

// .14
// let num = 2431;
// let sum = 0;
// let x = 0;
// while (num != 0) {
//   sum = sum + (num % 10);
//   num = Math.floor(num / 10);
// }
// console.log(sum);

// 22.
// let n = 24;
// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     console.log(i, "is factor of", n);
//   }
// }

// 23.
// let n = 4;
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//   fact = fact * i;
// }
// console.log("Factorial of", n, "is", fact);

// 26

// let n = 18;
// let p = true;
// for (let i = 2; i < n; i++) {
//   if (n % i == 0) {
//     p = false;
//   }
// }
// if (p) {
//   console.log("This number is PRIME");
// } else {
//   console.log("This number is NOT PRIME");
// }

//27

// let n = 150;
// let p;
// for (i < 1; i < n; i++) {}

let udur = 4;
// if(udur == 1){
//   console.log("Unuudur davaaa garag baina")
// }
// if(udur == 2){
//   console.log("Unuudur myagmar garag baina")
// }
// if(udur == 3){
//   console.log("Unuudur lhagva garag baina")
// }
// if(udur == 4){
//   console.log("Unuudur purev garag baina")
// }
// if(udur == 5){
//   console.log("Unuudur baasan garag baina")
// }
// if(udur == 6){
//   console.log("Unuudur byamba garag baina")
// }
// if(udur == 7){
//   console.log("Unuudur nyam garag baina")
// }

//Array jishee

let weekday = Array(8);
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
weekday[7] = "Sunday";

let input = 5;

for (i = 1; i <= 7; i++) {
  if (input == i) {
    console.log("Today is " + weekday[i]);
  }
}

// let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351
// let sum1 = 0;
// let sum2 = 0;
// let sumofarr1;
// let sumofarr2;
// for (i = 0; i < 11; i++) {
//   sum1 = sum1 + arr_1[i];
//   sum2 = sum2 + arr_2[i];
// }
// console.log(sum1, "+", sum2, "=", sum1 + sum2);

// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// for(i=8; i>=0; i--){
// console.log(arr[i])
// }

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
let reverseArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
for (i = 8; i >= 0; i--) {
  j = i-
    reverseArr[j] = arr[i];
}
console.log(reverseArr);

let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];
let sum = [0, 0, 0];
for (i = 0; i < arr_3.length; i++) {
  sum[i] = arr_3[i] + arr_4[i];
}
console.log(sum);
