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


switch (userInput) {
    case SCISSORS:
        switch (comInput) {
            case SCISSORS:
                alert('컴퓨터가 ' + comInput + '를 내서 무승부..');
                break;
            case ROCK:
                alert('컴퓨터는 ' + comInput + '를 냈고, 당신이 졌어요ㅠㅠ')
                break;
            default:
                alert('컴퓨터는 ' + comInput + '를 냈고, 당신이 이겼어요!')
                break;
        }
        break;

    case ROCK:
        switch (comInput) {
            case SCISSORS:
                alert('컴퓨터가 ' + comInput + '를 냈고, 당신이 이겼어요!');
                break;
            case ROCK:
                alert('컴퓨터는 ' + comInput + '를 내서 무승부..')
                break;
            default:
                alert('컴퓨터는 ' + comInput + '를 냈고, 당신이 졌어요ㅠㅠ')
                break;
        }
        break;

    default:
        switch (comInput) {
            case SCISSORS:
                alert('컴퓨터가 ' + comInput + '를 냈고, 당신이 졌어요ㅠㅠ');
                break;
            case ROCK:
                alert('컴퓨터는 ' + comInput + '를 냈고, 당신이 이겼어요!')
                break;
            default:
                alert('컴퓨터는 ' + comInput + '를 내서 무승부..')
                break;
        }
        break;
}