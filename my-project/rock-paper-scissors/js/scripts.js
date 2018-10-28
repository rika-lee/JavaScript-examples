// 유저의 패
var userInput = prompt('가위, 바위, 보!');


while (userInput !== '가위' && userInput !== '바위' && userInput !== '보') {
    alert('가위, 바위, 보 중 하나를 입력해야 합니다.');
    var userInput = prompt('가위, 바위, 보!');
}

// 컴퓨터의 패
var comInput;

var rnd = Math.random();

if (rnd < 0.33) {
    comInput = '가위';
} else if (rnd < 0.66) {
    comInput = '바위';
} else {
    comInput = '보';
}

if (userInput === '가위') {
    if (comInput === '가위') {
        alert('컴퓨터의 패 : ' + comInput + ' "무승부"');
    } else if (comInput === '바위') {
        alert('컴퓨터의 패 : ' + comInput + ' "컴퓨터 승"');
    } else {
        alert('컴퓨터의 패 : ' + comInput + ' "당신 승"');
    }
} else if (userInput === '바위') {
    if (comInput === '가위') {
        alert('컴퓨터의 패 : ' + comInput + ' "당신 승"');
    } else if (comInput === '바위') {
        alert('컴퓨터의 패 : ' + comInput + ' "무승부"');
    } else {
        alert('컴퓨터의 패 : ' + comInput + ' "컴퓨터 승"');
    }
} else {
    if (comInput === '가위') {
      alert('컴퓨터의 패 : ' + comInput + ' "컴퓨터 승"');
    } else if (comInput === '바위') {
      alert('컴퓨터의 패 : ' + comInput + ' "당신 승"');
    } else {
      alert('컴퓨터의 패 : ' + comInput + ' "무승부"');
    }
}


//}
// console.log('컴퓨터의 패:', comInput);