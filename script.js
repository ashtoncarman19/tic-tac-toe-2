
const playerFactory = (name , icon, turn) => {
    const yourTurn = () => console.log(' it is your turn')
    return { name , icon , turn, yourTurn }
}

const playerOne = playerFactory('Cat', "<img src = 'cat.png' />", true);
const playerTwo = playerFactory('Dog', "<img src = 'dog.png' />", false);
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
    square.textContent = 'ㅤ'
    square.addEventListener('click', e => {
        if (playerOne.turn == true && gameWinner == null
            && e.target.textContent == 'ㅤ'){
            board.splice(e.target.id, 1, 'x')
            square.innerHTML = playerOne.icon
            playerOne.turn = false;
            playerTwo.turn = true
            console.log(board)
            checkForWinner()

        }

        else if(playerTwo.turn == true && gameWinner == null
            && e.target.textContent == 'ㅤ'){
            board.splice(e.target.id, 1, 'o')
            square.innerHTML = playerTwo.icon
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
//creates a div with the class 'win' and puts it in the 'board' div
function alertWinner(a){
    maker = document.createElement('div')
    boardDiv = document.querySelector('.board')
    maker.textContent = a + " is the winner!"
    maker.className = 'win'
    boardDiv.appendChild(maker)
}

function checkForWinner(){
    turns++;

    // Seperates each player into different arrays based on 
    // x or o moves
    let xPlays = board.reduce((a, e, i) => 
    (e === 'x') ? a.concat(i) : a, []);
    let oPlays = board.reduce((a, e, i) => 
    (e === 'o') ? a.concat(i) : a, []);
    // Loop iterates over each winningCombo array 
    for(let [index, combo] of winningCombos.entries()) {
        // Check if player moves index is equal to combo array index 
        if (combo.every(elem => xPlays.indexOf(elem) > -1)) {
            
            gameWinner = playerOne.name;
            winnerCombo = combo;
            alertWinner(gameWinner)
            
        } else if (combo.every(elem => oPlays.indexOf(elem) > -1)) {
            
            gameWinner = playerTwo.name;
            winnerCombo = combo;
            alertWinner(gameWinner)

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