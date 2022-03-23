const playerFactory = (name , icon) => {
    const yourTurn = () => console.log(' it is your turn')
    return { name , icon , yourTurn }
}

const playerOne = playerFactory('Player One', "✗");
const playerTwo = playerFactory('Player Two', "○");
console.log(playerOne , playerTwo)

const cards = document.getElementsByClassName("card");
const moves = [];
for (i = 0; i < cards.length; i++){
    moves.push(i)
}
console.log(moves)


let turns = 1;

//splice each move to the move array with the
//index of the clicked div's ID
$(document.body).click(function(evt){
    var clicked = evt.target;
    var currentID = clicked.id || "No ID!";
    $(clicked).html(currentID);
  })

/*
const box = document.querySelectorAll(".card")
box.forEach(box =>{
    box.addEventListener('click', () => {
        if(turns % 2 === 0){
            box.textContent = playerTwo.icon
            moves.splice(idTracker(), 1, playerTwo.icon)
        }

        else if(turns === 1,3,5,7,9){
            box.textContent = playerOne.icon
            moves.splice(idTracker(), 1, playerOne.icon)
        }
        turns++;
        console.log(turns)
        console.log(moves)
    })
})
*/