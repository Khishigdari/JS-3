function problem1(size) {
  for (i = 0; i < size; i++) {
    let stars = "";
    for (j = 0; j < size; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}

problem1(5);
problem1(10);

//bi nasaa ugch yvuulahad nadaa tursun oniig maani hevlej uguh function bich
function findBirthYear(age) {
  let birthYear = 2025 - age;
  console.log(birthYear);
}
findBirthYear(23);
findBirthYear(35);
findBirthYear(19);

//bi neree ugch yvuulahad console log deer "Sain baina uu Erdene" geed minii nereer mendchileh function bich
function greeting(name) {
  console.log("Sain baina uu, " + name + "!");
}

greeting("Erdene");
greeting("Hishge");
greeting("Bold");

//2 bolon tuunees deesh utga avdag function
function findSum(a, b, c) {
  let sum = a + b + c;
  console.log(sum);
}
findSum(10, 20, 30);

//3n too avdag function, console log deer hamgiin bagiig ni hevledeg function
function findMin(a, b, c) {
  if (a < b) {
    if (a < c) {
      console.log(a);
    } else {
      console.log(c);
    }
  } else {
    if (b < c) {
      console.log(b);
    } else {
      console.log(c);
    }
  }
}
findMin(60, 20, 30);
findMin(640, 260, 30);
findMin(10, 450, 5);
