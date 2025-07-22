//For Loop

//initialize => runs only once
//condition =>
//update => hamgiin suuld

//initialize, condition, update
for (let i = 1; i < 10; i++) {
  console.log(i);
}

// STAR PATTERN 8
// *
// **
// ***
// ****
// *****
let size = 5;
for (let i = 1; i <= size; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "* ";
  }
  console.log(star);
}

// STAR PATTERN 4
//  01234
//0     ***** //0-4
//1    *****  //1-3
//2   *****   //2-2
//3  *****    //3-1
//4 *****     //4-0

let size4 = 5;
for (i = size4; i > 0; i--) {
  let stars = "";
  for (j = i; j > 0; j--) {
    stars += " ";
  }
  for (j = size4; j > 0; j--) {
    stars += "*";
  }
  console.log(stars);
}

// STAR PATTERN 6
//  01234
//0 *****
//1  *****
//2   *****
//3    *****
//4     *****

let size6 = 5;
for (i = 0; i < size6; i++) {
  let stars = "";
  for (j = 0; j < i; j++) {
    stars += " ";
  }
  for (j = 0; j < size6; j++) {
    stars += "*";
  }
  console.log(stars);
}

// STAR PATTERN 7
//0 *****
//1  *   *
//2   *   *
//3    *   *
//4     *****

let size1 = 5;
for (i = 0; i < size1; i++) {
  let stars = "";
  for (j = 0; j < i; j++) {
    stars += " ";
  }
  for (j = 0; j < size1; j++) {
    if (i == 0 || i == size1 - 1 || j == 0 || j == size1 - 1) {
      stars += "*";
    } else {
      stars += " ";
    }
  }
  console.log(stars);
}

let size5 = 5;
for (i = 0; i < size5; i++) {
  let stars = "";
  for (j = 0; j < size5 - i; j++) {
    stars += "-";
  }
  for (j = 0; j < size5; j++) {
    if (i == 0 || i == size5 - 1 || j == 0 || j == size5 - 1) {
      stars += "*";
    } else {
      stars += " ";
    }
  }
  console.log(stars);
}
