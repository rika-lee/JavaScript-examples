var comScore = 0;
var userScore = 0;
var isComputerTurn = true;
var shotsLeft = 15;

function onComputerShoot() {
    if (!isComputerTurn)
        return;

    var textElem = document.getElementById('text');
    var comScoreElem = document.getElementById('computer-score');
    var shootType = Math.random() < 0.5 ? 2 : 3;

    if (shootType === 2) {
        if (Math.random() < 0.5) {
            textElem.innerHTML = '컴퓨터 2점 슛 성공!';
            comScore += 2;
            comScoreElem.innerHTML = comScore;
        } else {
            textElem.innerHTML = '컴퓨터 2점 슛 실패';
        }
    } else {
        if (Math.random() < 0.33) {
            textElem.innerHTML = '컴퓨터 3점 슛 성공!';
            comScore += 3;
            comScoreElem.innerHTML = comScore;
        } else {
            textElem.innerHTML = '컴퓨터 3점 슛 실패';
        }
    }
    isComputerTurn = false;

    var computerButtons = document.getElementsByClassName('btn-computer');

    for (var i = 0; i < computerButtons.length; i++) {
        computerButtons[i].disabled = true;
    }

    var userButtons = document.getElementsByClassName('btn-user');

    for (var i = 0; i < userButtons.length; i++){
        userButtons[i].disabled = false;
    }
}

function onUserShoot(shootType) {

    if (isComputerTurn)
        return;

    var textElem = document.getElementById('text');
    var userScoreElem = document.getElementById('user-score');

    if (shootType === 2) {
        if (Math.random() < 0.5) {
            textElem.innerHTML = '2점 슛 성공!';
            userScore += 2;
            userScoreElem.innerHTML = userScore;
        } else {
            textElem.innerHTML = '2점 슛 실패';
        }
    } else {
        if (Math.random() < 0.33) {
            textElem.innerHTML = '3점 슛 성공!';
            userScore += 3;
            userScoreElem.innerHTML = userScore;
        } else {
            textElem.innerHTML = '3점 슛 실패';
        }
    }
    isComputerTurn = true;

    var computerButtons = document.getElementsByClassName('btn-computer');

    for (var i = 0; i < computerButtons.length; i++) {
        computerButtons[i].disabled = false;
    }

    var userButtons = document.getElementsByClassName('btn-user');

    for (var i = 0; i < userButtons.length; i++) {
        userButtons[i].disabled = true;
    }
    shotsLeft--;

    var shotsLeftElem = document.getElementById('shots-left');
    shotsLeftElem.innerHTML = shotsLeft;

    if (shotsLeft === 0) {
        if  (userScore > comScore)
            textElem.innerHTML = '승리했습니다!';
        else if (userScore < comScore)
            textElem.innerHTML = '아쉽게도 졌습니다...';
        else
            textElem.innerHTML = '비겼습니다.';

        for (var i = 0; i < computerButtons.length; i++) {
            computerButtons[i].disabled = true;
        }

        for (var i =0; i < userButtons.length; i++) {
            userButtons[i].disabled = true;
        }
    }
}