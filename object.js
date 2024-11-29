// let student = {
//   name: "bata",
//   age: 15,
//   gender: "male",
//   grades: [78, 85, 91, 65, 67],
// };

// student.grades[2] = 95;
// console.log(student);

let students = [
  { name: "pata", age: 15, gender: "male" },
  { name: "tsetsgee", age: 21, gender: "female" },
  { name: "puntsag", age: 17, gender: "male" },
  { name: "dulma", age: 19, gender: "female" },
  { name: "boldo", age: 20, gender: "male" },
];

function findMales(arr) {
  let males = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender == "male" && arr[i].age >= 18) males.push(arr[i]);
  }
  return males;
}

// console.log(findMales(students));

// asd
function findStudentNameWithP(arr) {
  let studentWithP = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.slice(0, 1) == "p") studentWithP.push(arr[i]);
  }
  return studentWithP;
}
console.log(findStudentNameWithP(students));

// Suragchdiin dungiin dundajiig ol.
// Genderiin haritsaag ol (30% n eregtei 70% n emegtei)
// suragchdiin dundaj nasiig ol

let students1 = [
  { name: "Boldoo", age: 15, grades: [10, 20, 30, 90, 80], gender: "male" },
  { name: "Saraa", age: 14, grades: [70, 60, 85, 90, 75], gender: "female" },
  { name: "Tuvshuu", age: 16, grades: [55, 40, 75, 80, 90], gender: "male" },
  { name: "Anu", age: 15, grades: [95, 85, 70, 90, 88], gender: "female" },
  { name: "Enkhee", age: 17, grades: [50, 45, 60, 70, 80], gender: "male" },
  { name: "Temuulen", age: 14, grades: [60, 70, 90, 80, 95], gender: "male" },
  { name: "Nandin", age: 15, grades: [80, 85, 90, 75, 88], gender: "female" },
  { name: "Batsaikhan", age: 16, grades: [40, 50, 60, 70, 80], gender: "male" },
  { name: "Ariunaa", age: 14, grades: [75, 85, 95, 90, 80], gender: "female" },
  {
    name: "Zoljargal",
    age: 17,
    grades: [55, 65, 75, 85, 95],
    gender: "female",
  },
  { name: "Bat-Erdene", age: 15, grades: [40, 50, 60, 70, 80], gender: "male" },
  { name: "Uchral", age: 16, grades: [85, 90, 95, 88, 80], gender: "female" },
  { name: "Amaraa", age: 14, grades: [60, 70, 75, 85, 90], gender: "male" },
  { name: "Odnoo", age: 15, grades: [50, 60, 70, 80, 90], gender: "female" },
  { name: "Erdenee", age: 17, grades: [45, 55, 65, 75, 85], gender: "male" },
  { name: "Sukhbat", age: 14, grades: [90, 95, 88, 85, 80], gender: "male" },
  { name: "Gantulga", age: 16, grades: [40, 60, 70, 80, 90], gender: "male" },
  { name: "Tsolmon", age: 15, grades: [80, 85, 90, 95, 88], gender: "female" },
  { name: "Khuslen", age: 14, grades: [70, 75, 80, 85, 90], gender: "female" },
  { name: "Bayar", age: 17, grades: [60, 70, 80, 90, 95], gender: "male" },
];

function findOneStudentAverageGrade(arr) {
  let sum = 0;
  for (let i = 0; i < arr.grades.length; i++) {
    sum = sum + arr.grades[i];
  }
  let average = sum / arr.grades.length;
  return average;
}

function findAllStudentsAverage(arr) {
  let allAverage = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    allAverage.push(findOneStudentAverageGrade(students1[i]));
  }
  console.log(allAverage);
  for (let i = 0; i < arr.length; i++) {
    sum = sum + allAverage[i];
  }
  return sum / arr.length;
}

console.log(findAllStudentsAverage(students1));

//Genderiin haritsaag oloh

function findMale(arr) {
  let male = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender == "male") male++;
  }
  return male;
}

function findFemale(arr) {
  let female = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender == "female") female++;
  }
  return female;
}

function findProportion(arr) {
  let maleNum = findMale(students1);
  let femaleNum = findFemale(students1);
  let proportionMale = (maleNum * 100) / arr.length;
  let proportionFemale = (femaleNum * 100) / arr.length;
  console.log(proportionMale + "%", "ni eregtei");
  console.log(proportionFemale + "%", "ni emegtei");
}

findProportion(students1);

// suragchdiin dundaj nasiig oloh

function findAverageAge(arr) {
  let averageAge = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    averageAge.push(arr[i].age);
  }
  for (let i = 0; i < arr.length; i++) {
    sum = sum + averageAge[i];
  }
  return sum / arr.length;
}

console.log(findAverageAge(students1));
