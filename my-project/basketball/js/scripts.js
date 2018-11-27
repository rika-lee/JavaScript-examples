var comScore = 0;
var comPercent2 = 0.5;
var comPercent3 = 0.33;

var userScore = 0;
var userPercent2 = 0.5;
var userPercent3 = 0.33;

var isComputerTurn = true;
var shotsLeft = 15;

function showText(s) {
    var textElem = document.getElementById('text');
    textElem.innerHTML = s;
}

function updateComputerScore(score) {
    comScore += score;
    var comScoreElem = document.getElementById('computer-score');
    comScoreElem.innerHTML = comScore;
}

function updateUserScore(score) {
    userScore += score;
    var userScoreElem = document.getElementById('user-score');
    userScoreElem.innerHTML = userScore;
}

function disableComputerButtons(flag) {
    var computerButtons = document.getElementsByClassName('btn-computer');

    for (var i = 0; i < computerButtons.length; i++) {
        computerButtons[i].disabled = flag;
    }
}

function disableUSerButtons(flag) {
    var userButtons = document.getElementsByClassName('btn-user');

    for (var i=0; i < userButtons.length; i++) {
        userButtons[i].disabled = flag;
    }
}

function updateAI() {
    var diff = userScore - comScore;

    if (diff >= 10) {
        comPercent2 = 0.7;
        comPercent3 = 0.43;
    } else if (diff >= 6) {
        comPercent2 = 0.6;
        comPercent3 = 0.38;
    } else if (diff <= -10) {
        comPercent2 = 0.3;
        comPercent3 = 0.23;
    } else if (diff <= -6) {
        comPercent2 = 0.4;
        comPercent3 = 0.28;
    }
}

function onComputerShoot() {
    if (!isComputerTurn)
        return;

    updateAI();    

    var shootType = Math.random() < 0.5 ? 2 : 3;

    if (shootType === 2) {
        if (Math.random() < comPercent2) {
            showText('컴퓨터 2점 슛 성공!');
            updateComputerScore(2);
        } else {
            showText('컴퓨터 2점 슛 실패');
        }
    } else {
        if (Math.random() < comPercent3) {
            showText('컴퓨터 3점 슛 성공!');
            updateComputerScore(3);
        } else {
            showText('컴퓨터 3점 슛 실패');
        }
    }
    isComputerTurn = false;

    disableComputerButtons(true);
    disableUSerButtons(false);
}

function onUserShoot(shootType) {

    if (isComputerTurn)
        return;

    if (shootType === 2) {
        if (Math.random() < userPercent2) {
            showText('2점 슛 성공!');
            updateUserScore(2);
        } else {
            showText('2점 슛 실패');
        }
    } else {
        if (Math.random() < userPercent3) {
            showText('3점 슛 성공!');
            updateUserScore(3);
        } else {
            showText('3점 슛 실패');
        }
    }
    isComputerTurn = true;

    disableComputerButtons(false);
    disableUSerButtons(true);

    shotsLeft--;

    var shotsLeftElem = document.getElementById('shots-left');
    shotsLeftElem.innerHTML = shotsLeft;

    if (shotsLeft === 0) {
        if  (userScore > comScore)
            showText('승리했습니다!');
        else if (userScore < comScore)
            showText('아쉽게도 졌습니다...');
        else
            showText('비겼습니다.');

        disableComputerButtons(true);
        disableUSerButtons(true);
        
        var refreshButtons = document.getElementsByClassName('btn-refresh');
        for (i = 0; i < refreshButtons.length; i++) {
        refreshButtons[i].disabled = false;
        }   
    }
}

function reloadPage() {
    location.reload();
}