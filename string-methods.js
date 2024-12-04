//STRING METHODS

// let text = "Hello world";
// text.split(" ");

// let text2 = "Bilguun";
// console.log(text2[0], text2[text2.length - 1]);

// let text3 = "Hello world";
// let replaced = text3.replace("world", "delhii");
// let replaced2 = text3.replace("l", "A");
// let replaced3 = text3.replaceAll("l", "A");
// console.log("replaced: ", replaced);
// console.log("replaced: ", replaced2);
// console.log("replaced: ", replaced3);

//Baby shark replace

// let defaultLyrics = ["Baby", "shark", "doo, doo, doo, doo, doo, doo."];
// let replaceWord = ["Mommy", "Daddy", "Grandma", "Grandpa", "Lets go hunt", "Run away", "Safe at last", "It's the end"];

// print4Lines = (arr) => {
//     for(let i=0; i<10; i++){
//         for(let j=0; j<3; j++){
//             console.log(defaultLyrics);
//         }
//         console.log(defaultLyrics[0], defaultLyrics[1]);
//         defaultLyrics[0] = replaceWord[i];
//     };
// }

// print4Lines(defaultLyrics);

// let firstWord = "Baby";
// let shark = "shark";
// let doodoo = "doo, doo, doo, doo, doo, doo."
// let replaceWord = ["Mommy", "Daddy", "Grandma", "Grandpa", "Lets go hunt", "Run away", "Safe at last", "It's the end"];

//     for(let i=0; i<9; i++){
//         for(let j=0; j<3; j++){
//             console.log(firstWord, shark, doodoo);
//         }
//         if(firstWord == "Baby" || firstWord == "Mommy" || firstWord == "Daddy" || firstWord == "Grandma", firstWord == "Grandpa") {console.log(firstWord, shark + "!")}
//         else console.log(firstWord + "!");
//         firstWord = firstWord.replace(firstWord, replaceWord[i]);
//     };

// let doodoo = "replace doo, doo, doo, doo, doo, doo."
// let replaceWord = ["Baby shark", "Mommy shark", "Daddy shark", "Grandma shark", "Grandpa shark", "Lets go hunt", "Run away", "Safe at last", "It's the end"];

//  replaceWord.map((arr) => {
//     line = doodoo.replace("replace", arr);
//         for(let j=0; j<3; j++){
//             console.log(line);
//         }
//         console.log(arr + "!")

//     });

// CHALLENGES -------------------------------------------------------------

// 1. INPUT: "Hello world! I am Fullstack Developer"
//    Ehendeh hamgiin urt ugiin olj hevleh
//    OUTPUT: "Fullstack"

let input = "Hello world! I am Fullstack Developer";
let arr = input.split(" ");
arr.sort((a, b) => {
  return b.length - a.length;
});
console.log(arr[0]);

// 2. INPUT: "Hello world! I am Fullstack Developer"
//    Hamgiin ehnii hamgiin suuliing ug hoyriin bairiig solij hevleh
//    OUTPUT: "Developer world! I am Fullstack Hello"

let input2 = "Hello world! I am Fullstack Developer";
let array = input2.split(" ");

let firstWord = array[0];
let lastWord = array[array.length - 1];

let ReplacedInput = input2.replace(lastWord, firstWord);
ReplacedInput = ReplacedInput.replace(firstWord, lastWord);
console.log(ReplacedInput);

// 3. Input: "97699123456"
//    Utasnii dugaariig formatalj zuv bolgoj haruulah
//    Output: "(976) 99123456"

let input3 = "97699123456";
phoneNum = input3.replace("976", "");
console.log("(976)", phoneNum);

// 4. Input: "I am fucking tired"

//    'fucking' Haraaliin ugiin censor hiih
//    Output: "I am **** tired"

let input4 = "I am fucking tired";
let censored = input4.replace("fucking", "***");
console.log(censored);
