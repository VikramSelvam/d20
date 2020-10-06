let nameList = "";
let unseenNamelist = "";
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
  { title: `Space Jam`, seen: false },
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

// List objects

for (let movie of movieObj) {
  if (movie.seen == false) {
    nameList += "<li>" + movie.title + "</li>";
  } else {
    nameList +=
      "<li style=text-decoration:line-through;color:#dc3545;>" +
      movie.title +
      "</li>";
  }
}

document.getElementById("movieList").innerHTML = nameList;

// roll all
function roll() {
  let movieArray = Object.keys(movieObj);
  let movieIndex = Math.floor(Math.random() * movieArray.length) + 1;
  let randomKey = movieArray[movieIndex - 1];
  document.getElementById("number").innerHTML = movieIndex;
  document.getElementById("movieName").innerHTML = movieObj[randomKey].title;
  if (movieObj[randomKey].seen == true) {
    document.getElementById("movieName").style =
      "text-decoration: line-through";
  } else {
    document.getElementById("movieName").style = "text-decoration: none";
  }
}

// roll only
function rollOnly() {
  const seenMovies = movieObj.filter((movie) => movie.seen == false);
  let movieIndexOnly = Math.floor(Math.random() * seenMovies.length) + 1;
  document.getElementById("numberUnseen").innerHTML = movieIndexOnly;
  document.getElementById("movieName").innerHTML =
    seenMovies[movieIndexOnly].title;
  document.getElementById("movieName").style = "text-decoration: none";
}

for (let movie of movieObj) {
  if (movie.seen == false) {
    unseenNamelist += "<li>" + movie.title + "</li>";
  }
}
document.getElementById("movieListUnseen").innerHTML = unseenNamelist;

// toggle logic

document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      document.getElementById("randomAll").style = "display: none";
      document.getElementById("unseenOnly").style = "display: block";
      document.getElementById("movieList").style = "display: none";
      document.getElementById("movieListUnseen").style = "display: block";

      console.log("Checked");
    } else {
      document.getElementById("randomAll").style = "display: block";
      document.getElementById("unseenOnly").style = "display: none";
      document.getElementById("movieList").style = "display: block";
      document.getElementById("movieListUnseen").style = "display: none";
      console.log("Not checked");
    }
  });
});
