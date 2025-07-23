// string
// number
// boolean
// undefined
// null
// objext {}
// array []

let grades = [90, 70, 30, 100, 5];
let grades2 = [-10, 70, 330, 100, 200];
// let midTerm1 = 90
// let midTerm2 = 70
console.log(grades);
console.log(grades[3]); //heddeh element avmaar bgaga []-r avna, 0ees dugaarlana

function findAvg(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  let avg = sum / arr.length;
  return avg;
}
let result = findAvg(grades);
let result2 = findAvg(grades2);

console.log(result);
console.log(result2);

//hamgiin baga bolon ih  dung oloh function
//------dungiin sum
let grades3 = [100, 48, 98, 75, 90, 250, -10, -45];
function findSum(gradesSum) {
  let sum = 0;
  for (i = 0; i < gradesSum.length; i++) {
    sum = sum + gradesSum[i];
  }
  return sum;
}
let result3 = findSum(grades3);
console.log("Sum = ", result3);

//------tegsh tootoi dung oloh
// function findEven(gradesEven) {
//   for (i = 0; i < gradesEven.length; i++) {
//     if (i % 2 == 0) {
//       console.log(gradesEven[i]);
//     }
//   }
// }
// let result4 = findEven(grades3);
// console.log(result4);

//------eyreg tootoi dun
// function findEyreg(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (i > 0) {
//       console.log(arr[i]);
//     }
//   }
//   return arr;
// }
// let result5 = findEyreg(grades3);
// console.log(result5);

//positive sum
function findPositiveSum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}
let pSumResult = findPositiveSum(grades3);
console.log("Positive Sum= ", pSumResult);

//find min
function findMinGrade(arr) {
  let min = arr[i]; //i - iin orond 0 (- too bhku bol 0 iin orond min)
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      //- too bhku bol 0 iin orond min
      min = arr[i];
    }
  }
  return min;
}
let minGrade = findMinGrade(grades3);
console.log("Minimum Grade = ", minGrade);

//find max
function findMaxGrade(arr) {
  let max = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
let maxGrade = findMaxGrade(grades3);
console.log("Maximum Grade = ", maxGrade);

//Array dotorh hamgiin baga eyreg toog oloh function
let grades4 = [100, 48, 98, 75, 90, 250, -10, -45];
function findMinPositive(arr) {
  let min = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  return min;
}
let minPositive = findMinPositive(grades4);
console.log("Minimum Positive = ", minPositive);

//Array dotorh buh tegsh toonuudiin dundaj oloh function !!!!!!
let grades5 = [100, 48, 98, 75, 90, 250, -10, -45];
function findAvgofEven(arr) {
  let avg = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      let sum = 0;

      for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
      }
      let avg = sum / arr.length;
    }
  }
  return avg;
}
let avgofEven = findAvgofEven(grades5);
console.log("Average of Even = ", avgofEven);
