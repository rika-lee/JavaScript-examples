//이름을 물어본다
var userName = prompt("What's your name?");

//이름을 분석한다
if (userName === 'rika' || userName === 'Rika' || userName === 'RIKA' || userName === '리카' || userName === 'りか') {
    alert('Hello, master!');

} else {
    alert('Hello, ' + userName)

}
