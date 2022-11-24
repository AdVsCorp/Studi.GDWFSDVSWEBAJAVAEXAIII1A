/*jshint esversion: 6 */

let playerTurn = 0;
let newScore = 0;
let totalScores = {
    playerOne: 0,
    playerTwo: 0
};

function rollDice () {
    let scoreTotal = 0;

    let random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    document.getElementById('dice-img').src = "./images/"+ random +".png";

    newScore = Number(document.getElementById('current-' + playerTurn).innerText) + random;

    if(random === 1) {
        endOfTurn(false);
    }

    let updateNewScore = document.getElementById('current-' + playerTurn).innerText = newScore;

    if(playerTurn === 1) {
        scoreTotal = totalScores.playerOne;
    } else {
        scoreTotal = totalScores.playerTwo;
    }

    if(scoreTotal + updateNewScore >= 100) {
        alert('Player '+ playerTurn +' wins !');
        raz();
    }
}

function raz () {
    playerTurn = 1;
    newScore = 0;
    totalScores.playerOne = 0;
    totalScores.playerTwo = 0;

    document.getElementById('turnP1').style.display = 'inline';
    document.getElementById('turnP2').style.display = 'none';
    document.getElementById('current-1').innerText = 0;
    document.getElementById('current-2').innerText = 0;
    document.getElementById('total-score-p1').innerText = 0;
    document.getElementById('total-score-p2').innerText = 0;
    document.getElementById('dice-img').src = "./images/1.png";
}

function endOfTurn (bool) {
    if(bool) {
        switchTurn();
    } else {
        switchTurn();
        alert('Too bad ! The current tour is lost !');  
    }
}

function switchTurn () {
    newScore = 0;

    if(playerTurn === 1) {
        document.getElementById('turnP1').style.display = 'none';
        document.getElementById('turnP2').style.display = 'inline';
        document.getElementById('current-' + playerTurn).innerText = 0;
        playerTurn = 2;
    } else {
        document.getElementById('turnP1').style.display = 'inline';
        document.getElementById('turnP2').style.display = 'none';
        document.getElementById('current-' + playerTurn).innerText = 0;
        playerTurn = 1;
    }

    setTimeout(() => {
        alert('Your turn to play Player '+ playerTurn +' !');
    }, 250);
}

function getCurrentPlayer () {
    if(window.getComputedStyle(document.getElementById('turnP2')).display === 'none') {
        playerTurn = 1;
    } else {
        playerTurn = 2;
    }
}

function getCurrentPoints () {
    if(playerTurn === 1) {
        return document.getElementById('current-1').innerText;
    } else {
        return document.getElementById('current-2').innerText;
    }
}

function addedToTotal (points) {
    if(points <= 0) {
        alert('Impossible to add points. (Invalid value) Player ' + playerTurn);
    } else {
        if(playerTurn === 1) {
            let result = totalScores.playerOne = totalScores.playerOne + Number(points);
            document.getElementById('total-score-p1').innerText = result;
            endOfTurn(true);
        } else {
            let result = totalScores.playerTwo = totalScores.playerTwo + Number(points);
            document.getElementById('total-score-p2').innerText = result;
            endOfTurn(true);
        }
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    getCurrentPlayer();

    setTimeout(() => {
        alert('Your turn to play Player 1 !');
    }, 500);
});