let playerTurn = 0;
let totalScores = {
    playerOne: 0,
    playerTwo: 0
}

const rollDice = () => {
    let random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    document.getElementById('dice-img').src = "./images/"+ random +".png";

    let getScore = document.getElementById('current-' + playerTurn).innerText;
    let newScore = Number(getScore) + random;

    //random === 1 ? newScore = 0 : console.log('/');

    let updateNewScore = document.getElementById('current-' + playerTurn).innerText = newScore;

    let scoreTotal = 0;
    playerTurn === 1 ? scoreTotal = totalScores.playerOne : scoreTotal = totalScores.playerTwo;
    scoreTotal + updateNewScore >= 100 ? alert('Player '+ playerTurn +' wins !') : console.log('/');

    newScore >= 100 ? setTimeout(() => { alert('Player '+ playerTurn +' wins !') }, 350) : updateNewScore;

    // Revoir la fin rendu a 100 le calcule
}

const getCurrentPlayer = () => {
    window.getComputedStyle(document.getElementById('turnP2')).display === 'none' ? playerTurn = 1 : playerTurn = 2;
}

const addedToTotal = (points) => {
    points <= 0 ? alert('Impossible to add points. (Invalid value) Player ' + playerTurn)
        : playerTurn === 1 ? totalScores.playerOne = totalScores.playerOne + points
            : totalScores.playerTwo = totalScores.playerTwo + points;
}

window.addEventListener("DOMContentLoaded", (event) => {
    getCurrentPlayer();

    setTimeout(() => {
        alert('Your turn to play Player 1 !');
    }, 500);
});