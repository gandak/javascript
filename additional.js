const util = require("util");
let students = [
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
]; // tsaash n urgeljluuleed 20 oor suragch bolgoj orgojuul

// const getGrades = (students) => students.map((student) => student.grades);
// console.log(getGrades(students));

// const getMaleStudents = (students) =>
//   students.filter((student) => student.gender == "male");
// console.log(getMaleStudents(students));

// const getStudentsWithB = (students) =>
//   students.filter((student) => student.name[0] == "B");
// console.log(getStudentsWithB(students));

// const getStudentsIncludesB = (students) =>
//   students.filter((student) => student.name.toLowerCase().includes("b"));
// console.log(getStudentsIncludesB(students));

//get students that their name length is longer than 5 characters
// const getStudentsNameLongerThan5 = (students) =>
//   students.filter((student) => student.name.length > 5);
// console.log(getStudentsNameLongerThan5(students));

//get students that their age is odd number
// const getStudentsAgeIsOdd = (students) =>
//   students.filter((student) => student.age % 2 == 1);
// console.log(getStudentsAgeIsOdd(students));

const employees = [
  {
    id: 1,
    name: "Alice",
    department: "Engineering",
    salary: 85000,
    performance: [4, 5, 3, 4],
    projects: [
      { projectId: "P101", status: "completed", hoursSpent: 120 },
      { projectId: "P102", status: "in-progress", hoursSpent: 60 },
    ],
  },
  {
    id: 2,
    name: "Bob",
    department: "HR",
    salary: 60000,
    performance: [3, 4, 4, 3],
    projects: [
      { projectId: "P201", status: "completed", hoursSpent: 90 },
      { projectId: "P202", status: "completed", hoursSpent: 110 },
    ],
  },
  {
    id: 3,
    name: "Charlie",
    department: "Engineering",
    salary: 95000,
    performance: [5, 5, 4, 5],
    projects: [
      { projectId: "P301", status: "completed", hoursSpent: 200 },
      { projectId: "P302", status: "in-progress", hoursSpent: 80 },
    ],
  },
  {
    id: 4,
    name: "Diana",
    department: "Marketing",
    salary: 72000,
    performance: [4, 4, 4, 3],
    projects: [
      { projectId: "P401", status: "completed", hoursSpent: 150 },
      { projectId: "P402", status: "in-progress", hoursSpent: 50 },
    ],
  },
  {
    id: 5,
    name: "Edward",
    department: "Sales",
    salary: 65000,
    performance: [3, 4, 3, 2],
    projects: [
      { projectId: "P501", status: "completed", hoursSpent: 100 },
      { projectId: "P502", status: "in-progress", hoursSpent: 70 },
    ],
  },
  {
    id: 6,
    name: "Fiona",
    department: "Finance",
    salary: 90000,
    performance: [5, 4, 5, 4],
    projects: [
      { projectId: "P601", status: "completed", hoursSpent: 160 },
      { projectId: "P602", status: "completed", hoursSpent: 140 },
    ],
  },
  {
    id: 7,
    name: "George",
    department: "Engineering",
    salary: 87000,
    performance: [4, 3, 4, 4],
    projects: [
      { projectId: "P701", status: "completed", hoursSpent: 130 },
      { projectId: "P702", status: "in-progress", hoursSpent: 90 },
    ],
  },
  {
    id: 8,
    name: "Hannah",
    department: "HR",
    salary: 62000,
    performance: [3, 3, 4, 3],
    projects: [
      { projectId: "P801", status: "completed", hoursSpent: 80 },
      { projectId: "P802", status: "in-progress", hoursSpent: 50 },
    ],
  },
  {
    id: 9,
    name: "Irene",
    department: "Marketing",
    salary: 78000,
    performance: [4, 5, 5, 4],
    projects: [
      { projectId: "P901", status: "completed", hoursSpent: 140 },
      { projectId: "P902", status: "completed", hoursSpent: 160 },
    ],
  },
  {
    id: 10,
    name: "Jack",
    department: "Sales",
    salary: 72000,
    performance: [4, 4, 3, 4],
    projects: [
      { projectId: "P1001", status: "completed", hoursSpent: 110 },
      { projectId: "P1002", status: "in-progress", hoursSpent: 70 },
    ],
  },
  {
    id: 11,
    name: "Karen",
    department: "Finance",
    salary: 85000,
    performance: [4, 4, 4, 5],
    projects: [
      { projectId: "P1101", status: "completed", hoursSpent: 120 },
      { projectId: "P1102", status: "completed", hoursSpent: 140 },
    ],
  },
  {
    id: 12,
    name: "Liam",
    department: "Engineering",
    salary: 93000,
    performance: [5, 5, 4, 5],
    projects: [
      { projectId: "P1201", status: "completed", hoursSpent: 210 },
      { projectId: "P1202", status: "in-progress", hoursSpent: 100 },
    ],
  },
];

// get employees that their salary is higher than 70k

// const getEmployeesSalaryIsHigh = (employees) =>
//   employees.filter((employee) => employee.salary > 70000);
// console.log(getEmployeesSalaryIsHigh(employees));

// get employees that their department is "Engineering"

// const getEmployeesSalaryIsHigh = (employees) =>
//   employees.filter((employee) => employee.department == "Engineering");
// console.log(getEmployeesSalaryIsHigh(employees));

// get employees that they have completed both projects
const getEmployeesSalaryIsHigh = (employees) =>
  employees.filter((employee) =>
    employee.projects.filter((arr) => arr.status !== "in-progress")
  );
console.log(
  util.inspect(getEmployeesSalaryIsHigh(employees), true, null, false)
);
