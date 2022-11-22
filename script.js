window.addEventListener("DOMContentLoaded", (event) => {

});

let currentScoreP1 = 0;
let totalScoreP1 = 0;

let currentScoreP2 = 0;
let totalScoreP2 = 0;

let currentTurn = 1;

function holdCurrentScore() {
    if(currentTurn === 1) {
        currentScore = currentScoreP1;
    } else {
        currentScore = currentScoreP2;
    }
    if(currentScore <= 0) {
        alert('It is impossible to send your score. (0)');
    } else {
        if(currentTurn === 1) {
            totalScoreP1 = totalScoreP1 + currentScore;
            currentScoreP1 = 0;
        } else {
            totalScoreP2 = totalScoreP2 + currentScore;
            currentScoreP2 = 0;
        }
    }
}

function checkCurrentPlayer() {
    if(window.getComputedStyle(document.getElementById('turnP1')).display === 'none') {
        currentTurn = 2;
    } else {
        currentTurn = 1;
    }
}