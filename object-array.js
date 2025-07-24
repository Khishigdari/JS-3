let boldo = {
  name: "boldo",
  age: 20,
  grade: 90,
};

//array of numbers
let grades = [10, 20, 30, 100];
//array of strings
let names = ["boldo", "dorjo", "bata"];

//array of objects
let students = [
  { name: "boldo", age: 20, grade: 20, balance: 1000, gender: "male" },
  { name: "dorjo", age: 15, grade: 30, balance: 950, gender: "male" },
  { name: "tsetsgee", age: 30, grade: 100, balance: 1500, gender: "female" },
  { name: "bataa", age: 10, grade: 50, balance: 1250, gender: "male" },
  { name: "suvd", age: 32, grade: 50, balance: 2400, gender: "female" },
];

//---find the top student
function findTopStudent(arr) {
  let topStudent = arr[0];
  for (i = 0; i < arr.length; i++) {
    //hervee topstudent grade < arr[i] iin grade ih baival topstudent ee solino
    if (topStudent.grade < arr[i].grade) {
      topStudent = arr[i];
    }
  }
  return topStudent;
}
let manaiduu = findTopStudent(students);
console.log("Top Student:", manaiduu);

//---find the oldest
function findOldestStudent(arr) {
  let oldestStudent = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (oldestStudent.age < arr[i].age) {
      oldestStudent = arr[i];
    }
  }
  return oldestStudent;
}
let oldest = findOldestStudent(students);
console.log("The Oldest Student:", oldest);

//---the youngest (?)
function findYoungestStudent(arr) {
  let youngestStudent = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (youngestStudent.age > arr[i].age) {
      youngestStudent = arr[i];
    }
  }
  return youngestStudent;
}
let youngest = findYoungestStudent(students);
console.log("The Youngest Student", youngest);

//---student object bur deer balance gesen property nem (deer nemsen)
//---balance dotor toon utga ug (deer nemsen)
//---hamgiin ih balance tai suragchiig oloh funtion bich
function findMaxBalance(arr) {
  let maxBalance = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (maxBalance.balance < arr[i].balance) {
      maxBalance = arr[i];
    }
  }
  return maxBalance;
}

let balance = findMaxBalance(students);
console.log("Maximum Balance:", balance);

//---minimum balance (?)
function findMinBalance(arr) {
  let minBalance = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (minBalance.balance > arr[i].balance) {
      minBalance = arr[i];
    }
  }
  return minBalance;
}
let bagabalance = findMinBalance(students);
console.log("Minimun Balance:", bagabalance);

//BODLOGO 2
//2 utga avdag function findStudentByAge(arr,age) gesen function bich
//arr -> dotor array of students baina
//findStudentByAge function age iin utgatai tentsuu nastai neg suragchiig olj butsaana
//example: findStudentByAge(students, 30) gej duudahad nadaa 30 nastai neg suragchiig olj ugdug baih

//------
// function findStudentByAge(arr, age) {
//   let studentByAge = arr[0];

//   for (i = 0; i < arr.length, age.length; i++) {
//     let studentAge = age[0];
//     if (studentByAge.age == studentAge.age) {
//       studentByAge = age[i];
//     }
//     return studentAge;
//   }
//   return studentByAge;
// }
// let suragch = findStudentByAge(students, 30);
// console.log("Find Student By Age:", suragch);

function findStudentByAge(arr, age) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age == age) {
      return arr[i];
    }
  }
  return "Suragch Oldsongui";
}
let manaiAh = findStudentByAge(students, 20);
let manaiAh1 = findStudentByAge(students, 30);
console.log("Find Student By Age:", manaiAh);
console.log("Find Student By Age:", manaiAh1);

// BODLOGO 3
//buh suragchdiin dundaj nas oldog function bich
//BODLOGO 4
//nasand hursen suragchiin dundaj balance iig oldog function bich
//BODLOGO 5
//buh suragch object deer gender gesen property nem, "male" esvel "female" gesesn utga ug
//eregtei suragchdiig tooldog function bich
// BODLOGO 6
//emegtei suragch niit suragchiin heden huvi bgag tootsdog function bich

//---bodlogo 3
//buh suragchdiin dundaj nas oldog function bich
function findAverageAge(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i].age;
  }
  let avg = sum / arr.length;
  return avg;
}
let avgOfAge = findAverageAge(students);
console.log("Average Age of All Students:", avgOfAge);

//---bodlogo 4 !!!!!!
//nasand hursen suragchiin dundaj balance iig oldog function bich
function findAvgBalanceofAdult(arr) {
  let sum = 0;
  let adultStudent = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age >= 18) {
      sum = sum + arr[i].balance;
      adultStudent = adultStudent + 1;
      //   console.log(adultStudent);
    }
  }
  let avg = sum / adultStudent;
  return avg;
  //   return arr[i];
}
let adultBalance = findAvgBalanceofAdult(students);
console.log("Average Balance of Adult Students:", adultBalance);

//---bodlogo 5
//eregtei suragchdiig tooldog function bich
function findMaleStudent(arr) {
  let maleNum = 0;
  for (i = 0; i < arr.length; i++) {
    // let male = "male";
    if (arr[i].gender == "male") {
      maleNum = maleNum + 1;
    }

    // return arr[i];
  }
  return maleNum;
}
let maleSuragch = findMaleStudent(students);
console.log("Male Students:", maleSuragch);

//---bodlogo 6
//emegtei suragch niit suragchiin heden huvi bgag tootsdog function bich
function findFemalePercent(arr) {
  let femaleNum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].gender == "female") {
      femaleNum = femaleNum + 1;
    }
  }
  femalePercent = (femaleNum * 100) / arr.length;
  return femalePercent;

  //   let femalePercent = 0;
  //   for (i = 0; i < arr.length; i++) {
  //     femalePercent = (femaleNum * 100) / arr.length;
  //   }
  //   return femalePercent;
}

let femaleSuragch = findFemalePercent(students);
console.log("Female Students:", femaleSuragch, "%");
