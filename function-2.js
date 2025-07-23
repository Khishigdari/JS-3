// function findSum1(a, b) {
//   return a + b;
// }
// let result; //undefined
// result = findSum1(10, 20);
// console.log(result);

function getTriangle(size) {
  let result = "";
  for (i = 0; i < size; i++) {
    let stars = "";
    for (j = 0; j <= i; j++) {
      stars += "*";
    }
    // console.log(stars);
    result += stars + "\n";
  }
  return result;
}
let result = getTriangle(5);
console.log("TriAngle:");
console.log(result);

// 1-r arga

// function findSum(a, b) {
//   return a + b;
// }
// let num1Input = document.getElementById("num1");
// let num2Input = document.getElementById("num2");
// let button = document.getElementById("btn");
// let answerP = document.getElementById("answer");

// // console.log(num1Input);

// button.addEventListener("click", function () {
//   let num1 = parseInt(num1Input.value);
//   let num2 = parseInt(num2Input.value);
//   //   console.log(num1);
//   //   console.log(num2);
//   let sum = num1 + num2;
//   answerP.innerText = sum;
// });

// 2-r arga

// function findSum(a, b) {
//     return a + b;
//   }
//   let num1Input = document.getElementById("num1");
//   let num2Input = document.getElementById("num2");
//   let button = document.getElementById("btn");
//   let answerP = document.getElementById("answer");

//   function buttonClick() {
//     let num1 = parseInt(num1Input.value);
//     let num2 = parseInt(num2Input.value);
//     let sum = num1 + num2;
//     answerP.innerText = sum;
//   };

//   button.addEventListener("click", buttonClick)

// 3-r arga

function findSum(a, b) {
  let sum = a + b;
  return sum; //return ni dooroo bh ystoi
}
let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let button = document.getElementById("btn");
let answerP = document.getElementById("answer");

function buttonClick() {
  let num1 = parseInt(num1Input.value);
  let num2 = parseInt(num2Input.value);
  let sum = num1 + num2;
  answerP.innerText = sum;
}

button.addEventListener("click", buttonClick);
