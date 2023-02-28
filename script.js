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
    stone: 'k',
    paper: 'p',
    scissors: 'n',
};

let onBoardingDone = false;



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
    alert("Remiza")

    if(botPC == 'K') {
        count.kamen+2;
    } else if(botPC == 'P') {
        count.papier+2;
    } else {
        count.noznice+2;
    }

    history+=("Remiza");
}



function gameStart() {
    if(onBoardingDone == true) {
        return actualGameStart();
    } start();
}



function start() {
    const str = prompt("Ste oboznámený s pravidlami ? (áno/nie)")
    if(str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() == "ano") {
        onBoardingDone = true;
        return actualGameStart();
    } document.getElementById("rules").style.border = "3px solid red";
        setTimeout(() => {
            document.getElementById("rules").style.border = "none";
        }, 800);
        onBoardingDone = true;
        
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
    if(chooseLetter.toLowerCase() !== "k" && chooseLetter.toLowerCase() !== "p"  && chooseLetter.toLowerCase() !== "n") {
        alert("Musite si vybrať medzi písmenami K, P alebo N !!!")

        chooseLetterPromt();
    } else {
      const botPC = generateLetter();

      console.log("Toto vybral bot:", botPC);

      alert("Toto vybral bot: " + botPC);

      console.log("Toto si si ty vybral", chooseLetter)


      if(pick.stone && botPC == 'P') {
        alert("Prehral si")
    
        playerLose();
    
    }else if(pick.stone && botPC == 'N') {
        alert("Vyhral si")
    
        playerWin();
    
    }else if(pick.paper && botPC == 'N') {
        alert("Prehral si")
    
        playerLose();
    
    }else if(pick.paper && botPC == 'K') {
        alert("Vyhral si")
    
        playerWin();
    
    }else if(pick.scissors && botPC == 'K') {
        alert("Prehral si")
    
        playerLose();
    
    }else if(pick.scissors && botPC == 'P') {
        alert("Vyhral si")
    
        playerWin();
    
    }else if(pick.stone && botPC == 'K') {
        draw();
    } else if(pick.paper && botPC == 'P') {
        alert("Si kkt");
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

        onBoardingDone = 0;

        document.getElementById('player-score-board').innerHTML = 0;

        document.getElementById('computer-score-board').innerHTML = 0;

        history = [];
        document.getElementById('history').innerHTML = history;

        document.getElementById('gameOver').innerHTML = "";
    } return;
}
