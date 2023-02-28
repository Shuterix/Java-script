let playerScore = 0;

let computerScore = 0;

let computerScoreBoard = document.getElementById('computer-score-board');

let playerScoreBoard = document.getElementById('player-score-board');

let chooseLetter;

let botPC;

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
    playerScore++;
    history+=("Vyhra");
    if(chooseLetter == pick.stone && botPC == pick.scissors) {
        count.kamen++;
        count.noznice++;
    } else if(chooseLetter == pick.paper && botPC == pick.stone) {
        count.papier++;
        count.kamen++;
    } else if(chooseLetter == pick.scissors && botPC == pick.paper) {
        count.noznice++;
        count.papier++;
    }
}

function playerLose() {
    computerScore++;
    history+=("Prehra");
    if(chooseLetter == pick.stone && botPC == pick.paper) {
        count.kamen++;
        count.papier++;
    } else if(chooseLetter == pick.paper && botPC == pick.scissors) {
        count.papier++;
        count.noznice++;
    } else if(chooseLetter == pick.scissors && botPC == pick.stone) {
        count.noznice++;
        count.kamen++;
    }
    
}

function draw() {
        history+=("Remiza");
        if(chooseLetter == pick.stone && botPC == pick.stone) {
            count.kamen = count.kamen + 2;
        } else if(chooseLetter == pick.paper && botPC == pick.paper) {
            count.papier = count.papier + 2;
        } else if(chooseLetter == pick.scissors && botPC == pick.scissors) {
            count.scissors = count.noznice + 2;
        }
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
    const letters = 'kpn';
    return letters[Math.floor(Math.random() * letters.length)]
}



function actualGameStart() {
    alert("Hra začína. SKÓRE je :            JA - " + playerScore + "            BOT - " + computerScore);
    chooseLetterPromt();
}



function chooseLetterPromt() {
    chooseLetter = prompt("Vyber si medzi pismenami K, P alebo N")
    if(chooseLetter.toLowerCase() !== pick.stone && chooseLetter.toLowerCase() !== pick.paper  && chooseLetter.toLowerCase() !== pick.scissors) {
        alert("Musite si vybrať medzi písmenami K, P alebo N !!!")

        chooseLetterPromt();
    } else {
      botPC = generateLetter();
        console.log(botPC);
        if(chooseLetter == botPC) {
            draw();
        } else if(chooseLetter == pick.stone && botPC == pick.scissors || chooseLetter == pick.paper && botPC == pick.stone || chooseLetter == pick.scissors && botPC == pick.paper) {
            playerWin();
        } else {
            playerLose();
        }

        
    }

    console.log("Tolkoto kamenov: " + count.kamen + " Tolkoto papierov: " + count.papier + " Tolkoto noznic: " + count.noznice);
    history = document.getElementById('history').innerHTML = history + "<br/>";
    computerScoreBoard = document.getElementById('computer-score-board').innerHTML = computerScore;
    playerScoreBoard = document.getElementById('player-score-board').innerHTML = playerScore;
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
    if (playAgainPrompt.toLowerCase() == "ano") {

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
