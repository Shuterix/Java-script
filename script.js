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
let computerScoreBoard = document.getElementById('computer-score-board');
let playerScoreBoard = document.getElementById('player-score-board');
let history = document.getElementById('history');
history = [];

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
    
        count.kamen++;
        count.papier++;
        computerScore++;
        
        history+=("Prehral si");
        history.innerHTML = history;
    
        computerScoreBoard.innerHTML = computerScore;
    
    }else if(chooseLetter == 'K' && botPC == 'N') {
        alert("Vyhral si")
    
        count.kamen++;
        count.noznice++;
        playerScore++;
        
        history+=("Vyhral si");
        history.innerHTML = history;
    
        playerScoreBoard.innerHTML = playerScore;
    
    }else if(chooseLetter == 'K' && botPC == 'K') {
        alert("Remiza")
    
        count.kamen++;
        count.kamen++;
        
        history+=("Remiza");
        history.innerHTML = history;
    
    }else if(chooseLetter == 'P' && botPC == 'N') {
        alert("Prehral si")
    
        count.noznice++;
        count.papier++;
        computerScore++;
        
        history+=("Prehral si");
        history.innerHTML = history;
    
        computerScoreBoard.innerHTML = computerScore;
    
    }else if(chooseLetter == 'P' && botPC == 'K') {
        alert("Vyhral si")
    
        count.kamen++;
        count.papier++;
        playerScore++;
        
        history+=("Vyhral si");
        history.innerHTML = history;
    
        playerScoreBoard.innerHTML = playerScore;
    
    }else if(chooseLetter == 'P' && botPC == 'P') {
        alert("Remiza")
    
        count.papier++;
        count.papier++;
        
        history+=("Remiza");
        history.innerHTML = history;
    
    }else if(chooseLetter == 'N' && botPC == 'K') {
        alert("Prehral si")
    
        count.kamen++;
        count.noznice++;
        computerScore++;
        
        history+=("Prehral si");
        history.innerHTML = history;
    
        computerScoreBoard.innerHTML = computerScore;
    
    }else if(chooseLetter == 'N' && botPC == 'P') {
        alert("Vyhral si")
    
        count.papier++;
        count.noznice++;
        playerScore++;
        
        history+=("Vyhral si");
        history.innerHTML = history;
    
        playerScoreBoard.innerHTML = playerScore;
    
    }else if(chooseLetter == 'N' && botPC == 'N') {
        alert("Remiza")
    
        count.noznice++;
        count.noznice++;
        
        history+=("Remiza");
        history.innerHTML = history;
    
    }
    }

    console.log("Tolkoto kamenov: " + count.kamen + " Tolkoto papierov: " + count.papier + " Tolkoto noznic: " + count.noznice);
    history = document.getElementById('history').innerHTML = history + "<br/>";
}

let count = {
    kamen: 0,
    papier: 0,
    noznice: 0
};