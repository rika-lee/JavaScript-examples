var SCISSORS = '가위';
var ROCK = '바위';
var PAPER = '보';


// 유저의 패
var userInput = prompt('가위, 바위, 보!');


while (userInput !== SCISSORS && userInput !== ROCK && userInput !== PAPER) {
    alert('가위, 바위, 보 중 하나를 입력해야 합니다.');
    var userInput = prompt('가위, 바위, 보!');
}

// 컴퓨터의 패
var comInput;

var rnd = Math.random();

if (rnd < 0.33) {
    comInput = SCISSORS;
} else if (rnd < 0.66) {
    comInput = ROCK;
} else {
    comInput = PAPER;
}

if (userInput === SCISSORS) {
    if (comInput === SCISSORS) {
        alert('컴퓨터의 패 : ' + comInput + ' "무승부"');
    } else if (comInput === ROCK) {
        alert('컴퓨터의 패 : ' + comInput + ' "컴퓨터 승"');
    } else {
        alert('컴퓨터의 패 : ' + comInput + ' "당신 승"');
    }
} else if (userInput === ROCK) {
    if (comInput === SCISSORS) {
        alert('컴퓨터의 패 : ' + comInput + ' "당신 승"');
    } else if (comInput === ROCK) {
        alert('컴퓨터의 패 : ' + comInput + ' "무승부"');
    } else {
        alert('컴퓨터의 패 : ' + comInput + ' "컴퓨터 승"');
    }
} else {
    if (comInput === SCISSORS) {
      alert('컴퓨터의 패 : ' + comInput + ' "컴퓨터 승"');
    } else if (comInput === ROCK) {
      alert('컴퓨터의 패 : ' + comInput + ' "당신 승"');
    } else {
      alert('컴퓨터의 패 : ' + comInput + ' "무승부"');
    }
}


//}
// console.log('컴퓨터의 패:', comInput);