let playerScore = 0;

let computerScore = 0;

let computerScoreBoard = document.getElementById('computer-score-board');

let playerScoreBoard = document.getElementById('player-score-board');

let history = document.getElementById('history');
history = [];

let count = {
    kamen: 0,
    papier: 0,
    noznice: 0
};

let pick = {
    stone: 'k' || 'K',
    paper: 'p' || 'P',
    scissors: 'n' || 'N',
};

let rulesCount = 0;



function playerWin() {
    count.kamen++;
    count.noznice++;
    playerScore++;
    
    history+=("Vyhral si");

    playerScoreBoard.innerHTML = playerScore;
}

function playerLose() {

    count.kamen++;
    count.papier++;
    computerScore++;
    
    history+=("Prehral si");

    computerScoreBoard.innerHTML = computerScore;
}

function draw() {
    count.noznice++;
    count.noznice++;
    
    history+=("Remiza");
}



function gameStart() {
    if(rulesCount >= 1) {
        return actualGameStart();
    } readRules();
}



function readRules() {
    let yesNo = prompt("Ste oboznámený s pravidlami ? (áno/nie)")
    if(yesNo == 'ano' || yesNo == "Ano") {
        rulesCount++;
        return actualGameStart();
    } document.getElementById("rules").style.border = "3px solid red";
        setTimeout(() => {
            document.getElementById("rules").style.border = "none";
        }, 800);
        rulesCount++;
        
}



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
    if(chooseLetter !== "K" && chooseLetter!=="k" && chooseLetter !== "P" && chooseLetter !== "p" && chooseLetter !== "N" && chooseLetter !== "n") {
        alert("Musite si vybrať medzi písmenami K, P alebo N !!!")

        chooseLetterPromt();
    } else {
      const botPC   = generateLetter();

      console.log("Toto vybral bot:", botPC);

      alert("Toto vybral bot: " + botPC);

      console.log("Toto si si ty vybral", chooseLetter)
      if(pick.stone && botPC == 'P') {
        alert("Prehral si")
    
        playerLose();
    
    }else if(pick.stone && botPC == 'N') {
        alert("Vyhral si")
    
        playerWin();
    
    }else if(pick.stone && botPC == 'K') {
        alert("Remiza")
    
        draw();
    
    }else if(pick.paper && botPC == 'N') {
        alert("Prehral si")
    
        playerLose();
    
    }else if(pick.paper && botPC == 'K') {
        alert("Vyhral si")
    
        playerWin();
    
    }else if(pick.paper && botPC == 'P') {
        alert("Remiza")
    
        draw();
    
    }else if(pick.scissors && botPC == 'K') {
        alert("Prehral si")
    
        playerLose();
    
    }else if(pick.scissors && botPC == 'P') {
        alert("Vyhral si")
    
        playerWin();
    
    }else if(pick.scissors && botPC == 'N') {
        alert("Remiza")
    
        draw();
    
    }
    }

    console.log("Tolkoto kamenov: " + count.kamen + " Tolkoto papierov: " + count.papier + " Tolkoto noznic: " + count.noznice);
    history = document.getElementById('history').innerHTML = history + "<br/>";
    fullGameWin();
}



function fullGameWin() {
    if(playerScore == 5) {
        gameOver = document.getElementById('gameOver').innerHTML = "Vyhral si celu hru. Dosiahol si " + playerScore + " bodov.";
        setTimeout(() => {
            playAgain();
        }, 3000);
    } else if(computerScore == 5) {
        gameOver = document.getElementById('gameOver').innerHTML = "Prehral si celu hru. Bot dosiahol " + computerScore + " bodov.";
        setTimeout(() => {
            playAgain();
        }, 1500);
    }
}

function playAgain() {
    let playAgainPrompt = prompt("Chceš hrať odznova ?");
    if (playAgainPrompt == "ano" || playAgainPrompt == "Ano") {

        playerScore = 0;
        computerScore = 0;

        count.kamen = 0;
        count.papier = 0;
        count.noznice = 0;

        rulesCount = 0;

        document.getElementById('player-score-board').innerHTML = 0;

        document.getElementById('computer-score-board').innerHTML = 0;

        history = [];
        document.getElementById('history').innerHTML = history;

        document.getElementById('gameOver').innerHTML = "";
    } return;
}
