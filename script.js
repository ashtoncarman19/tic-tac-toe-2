
const playerFactory = (name , icon, turn) => {
    const yourTurn = () => console.log(' it is your turn')
    return { name , icon , turn, yourTurn }
}

const playerOne = playerFactory('Player One', "X", true);
const playerTwo = playerFactory('Player Two', "𝗼", false);
console.log(playerOne , playerTwo)

const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
];
let turns = 0;
const board = ['','','','','','','','']
let winnerCombo = []
let gameWinner = null
console.log(board, winnerCombo, gameWinner)

const makeMove = (function () {
const square = document.querySelectorAll(".card")
square.forEach(square =>{
    square.addEventListener('click', e => {
        if (playerOne.turn == true && gameWinner == null
            && e.target.textContent == ''){
            board.splice(e.target.id, 1, playerOne.icon)
            square.textContent = playerOne.icon
            playerOne.turn = false;
            playerTwo.turn = true
            console.log(board)
            checkForWinner()

        }

        if(playerTwo.turn == true && gameWinner == null
            && e.target.textContent == ''){
            board.splice(e.target.id, 1, playerTwo.icon)
            square.textContent = playerTwo.icon
            playerOne.turn = true;
            playerTwo.turn = false
            console.log(board)
            checkForWinner()

        }

        else{
            return
        }

    })
})
})
makeMove()

function checkForWinner(){
    turns++;

    // Seperates each player into different arrays based on 
    // x or o moves
    let xPlays = board.reduce((a, e, i) => 
    (e === playerOne.icon) ? a.concat(i) : a, []);
    let oPlays = board.reduce((a, e, i) => 
    (e === playerTwo.icon) ? a.concat(i) : a, []);
    // Loop iterates over each winningCombo array 
    for(let [index, combo] of winningCombos.entries()) {
        // Check if player moves index is equal to combo array index 
        if (combo.every(elem => xPlays.indexOf(elem) > -1)) {
            
            gameWinner = playerOne.name;
            winnerCombo = combo;
            alert( gameWinner+ " is the winner!")
            
        } else if (combo.every(elem => oPlays.indexOf(elem) > -1)) {
            
            gameWinner = playerTwo.name;
            winnerCombo = combo;
            alert(gameWinner+ " is the winner!")

        } else if (gameWinner == null && gameWinner == undefined 
            && turns == 9) {
            gameWinner = 'tie';
            winnerCombo = combo;
            alert("its a tie")
        };
    };
}

function gameReset(){
    const square = document.querySelectorAll(".card")
        square.forEach(square =>{
            square.textContent = ""
        })
    winner = null;
    playerOne.turn = true;
    playerTwo.turn = false;
    turns = 0;
    board.splice(0,board.length, '')
    console.log(board, winner, playerOne.turn, playerTwo.turn)
}