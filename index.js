// CONST
const player1 = document.querySelector('.player-1')
const player2 = document.querySelector('.player-2')
const playerBtn1 = document.querySelector('.player-btn-1')
const playerBtn2 = document.querySelector('.player-btn-2')
const gameLevel = document.querySelector('#game-level')
const resetBtn = document.querySelector('.reset')
// LET
let player1Score = 0
let player2Score = 0
let level = +gameLevel.value
let gameOver = true

// Players 1 and 2 
playerBtn1.addEventListener('click', () => {
    if(gameOver){
        player1Score++
        if (player1Score == level) {
            gameOver = false
            player1.style.color = 'green'
            player2.style.color = 'red'
        }
        player1.textContent = player1Score
    }
})

playerBtn2.addEventListener('click', () => {
    if(gameOver){
        player2Score++
        if (player2Score == level) {
            gameOver = false
            player1.style.color = 'red'
            player2.style.color = 'green'
        }
        player2.textContent = player2Score
    }
})

gameLevel.addEventListener('change', () => {
    level = +gameLevel.value
    resetFunc()
})


resetBtn.addEventListener('click', resetFunc)

function resetFunc() {
    player1.textContent = 0 
    player2.textContent = 0
    player1.style.color = 'white'
    player2.style.color = 'white'
    player1Score = 0
    player2Score = 0
    gameOver = true
}
