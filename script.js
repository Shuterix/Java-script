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
      computerScore++;
      computerScoreBoard.innerHTML = computerScore;
  } else if(chooseLetter == 'P' && botPC == 'K') {
      alert("Vyhral si")
      playerScore++;
      playerScoreBoard.innerHTML = playerScore;
  } else if(chooseLetter === botPC) {
      alert("Remiza")
  } else if(chooseLetter == 'P' && botPC == 'N') {
      alert("Prehral si")
      computerScore++;
      computerScoreBoard.innerHTML = computerScore;
  } else if(chooseLetter == 'N' && botPC == 'P') {
      alert("Vyhral si")
      playerScore++;
      playerScoreBoard.innerHTML = playerScore;
  } else if(chooseLetter == 'N' && botPC == 'K') {
      alert("Prehral si")
      computerScore++;
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
}

