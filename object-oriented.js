// literal
// object-oriented

class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getDetail() {
    return this.name + " " + this.age;
  }
}

// Extending Person

class Student extends Person {
  grade;
  constructor(grade, name, age) {
    super(name, age);
    this.grade = grade;
  }
}

// Extending Person

class Employee extends Person {
  salary;
  constructor() {}
}

let boldo = new Person("boldo", 15);
let tsetsge = new Person("tsetsge", 15);
let duuyaa = new Student(10, "boldo", 15);
console.log(duuyaa);
console.log(tsetsge.getDetail());

// BANK ACCOUNT EXAMPLE

class BankAccount {
  #owner;
  createAt;
  accountNumber;
  static number = 0;

  constructor(owner, accountNumber) {
    this.#owner = owner;
    this.accountNumber = accountNumber;
    this.createAt = new Date();
    this.number = this.number + 1;
  }
  getDetail(secretCode) {
    if (secretCode == "SuperDuperSecretCode") {
      return {
        acc: this.accountNumber,
        owner: this.#owner,
        createdDate: this.createAt,
      };
    } else {
      return "Sorry bro you dont have access";
    }
  }
}

let boldoKhanBankAccount = new BankAccount("boldo", "55555555");
console.log(boldoKhanBankAccount);
console.log(boldoKhanBankAccount.getDetail("SuperDuperSecretCode"));

//   function generateStudent(name, age, grade) {
//     return {
//       name: name,
//       age: age,
//       grade: grade,
//     };
//   }
//   const bat = generateStudent("bat", 15, 10);
