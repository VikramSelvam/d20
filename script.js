let value = 0;
let index = [
  `Deadpool 2`,
  `I Am Mother`,
  `Baby Driver`,
  `Lupin the 3rd`,
  `Uncut gems`,
  `Dope`,
  `Selfless`,
  `Kubo And The Two Strings`,
  `Chicken Run`,
  `Scott Pilgrim vs the world`,
  `undefined`,
  `A Silent Voice`,
  `Kiki's delivery service`,
  `The Platform`,
  `Monty Python Life of Brian`,
];

let indexValue = Object.keys(index).map(function (key) {
  return index[key];
});

function roll() {
  const value = Math.floor(Math.random() * 15) + 1;
  document.getElementById("number").innerHTML = value;
  document.getElementById("movieName").innerHTML = indexValue[value - 1];
}
