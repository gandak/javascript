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
console.log("Number of digits in", num2, ":", firstAndLastDigit(num2));

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

// 4 toonii ihiig oloh

const durvunToo = (a, b, c, d) => {
  if (a >= b && a >= c && a >= d) return a;
  if (b >= a && b >= c && b >= d) return b;
  if (c >= a && c >= b && c >= d) return c;
  return d;
};
console.log(durvunToo(10, 7, 10, 8));

// Undur jil oloh function

const year = (year) => {
  if (year % 4 == 0) {
    if (year % 400 != 0 && year % 100 == 0) return false;
    if (year % 400 == 0) return true;
    if (year % 400 != 0 && year % 100 != 0) return true;
  }
  return false;
};
console.log(year(2003));

const year2 = (year) => {
  if (year % 400 == 0) return true;
  if (year % 100 == 0) return false;
  if (year % 4 == 0) return true;
  return false;
};
console.log(year2(2400));

// GCD - Hamgiin ih huvaagch

const min = (a, b) => {
  if (a >= b) return b;
  return a;
};

const gcd = (a, b) => {
  let m = min(a, b);
  while (true) {
    //esvel while(1) esvel while(m >= 1))
    if (a % m === 0 && b % m === 0) return m;
    m--;
  }
};
console.log(gcd(10, 5));

//Array hamgiin ih utga oloh

const arr = [-4, -5, -1, -40];

const max = (numbers) => {
  let m = arr[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > m) m = numbers[i];
  }

  return m;
};

console.log(max(arr));

function multiples(a, b) {
  let sum = 0;

  for (let i = 1; i < 10; i++) {
    if (a * i < 10) sum = sum + a * i;
    if (b * i < 10) sum = sum + b * i;
  }
  return sum;
}

let niilber = multiples(3, 5);
console.log(niilber);

function sumOfMultiples(number) {
  var result = 0;

  for (let i = 0; i < number; i++) {
    if (i % 5 == 0 || i % 3 == 0) {
      result += i;
    }
  }

  return result;
}
console.log(sumOfMultiples(10));
console.log(sumOfMultiples(1000));

// SUM OF EVEN FIBONACCO NUMBERS

function fibonacci(number) {
  let x = [];
  x[0] = 1;
  x[1] = 2;
  let sum = x[0] + x[1];
  for (i = 2; i < number; i++) {
    x[i] = x[i - 2] + x[i - 1];
    if (x[i] % 2 == 0) {
      sum = sum + x[i];
    }
  }
  return sum;
}

console.log(fibonacci(8));

GATSUUR;
let od = "";
function gatsuur(number) {
  for (let i = 0; i < number; i++) {
    od = od + "*";
    console.log(od);
  }
}

gatsuur(5);

//    *
//   ***
//  *****
// *******
//*********

//PYRAMID GATSUUR

// function pyramid(num) {
//   for (let j = 0; j < 3; j++) {
//     let str = "";
//     for (let i = 0; i < num - j - 1; i++) {
//       str = str + " ";
//     }
//     for (let i = 0; i < j * 2 + 1; i++) {
//       str = str + "*";
//     }
//     console.log(str);
//   }
// }

// pyramid(3);

// RHOMBUS STAR PATTERN
//     *****
//    *****
//   *****
//  *****
// *****

function pyramidRhombus(num) {
  for (let j = 0; j < num; j++) {
    let str = "";
    for (let i = 0; i < num - j; i++) {
      str = str + " ";
    }
    for (let i = 0; i < num; i++) {
      str = str + "*";
    }
    console.log(str);
  }
}

pyramidRhombus(5);

// HOLLOW RHOMBUS STAR PATTERN
//     *****
//    *   *
//   *   *
//  *   *
// *****

function pyramidHollowRhombus(num) {
  for (let j = 0; j < num; j++) {
    let str = "";
    for (let i = 0; i < num - j; i++) {
      str = str + " ";
    }
    for (let i = 0; i < num; i++) {
      if (j == 0 || j == num - 1 || i == 0 || i == num - 1) str = str + "*";
      else str = str + " ";
    }
    console.log(str);
  }
}

pyramidHollowRhombus(5);

//3 toonii iheesee 2 dahi buyu dundah toog oloh

function dundahToo(a, b, c) {
  if ((a >= b && a <= c) || (a >= c && a <= b)) return a;
  if ((b >= a && b <= c) || (b >= c && b <= a)) return b;
  if ((c >= a && c <= b) || (c >= b && c <= a)) return c;
}

console.log(dundahToo(8, 5, 10));

// Fizz buzz too hevleh
function fizzFunction(number) {
  for (i = 1; i <= number; i++) {
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
}

fizzFunction(15);
