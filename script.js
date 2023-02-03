function readRules() {
    let yesNo = prompt("Ste oboznámený s pravidlami ? (áno/nie)")
    if(yesNo == "áno" || yesNo == "ano" || yesNo == " ano" || yesNo == "ano " || yesNo == "áno " || yesNo == " áno") {
        actualGameStart();
    } else {
        document.getElementById("rules").style.border = "3px solid red";
        setTimeout(() => {
            document.getElementById("rules").style.border = "none";
        }, 800);
    }
}

let playerScore = 0;
let computerScore = 0;
const computerScoreBoard = document.querySelector('.computer-score-board');
const playerScoreBoard = document.querySelector('.player-score-board');
const historyBoard = document.querySelector('.history');


function generateLetter() {
    const letters = 'KPN';
  
    return letters[Math.floor(Math.random() * letters.length)]
}


function actualGameStart() {
    alert("Hra začína. SKÓRE je :            JA - " + playerScore + "            BOT - " + computerScore);
    chooseLetterPromt();
}

function chooseLetterPromt() {
    let chooseLetter = prompt("Vyber si medzi pismenami K, P alebo N")
    if(chooseLetter !== "K" && chooseLetter !== "P" && chooseLetter !== "N") {
        alert("Musite si vybrať medzi písmenami K, P alebo N !!!")
        chooseLetterPromt();
    } else {
      const botPC   = generateLetter();
      console.log("Toto vybral bot:", botPC);
      alert("Toto vybral bot: " + botPC);
      console.log("Toto si si ty vybral", chooseLetter)
  if(chooseLetter == 'K' && botPC == 'P') {
      alert("Prehral si")
      history.pushState("Prehra");
      computerScore++;
      count.kamen = count.kamen + 1;
      count.papier = count.papier + 1;
      computerScoreBoard.innerHTML = computerScore;
  } else if(chooseLetter == 'P' && botPC == 'K') {
      alert("Vyhral si")
      history.pushState("Vyhra");
      playerScore++;
      count.papier = count.papier + 1;
      count.kamen = count.kamen + 1;
      playerScoreBoard.innerHTML = playerScore;
  } else if(chooseLetter === botPC) {
      alert("Remiza")
  } else if(chooseLetter == 'P' && botPC == 'N') {
      alert("Prehral si")
      history.pushState("Prehra");
      computerScore++;
      count.papier = count.papier + 1;
      count.noznice = count.noznice + 1;
      computerScoreBoard.innerHTML = computerScore;
  } else if(chooseLetter == 'N' && botPC == 'P') {
      alert("Vyhral si")
      history.pushState("Vyhra");
      playerScore++;
      count.noznice = count.noznice + 1;
      count.papier = count.papier + 1;
      playerScoreBoard.innerHTML = playerScore;
  } else if(chooseLetter == 'N' && botPC == 'K') {
      alert("Prehral si")
      history.pushState("Prehra");
      computerScore++;
      count.noznice = count.noznice + 1;
      count.kamen = count.kamen + 1;
      computerScoreBoard.innerHTML = computerScore;
  } else if(chooseLetter == 'N' && botPC == 'N') {
      alert("Remiza")
  } else if(chooseLetter == 'K' && botPC == 'K') {
      alert("Remiza")
  } else if(chooseLetter == 'P' && botPC == 'P') {
      alert("Remiza")
  } else {
      alert("Vyhral si")
      playerScore++;
    }
      
    }
    console.log("Tolkoto kamenov: " + count.kamen + " Tolkoto papierov: " + count.papier + " Tolkoto noznic: " + count.noznice);
    historyBoard.innerHTML = history;
}

const count = {
    kamen: 0,
    papier: 0,
    noznice: 0,

};

const history = [];


