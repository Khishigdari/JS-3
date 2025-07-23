// BODLOGO 1
function findMaxof2(a, b) {
  if (a < b) {
    console.log(b);
  } else {
    console.log(a);
  }
}
findMaxof2(13, 64);
findMaxof2(45, 27);

// BODLOGO 2
function findMaxof3(a, b, c) {
  if (a < b) {
    if (b < c) {
      console.log(c);
    } else {
      console.log(b);
    }
  } else {
    if (a < c) {
      console.log(c);
    } else {
      console.log(a);
    }
  }
}
findMaxof3(23, 65, 14);
findMaxof3(74, 65, 14);
findMaxof3(74, 65, 465);

// BODLOGO 3
function findEvenOddorZero(a) {
  if (a == 0) {
    console.log("Teg");
  } else if (a % 2 == 0) {
    console.log("Tegsh Too");
  } else {
    console.log("Sondgoi Too");
  }
}
findEvenOddorZero(146);
findEvenOddorZero(137);
findEvenOddorZero(0);

// BODLOGO 4
function find3or5orBoth(a) {
  if (a % 3 == 0 && a % 5 == 0) {
    console.log("Hoyuland ni huvaagdana");
  } else {
    if (a % 3 == 0) {
      console.log("3-t huvaagdana");
    }
    if (a % 5 == 0) {
      console.log("5-t huvaagdana");
    }
  }
}
find3or5orBoth(25);
find3or5orBoth(15);
find3or5orBoth(9);
find3or5orBoth(45);
find3or5orBoth(30);
find3or5orBoth(27);

// BODLOGO 5 !!!!!!
function findLeapYear(a) {
  //   if (a % 4 == 0 || a % 400 == 0) {
  //     console.log("It is Leap Year");
  //   }
  //   if (a % 100 == 0 && a % 4 == 0) {
  //     console.log("It is not Leap Year");
  //   }
  if (a % 400 == 0) {
    console.log("It is not Leap Year");
  } else if (a % 4 == 0) {
    if (a % 100 == 0) {
      console.log("It is Leap Year");
    } else {
      console.log("It is Leap Year");
    }
  }
}

findLeapYear(2000);
findLeapYear(2024);
findLeapYear(2025);

// BODLOGO 6
function findDays(a) {
  if (a == 1) {
    console.log("Monday");
  }
  if (a == 2) {
    console.log("Tuesday");
  }
  if (a == 3) {
    console.log("Wednesday");
  }
  if (a == 4) {
    console.log("Thursday");
  }
  if (a == 5) {
    console.log("Friday");
  }
  if (a == 6) {
    console.log("Saturday");
  }
  if (a == 7) {
    console.log("Sunday");
  }
}
findDays(1);
findDays(5);
findDays(6);

// BODLOGO 7
function findProfit(price, quantity, sellingPrice, soldQuantity) {
  let a = price * quantity;
  let b = sellingPrice * soldQuantity;
  let result = a - b;
  if (a > b) {
    console.log(result + " (Aldagdaltai)");
  } else {
    console.log(result + " (Ashigtai)");
  }
}
findProfit(100, 20, 150, 10);
findProfit(200, 20, 150, 20);
findProfit(100, 20, 200, 15);
