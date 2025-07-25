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
  { name: "dorjo", age: 15, grade: 30, balance: 950, gender: "male" },
  { name: "dorjo", age: 15, grade: 30, balance: 950, gender: "male" },
  { name: "dulam", age: 15, grade: 5, balance: 950, gender: "male" },
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
//extra
function findStudentByGrade(arr, grade) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].grade == grade) {
      return arr[i];
    }
  }
  return "Suragch Oldsongui";
}
let dun = findStudentByGrade(students, 20);
console.log("Find Student By Grade:", dun);

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
//extra
function findAverageGrade(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i].grade;
  }
  let avg = sum / arr.length;
  return avg;
}
let avgOfGrade = findAverageGrade(students);
console.log("Average Grade of All Students:", avgOfGrade);

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
//extra
function findAvgGradeofAdult(arr) {
  let sum = 0;
  let adultStudent = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age >= 18) {
      sum = sum + arr[i].grade;
      adultStudent = adultStudent + 1;
    }
  }
  let avg = sum / adultStudent;
  return avg;
}
let adultGrade = findAvgGradeofAdult(students);
console.log("Average Grade of Adult Students:", adultGrade);

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

// Бодлого 1
// Өгөгдсөн сурагчдын жагсаалтаас хамгийн бага оноотой сурагчийг олж буцаадаг функц бич.

// Бодлого 2
// Нас нь 18-аас доош бүх сурагчдыг шинэ массив(array) болгон ялгаж буцаадаг функц бич.

// Бодлого 3
// Бүх сурагчдын нийт онооны нийлбэрийг буцаадаг функц бич.

// Бодлого 4
// Өгөгдсөн нэртэй (name) бүх сурагчдыг буцаадаг функц бич. Жишээ нь: findStudentsByName(students, "boldo").

// Бодлого 5
// Бүх сурагчдыг онооны дарааллаар ихээс бага руу эрэмбэлдэг функц бич. (sort ашиглах)

// Бодлого 6
// balance нь 10000-аас их сурагчдыг richStudents гэж нэрлээд, зөвхөн нэр болон балансын мэдээлэлтэйгээр шинэ массив үүсгэж буцаа.

// Бодлого 7
// Нэр бүрээр хэчнээн сурагч байгаа тоог тоолж, дараах хэлбэртэй объект буцаа:
// { boldo: 3, dorjo: 1, bataa: 1 }

// Бодлого 8
// Сурагчдын gender тус бүрээр онооны дундаж хэд байгааг тооцоолж буцаадаг функц бич.
// Жишээ:
// { male: 30, female: 60 }

let animals = [
  {
    leg: 4,
    name: "dog",
    height: 10,
  },
  {
    leg: 2,
    name: "chicken",
    height: 10,
  },
  {
    leg: 4,
    name: "cat",
    height: 123,
  },
  {
    leg: 2,
    name: "kangroo",
    height: 145,
  },
];

// [
//   { name: 'dog', height: 10 },
//   { name: 'cat', height: 10 }
// ]

const find4LeggedAnimals = (aasd) => {
  let filteredAnimals = [];
  let count = 0;
  for (i = 0; i < aasd.length; i++) {
    if (aasd[i].leg === 4) {
      filteredAnimals[count] = {
        //object neej bn
        name: aasd[i].name,
        height: aasd[i].height,
      };
      count++;
    }
  }
  return filteredAnimals;
};
const filteredAnimals = find4LeggedAnimals(animals);
console.log("Four Legged Animals:", filteredAnimals);

// Бодлого 1
// Өгөгдсөн сурагчдын жагсаалтаас хамгийн бага оноотой сурагчийг олж буцаадаг функц бич.
const findLowestGradeStudent = (grade) => {
  let lowestGradeStudent = grade[0];
  for (i = 0; i < grade.length; i++) {
    if (lowestGradeStudent.grade > grade[i].grade)
      lowestGradeStudent = grade[i];
  }
  return lowestGradeStudent;
};
const lowestGradeStudent = findLowestGradeStudent(students);
console.log("Student with the Lowest Grade: ", lowestGradeStudent);

// Бодлого 2
// Нас нь 18-аас доош бүх сурагчдыг шинэ массив(array) болгон ялгаж буцаадаг функц бич.
const findMinorStudents = (arr) => {
  let filteredStudents = [];
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age < 18) {
      filteredStudents[count] = arr[i];
      // {
      //   name: arr[i].name,
      //   age: arr[i].age,
      //   grade: arr[i].grade,
      // };
      count++;
    }
  }
  return filteredStudents;
};
const filteredStudents = findMinorStudents(students);
console.log("Students who are Minors:", filteredStudents);

// Бодлого 3
// Бүх сурагчдын нийт онооны нийлбэрийг буцаадаг функц бич.
const findSumofGrades = (arr) => {
  // let filteredStudents = [];
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i].grade;
  }

  return sum;
};
const sumofGrades = findSumofGrades(students);
console.log("Sum of Grades:", sumofGrades);

// Бодлого 4
// Өгөгдсөн нэртэй (name) бүх сурагчдыг буцаадаг функц бич. Жишээ нь: findStudentsByName(students, "boldo").
const findStudentsByName = (students, name) => {
  let filteredStudents = [];
  let count = 0;
  for (i = 0; i < students.length; i++) {
    if (students[i].name === name) {
      filteredStudents[count] = students[i];
      count++;
    }
  }
  return filteredStudents;
  // return "Surgach Oldsongui";
};
const studentsByName = findStudentsByName(students, "boldo");
console.log("Find Students By Name:", studentsByName);
const studentsByName1 = findStudentsByName(students, "dorjo");
console.log("Find Students By Name:", studentsByName1);
//!!!!!! .toLowerCase heregleed tomoor ch jijgeer ch bichsen gardag bolgoh !!!!!!

// Бодлого 5
// Бүх сурагчдыг онооны дарааллаар ихээс бага руу эрэмбэлдэг функц бич. (sort ашиглах)
//points.sort(function(a, b){return b-a});
const sortStudentsByGrade = (arr) => {
  let filteredStudents = [];
  let count = 0;

  for (i = 0; i < arr.length; i++) {
    filteredStudents[count] = arr[0].grade;
    // filteredStudents.sort(function (a, b) {
    //   return b - a;
    // });
    count++;
  }
  return filteredStudents;
};
console.log(filteredStudents);
// const studentsByGrade = sortStudentsByGrade(students);
// console.log(studentsByGrade);
