// //NIILBER----------------------------------------------------------------------
// function nemdegFunction(a, b) {
//   return a + b;
// }
// let niilber = nemdegFunction(14, 23);
// console.log("Niilber:", niilber);

// //YALGAVAR---------------------------------------------------------------------
// function hasdagFunction(a, b) {
//   return a - b;
// }
// let yalgavar = hasdagFunction(45, 23);
// console.log("Yalgavar:", yalgavar);

// //URJVER-----------------------------------------------------------------------
// function urjdegFunction(a, b) {
//   return a * b;
// }
// let urjver = urjdegFunction(16, 278);
// console.log("Urjver:", urjver);

// // NOOGDVOR--------------------------------------------------------------------
// function huvaadagFunction(a, b) {
//   return a / b;
// }
// let noogdvor = huvaadagFunction(16, 4);
// console.log("Noogdvor:", noogdvor);

// 1 - n hurtelh buh Prime toonuud oloh ---------------------------------------------

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function printPrimeNumbers(n) {
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

printPrimeNumbers(1003);

// FUNCTION ASHIGLASAN BODLOGUUD https://codeforwin.org/c-programming/for-do-while-loop-programming-exercises#list-of-loop-programming-exercises

// 1.
function numbersFunction(n) {
  for (i = 1; i <= n; i++) {
    console.log(i);
  }
}
numbersFunction(16);

// 2.
function reverseNumbersFunction(n) {
  for (i = n; i >= 1; i--) {
    console.log(i);
  }
}
reverseNumbersFunction(16);

// 4.
function evenNumbersFunction(n) {
  for (i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
evenNumbersFunction(100);

// function evenNumbersFunction(n1, n2) {
//   for (i = 1; i <= n1; i++) {
//     if (i % 2 == 0) {
//       console.log("n1", i);
//     }
//   }
//   for (i = 1; i <= n2; i++) {
//     if (i % 2 == 0) {
//       console.log("n2", i);
//     }
//   }
// }
// evenNumbersFunction(100, 10);

// 5.
function oddNumbersFunction(n) {
  for (i = 1; i <= n; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}
oddNumbersFunction(16);

// 6.
let sum = 0;
function sumNumbersFunction(n) {
  for (i = n; i >= 1; i--) {
    sum = sum + i;
  }
  return sum;
}
sumNumbersFunction(3);
console.log(sum);

// 7.
let sum1 = 0;
function sumEvenNumbersFunction(n) {
  for (i = n; i >= 1; i--) {
    if (i % 2 == 0) {
      sum1 = sum1 + i;
    }
  }
  return sum1;
}
sumEvenNumbersFunction(5);
console.log(sum1);

// 8.
let sum2 = 0;
function sumOddNumbersFunction(n) {
  for (i = n; i >= 1; i--) {
    if (i % 2 == 1) {
      sum2 = sum2 + i;
    }
  }
  return sum2;
}
sumOddNumbersFunction(5);
console.log(sum2);

// 9.
function multiplication(n) {
  for (i = 1; i <= n; i++) {
    console.log(n, "*", i, "=", n * i);
  }
}
multiplication(6);

// 10.
function counting(n) {
  return String(n).length;
}
let num = 121313;
console.log("Number of digits in", num, ":", counting(num));

// 11.
function firstAndLastDigit(n) {
    return String(n).length;
  }
  let num2 = 1213;
  console.log("Number of digits in", num2, ":", firstAndLastDigit(num2) / );

// 22.

function factorsOfNumber(n) {
  for (i = 1; i <= n; i++) {
    if (n % i == 0) console.log(i, "is factor of", n);
  }
}
factorsOfNumber(6);

// 23.

function factorialOfNumber(n) {
  let sum4 = 1;
  for (i = 1; i <= n; i++) {
    sum4 = sum4 * i;
  }
  return sum4;
}

console.log(factorialOfNumber(4));

// 26.
// PRIME NUMBER oloh function -----------------------------------------------------

function isPrime(n) {
  if (n <= 1) return false;

  // Check from 2 to n-1
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    } else {
      return true;
    }
  }
}

let check = isPrime(10);
console.log(check);

//
