let movieObj = [
  { title: `The Foreigner`, seen: true },
  { title: `The Two Popes`, seen: true },
  { title: `Marriage Story`, seen: true },
  { title: `The Lovebirds`, seen: true },
  { title: `Prince Of Egypt`, seen: true },
  { title: `Baby Driver`, seen: true },
  { title: `A Silent Voice`, seen: true },
  { title: `Kubo And The Two Strings`, seen: true },
  { title: `The Circle`, seen: true },
  { title: `Kiki's delivery service`, seen: true },
  { title: `I Am Mother`, seen: true },
  { title: `Uncut gems`, seen: false },
  { title: `The adventures of TinTin`, seen: false },
  { title: `Kung Fu Hustle`, seen: true },
  { title: `Dope`, seen: true },
  { title: `Scott Pilgrim vs the world`, seen: false },
  { title: `Deadpool 2`, seen: false },
  { title: `Lupin the 3rd`, seen: true },
  { title: `Selfless`, seen: false },
  { title: `Monty Python Life of Brian`, seen: false },
];
let nav = false;

// Sidepanel
function openNav() {
  document.getElementById("mySidePanel").style.width = "300px";
  nav = true;
}

function closeNav() {
  document.getElementById("mySidePanel").style.width = "0";
  nav = false;
}

function toggleNav() {
  nav ? closeNav() : openNav();
}
// List Array

let nameList = "";
for (i = 0; i < movieObj.length; i++) {
  nameList += "<li>" + movieObj[i].title + "</li>";
}
document.getElementById("movieList").innerHTML = nameList;

function roll() {
  var movieArray = Object.keys(movieObj);
  var movieIndex = Math.floor(Math.random() * movieArray.length) + 1;
  var randomKey = movieArray[movieIndex - 1];
  document.getElementById("number").innerHTML = movieIndex;
  document.getElementById("movieName").innerHTML = movieObj[randomKey].title;
  if (movieObj[randomKey].seen == true) {
    document.getElementById("movieName").style =
      "text-decoration: line-through";
  } else {
    document.getElementById("movieName").style = "text-decoration: none";
  }
}
