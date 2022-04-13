player1();
player2();

var player1 = player1();
var player2 = player2();
function player1() {
  var random_number = Math.floor(Math.random() * 6 + 1);

  if (random_number === 1) {
    var a = document
      .querySelector(".dice img.img1")
      .setAttribute("src", "./images/dice1.png");
  } else if (random_number === 2) {
    var b = document
      .querySelector(".dice img.img1")
      .setAttribute("src", "./images/dice2.png");
  } else if (random_number === 3) {
    var c = document
      .querySelector(".dice img.img1")
      .setAttribute("src", "./images/dice3.png");
  } else if (random_number === 4) {
    var d = document
      .querySelector(".dice img.img1")
      .setAttribute("src", "./images/dice4.png");
  } else if (random_number === 5) {
    var e = document
      .querySelector(".dice img.img1")
      .setAttribute("src", "./images/dice5.png");
  } else if (random_number === 6) {
    var f = document
      .querySelector(".dice img.img1")
      .setAttribute("src", "./images/dice6.png");
  }

  return random_number;
}

function player2() {
  var random_number = Math.floor(Math.random() * 6 + 1);

  if (random_number === 1) {
    var a = document
      .querySelector(".dice img.img2")
      .setAttribute("src", "./images/dice1.png");
  } else if (random_number === 2) {
    var b = document
      .querySelector(".dice img.img2")
      .setAttribute("src", "./images/dice2.png");
  } else if (random_number === 3) {
    var c = document
      .querySelector(".dice img.img2")
      .setAttribute("src", "./images/dice3.png");
  } else if (random_number === 4) {
    var d = document
      .querySelector(".dice img.img2")
      .setAttribute("src", "./images/dice4.png");
  } else if (random_number === 5) {
    var e = document
      .querySelector(".dice img.img2")
      .setAttribute("src", "./images/dice5.png");
  } else {
    var f = document
      .querySelector(".dice img.img2")
      .setAttribute("src", "./images/dice6.png");
  }

  return random_number;
}

if (player1 === player2) {
  var text1 = (document.querySelector("h1").innerHTML = "Match Draw");
} else if (player1 > player2) {
  var text1 = (document.querySelector("h1").innerHTML = "Player 1 Won");
} else {
  var text1 = (document.querySelector("h1").innerHTML = "PLayer 2 won");
}
