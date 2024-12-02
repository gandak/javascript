// map, sort, filter methods

let students = [
    { name: "Boldoo", age: 15, grades: [10, 20, 30, 90, 80], gender: "male" },
    { name: "Saraa", age: 14, grades: [70, 60, 85, 90, 75], gender: "female" },
    { name: "Tuvshuu", age: 16, grades: [55, 40, 75, 80, 90], gender: "male" },
    { name: "Anu", age: 15, grades: [95, 85, 70, 90, 88], gender: "female" },
    { name: "Enkhee", age: 17, grades: [50, 45, 60, 70, 80], gender: "male" },
    { name: "Temuulen", age: 14, grades: [60, 70, 90, 80, 95], gender: "male" },
    { name: "Nandin", age: 19, grades: [80, 85, 90, 75, 88], gender: "female" },
    { name: "Batsaikhan", age: 16, grades: [40, 50, 60, 70, 80], gender: "male" },
    { name: "Ariunaa", age: 14, grades: [75, 85, 95, 90, 80], gender: "female" },
    {
      name: "Zoljargal",
      age: 17,
      grades: [55, 65, 75, 85, 95],
      gender: "female",
    },
    { name: "Bat-Erdene", age: 15, grades: [40, 50, 60, 70, 80], gender: "male" },
    { name: "Uchral", age: 20, grades: [85, 90, 95, 88, 80], gender: "female" },
    { name: "Amaraa", age: 14, grades: [60, 70, 75, 85, 90], gender: "male" },
    { name: "Odnoo", age: 15, grades: [50, 60, 70, 80, 90], gender: "female" },
    { name: "Erdenee", age: 17, grades: [45, 55, 65, 75, 85], gender: "male" },
    { name: "Sukhbat", age: 14, grades: [90, 95, 88, 85, 80], gender: "male" },
    { name: "Gantulga", age: 16, grades: [40, 60, 70, 80, 90], gender: "male" },
    { name: "Tsolmon", age: 15, grades: [80, 85, 90, 95, 88], gender: "female" },
    { name: "Khuslen", age: 14, grades: [70, 75, 80, 85, 90], gender: "female" },
    { name: "Bayar", age: 17, grades: [60, 70, 80, 90, 95], gender: "male" },
  ];

  // Filter ashiglan nasand hursen suragchdiig oloh

//   let adults = students.filter ((arr) =>{
//     return arr.age >= 18;
//   })

//   console.log("Nasand hursen suragchid: ", adults);


// map deer zovhon nernuudees butsen array butsaah

// let namesArray = [];
// students.map((arr) =>{
//     namesArray.push(arr.name);
// })
// console.log(namesArray);


// sort dungiin dundaj

let findAverages = (array) => {
    let avarages = array.map((student) => {
      let sum = 0;
      student.grades.map((grade) => {
        sum = sum + grade;
      });
      return Math.floor(sum / student.grades.length);
    });
    return avarages;
  };
   
  let dundaj = findAverages(students);
  console.log({ dundaj });


  let sortedDundaj = dundaj.sort((g2, g1) =>{
    return g2 - g1;
  })

  console.log(sortedDundaj);