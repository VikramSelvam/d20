let value = 0;
let nameList = "";
let movieList = [
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
  `Monty Python Life of Brian`,
];

// Sidepanel
function openNav() {
  document.getElementById("mySidePanel").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidePanel").style.width = "0";
}

// Dice roll

let indexValue = Object.keys(movieList).map(function (key) {
  return movieList[key];
});

function roll() {
  const value = Math.floor(Math.random() * 20) + 1;
  document.getElementById("number").innerHTML = value;
  document.getElementById("movieName").innerHTML = indexValue[value - 1];
}

// List Array
for (i = 0; i < movieList.length; i++) {
  nameList += "<li>" + movieList[i] + "</li>";
}
document.getElementById("movieList").innerHTML = nameList;
