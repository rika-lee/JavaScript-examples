var list = [];

for (var i = 1; i <= 45; i++) {
    list.push(i);
}

var result = [];

for (var i = 0; i < 6; i++) {
    var index = Math.floor(Math.random() * list.length);
    var num = list[index];
    list.splice(index, 1);
    result.push(num);
}

document.write('<div><h1>이번주 당첨 번호는...</h1></div>');

var order = ['첫', '두', '세', '네', '다섯', '여섯'];

for (var i = 0; i < 6; i++) {
    document.write(
        '<div><h2>' + order[i] + '번째 번호</h2>'
        + '<span class="ball">' + result[i] + '</span></div>'
    );
}