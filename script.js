let value = 0;
let index = [
  `The Foreigner`,
  `The Two Popes`,
  `Marriage Story`,
  `The Lovebirds`,
  `Prince Of Egypt`,
  `Baby Driver`,
  `A Silent Voice`,
  `Kubo And The Two Strings`,
  `The Circle`,
  `Kiki's delivery service`,
  `I Am Mother`,
  `Uncut gems`,
  `The adventures of TinTin`,
  `Kung Fu Hustle`,
  `Dope`,
  `Scott Pilgrim vs the world`,
  `Deadpool 2`,
  `Lupin the 3rd`,
  `Selfless`,
  `Monty Python Life of Brian`
];

let indexValue = Object.keys(index).map(function (key) {
  return index[key];
});

function roll() {
  const value = Math.floor(Math.random() * 15) + 1;
  document.getElementById("number").innerHTML = value;
  document.getElementById("movieName").innerHTML = indexValue[value - 1];
}
