//For Loop

//initialize => runs only once
//condition =>
//update => hamgiin suuld

//initialize, condition, update
for (let i = 1; i < 10; i++) {
  console.log(i);
}

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
