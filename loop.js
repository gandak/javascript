for (let i = 1; i < 101; i++) {
  console.log(i);
}

for (let i = 1; i < 101; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// for (let i = 1; i < 101; i=i+2) {
//       console.log(i+1);
//   }

for (let i = 100; i > 0; i = i - 2) {
  console.log(i - 1);
}

let n = 0;
for (let i = 1; i < 1001; i = i + 1) {
  n = n + i;
}
console.log(n);

for (let i = 0; i < 16; i++) {
  if (i == 0) {
    console.log(i, "is even");
  } else if (i % 2 == 0) {
    console.log(i, "is even");
  } else {
    console.log(i, "is odd");
  }
}

// Write a JavaScript program that iterates integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number and for
// multiples of five print "Buzz". For numbers multiples of both three
// and five print "FizzBuzz".

for (i = 1; i < 101; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i, "FizzBuzz");
  } else if (i % 3 == 0) {
    console.log(i, "Fizz");
  } else if (i % 5 == 0) {
    console.log(i, "Buzz");
  } else {
    console.log(i);
  }
}

let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(num, "*", i, "=", num * i);
}

// CODEFORWIN EXERCISES

// 6.
let sum = 0;
let n = 10;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log(sum);

// 7.
let sum = 0;
let n = 10;
for (let i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    sum = sum + i;
  }
}
console.log(sum);

// 8.
let sum = 0;
let n = 10;
for (let i = 1; i <= n; i++) {
  if (i % 2 == 1) {
    sum = sum + i;
  }
}
console.log(sum);

// 9.

let n = 8;
for (let i = 1; i <= 10; i++) {
  console.log(n, "*", i, "=", n * i);
}

// 10.
let num = 25321212;
let digit = 0;
for (let i = num; i > 0; i = Math.floor(i / 10)) {
  digit = digit + 1;
}
console.log(digit);

// 22.
let n = 55;
for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    console.log(i, "is factor of", n);
  }
}

// 23.
let n = 4;
let fact = 1;
for (let i = 1; i <= n; i++) {
  fact = fact * i;
}
console.log("Factorial of", n, "is", fact);

// 26

let n = 18;
let p = true;
for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    p = false;
  }
}
if (p) {
  console.log("This number is PRIME");
} else {
  console.log("This number is NOT PRIME");
}

//27

let n = 150;
let p;
for (i < 1; i < n; i++) {}
