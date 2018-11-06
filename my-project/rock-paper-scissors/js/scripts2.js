var SCISSORS = '가위';
var ROCK = '바위';
var PAPER = '보';

function onButtonClick(userInput) {
    var comInput;
    var rnd = Math.random();

    if (rnd < 0.33) {
        comInput = SCISSORS;
    } else if (rnd < 0.66) {
        comInput = ROCK;
    } else {
        comInput = PAPER;
    }

    var result = '컴퓨터의 패 : ' + comInput;

    if(userInput === SCISSORS){
        if (comInput === SCISSORS) {
            result += ' "무승부"';
        } else if (comInput === ROCK) {
            result += ' "컴퓨터 승"';
        } else {
            result += ' "당신 승"';
        }
    } else if(userInput === ROCK){
        if (comInput === SCISSORS) {
            result += ' "당신 승"';
        } else if (comInput === ROCK) {
            result += ' "무승부"';
        } else {
            result += ' "컴퓨터 승"';
        }
    } else {
        if (comInput === SCISSORS) {
          ' "컴퓨터 승"';
        } else if (comInput === ROCK) {
          result += ' "당신 승"';
        } else {
          result += ' "무승부"';
        }
    }
    alert(result);
}