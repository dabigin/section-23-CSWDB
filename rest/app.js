// function sum() {
//   return arguments.reduce((total, el) => total + el);
// }

// function sum(...nums) {
//   return nums.reduce((total, el) => total + el);
// }

// sum(3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 1, 2, 3);

function raceResults(gold, silver, ...everyoneElse) {
  console.log(`Gold medal goes to: ${gold}`);
  console.log(`Silver medal goes to ${silver}`);
  console.log(`And thanks to everyone else ${everyoneElse}`);
}
