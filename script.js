let playerScore = 0
let computerScore = 0

let computerScoreBoard = document.getElementById('computer-score-board')
let playerScoreBoard = document.getElementById('player-score-board')

let chooseLetter, botPC


let historyOfChooses = document.getElementById("choosenHistory")
let historyArrayOfChooses = []

let historyOfWins = document.getElementById('history')
let historyArrayOfWins = []


let count = {
    k: 0,
    p: 0,
    n: 0
}

let pick = {
    stone: 'k',
    paper: 'p',
    scissors: 'n',
}


let onBoardingDone = false





function playerWin(choosedMe, choosedBot) {
    historyArrayOfChooses.push("Toto vybral bot:   " + botPC  + "   Toto si vybral ty:    " + chooseLetter)
    playerScore++
    historyArrayOfWins.push("Vyhra")
    count[choosedMe]++
    count[choosedBot]++
    
}

function playerLose(choosedMe, choosedBot) {
    historyArrayOfChooses.push("Toto vybral bot:   " + botPC +  "   Toto si vybral ty:    " + chooseLetter)
    computerScore++
    historyArrayOfWins.push("Prehra")
    count[choosedMe]++
    count[choosedBot]++
}

function draw(choosed) {
        historyArrayOfChooses.push("Toto vybral bot:   " + botPC + "   Toto si vybral ty:    " + chooseLetter)
        historyArrayOfWins.push("Remiza")
        count[choosed] = count[choosed] + 2
    }






function gameStart() {
    if(onBoardingDone == true) {
        return actualGameStart()
    } start()
}






function wordAdjustment(cleanWord) {
    return cleanWord
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
}

function start() {
    let dirtyWord = prompt("Ste oboznámený s pravidlami ? (áno/nie)")
    if(wordAdjustment(dirtyWord) == "ano") {
        onBoardingDone = true
        return actualGameStart()
    } 
    
    document.getElementById("rules").style.border = "3px solid red"
    setTimeout(() => {
        document.getElementById("rules").style.border = "none"
    }, 800)
    onBoardingDone = true
        
}






function generateLetter() {
    const letters = 'kpn'
    return letters[Math.floor(Math.random() * letters.length)]
}






function actualGameStart() {
    alert("Hra začína. SKÓRE je :            JA - " + playerScore + "            BOT - " + computerScore)
    chooseLetterPromt()
}






function chooseLetterPromt() {
    chooseLetter = prompt("Vyber si medzi pismenami K, P alebo N")
    if(chooseLetter.toLowerCase() !== pick.stone && chooseLetter.toLowerCase() !== pick.paper  && chooseLetter.toLowerCase() !== pick.scissors) {
        alert("Musite si vybrať medzi písmenami K, P alebo N !!!")
        return chooseLetterPromt()
    }
      
   
    botPC = generateLetter()
    console.log(botPC)
    if(chooseLetter == botPC) {
        draw(chooseLetter)
    } else if(chooseLetter == pick.stone && botPC == pick.scissors || chooseLetter == pick.paper && botPC == pick.stone || chooseLetter == pick.scissors && botPC == pick.paper) {
        playerWin(chooseLetter, botPC)
    } else {
        playerLose(chooseLetter, botPC)
    }


    historyOfChooses.innerHTML = historyArrayOfChooses.join("<br>")
    historyOfWins.innerHTML = historyArrayOfWins.join("<br>")
    computerScoreBoard = document.getElementById('computer-score-board').innerHTML = computerScore
    playerScoreBoard = document.getElementById('player-score-board').innerHTML = playerScore
    fullGameWin()
}






function fullGameWin() {
    if(playerScore >= 5) {
        gameOver = document.getElementById('gameOver').innerHTML = "Vyhral si celu hru. Dosiahol si " + playerScore + " bodov."
        setTimeout(() => {
            playAgain()
        }, 3000)
        return
    }

    if(computerScore >= 5) {
        gameOver = document.getElementById('gameOver').innerHTML = "Prehral si celu hru. Bot dosiahol " + computerScore + " bodov."
    setTimeout(() => {
        playAgain()
    }, 1500)
    }

}




function playAgain() {
    let playAgainPrompt = prompt("Chceš hrať odznova ?")
    if (wordAdjustment(playAgainPrompt) == "ano") {

        playerScore = 0
        computerScore = 0

        count.k = 0
        count.p = 0
        count.n = 0

        onBoardingDone = 0

        document.getElementById('player-score-board').innerHTML = 0

        document.getElementById('computer-score-board').innerHTML = 0

        historyArrayOfWins = []
        document.getElementById('history').innerHTML = null

        document.getElementById('gameOver').innerHTML = null

        historyArrayOfChooses = []
        historyOfChooses.innerHTML = null
    }
}
