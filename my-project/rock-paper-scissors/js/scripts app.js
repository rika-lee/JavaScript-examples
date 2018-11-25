var userName = prompt("What's your name?");
var masterNames = ['rika', 'Rika', 'RIKA', '리카', 'りか']

if (masterNames.includes(userName) === true ) {
    alert('Hello, master!');
} else {
    alert('Hello, ' + userName);
}
