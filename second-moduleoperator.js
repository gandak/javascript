let too = 22;
if (too % 7 == 0) {
  if (too % 11 == 0) {
    console.log("too 2uuland ni huvaagdana");
  } else {
    console.log("too 7d huvaagdah ch 11-d huvaagdahgui");
  }
} else {
  if (too % 11 == 0) {
    console.log("too 7-d huvaagdahgui ch 11-d huvaagdana");
  } else {
    console.log("too 7-d ch huvaagdahgui 11-d ch huvaagdahgui");
  }
}

const ners = ["Bold", "Dorj", "Bataa", "Ganaa"];
for (x of ners) {
  console.log(x);
}

//Bodlogo 1
let applePrice = 1.5;
let bananaPrice = 0.8;
console.log("Total cost is: ", 3 * applePrice + 2 * bananaPrice + "$");

//Bodlogo 2
let x = -2501;
if (x % 2 == 0) {
  if (x > 0) {
    console.log("x is even and positive");
  } else {
    console.log("x is even and negative");
  }
} else {
  if (x < 0) {
    console.log("x is odd and negative");
  } else {
    console.log("x is odd and positive");
  }
}

//Bodlogo 3

let username = "admin";
let password = 12345;
if (username == "admin" && password == 12345) {
  console.log("login successful!");
} else {
  console.log("Login failed!");
}

// Bodlogo 4

let age = 12;
if (age < 13) {
  console.log("Child");
} else {
  if (age >= 13 && age <= 19) {
    console.log("Teenager");
  } else {
    console.log("Adult");
  }
}

//Bodlogo 5

let num1 = 12;
let num2 = 36;
console.log(num1, "+", num2, "=", num1 + num2);
console.log(num1, "-", num2, "=", num1 - num2);
console.log(num1, "*", num2, "=", num1 * num2);
console.log(num1, "/", num2, "=", num1 / num2);

//Bodlogo 6

let value = false;
if (value) {
  console.log("Value is true");
} else {
  console.log("value is false");
}

//Bodlogo 7

let celcius = 10;
console.log("F=", celcius * 1.4 + 32);

//Bodlogo 8

// let year = 2100;
// if (year % 4 == 0) {
//   if (year % 400 != 0 && year % 100 == 0) {
//     console.log("undur jil bish");
//   }
//   if (year % 400 == 0) {
//     console.log("undur jil");
//   }
//   if (year % 400 != 0 && year % 100 != 0) {
//     console.log("undur jil4");
//   }
// } else {
//   console.log("undur jil bishhh");
// }

let year = 2400;
if (year % 400 == 0) {
  console.log("undur jil 400");
} else {
  if (year % 100 == 0) {
    console.log("undur jil bish100");
  } else {
    if (year % 4 == 0) {
      console.log("undur jil4");
    } else {
      console.log("undur jil bishhh");
    }
  }
}

// let year=2024;
// if(year % 400 == 0){
//   console.log("undur jil 400");
// }
// if(year % 100){

// }

//Bodlogo 9

let a = 1.3;
let b = 0.5;
let c = 1.1;
if (a > b) {
  if (b < c) {
    console.log("Smallest number is b");
  } else {
    console.log("Smallest number is c");
  }
} else {
  if (a < c) {
    console.log("Smallest number is a");
  } else {
    console.log("Smallest number is c");
  }
}
