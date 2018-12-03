var stars = '';
for (i = 0; i < 5; i++) {
    for (j = 0; j <= i; j++) {
        stars += '*'
    } 
    stars += '\n';
} 
console.log(stars);

var stars = '';
for (i = 0; i < 5; i++) {
    for (j = 4; j >= i; j--) {
        stars += '*';
    }
    stars += '\n';
}
console.log(stars);

var stars = '';
for (i = 0; i < 5; i++) {
    for (j = 3; j >= i; j--) {
        stars += ' ';
    }
    for (k = 0; k <= i; k++) {
        stars += '*';
    }
    stars += '\n';
}
console.log(stars);

var stars = '';
for (i = 0; i < 5; i++) {
    for (j = 1; j <= i; j++) {
        stars += ' ';
    }
    for (k = 4; k >= i; k--) {
        stars += '*';
    }
    stars += '\n';
}
console.log(stars);

var stars = '';
for (i = 0; i < 9; i++) {
    if (i < 5) {
        for (j = 0; j <= i; j++) {
            stars += '*';
        }
        stars += '\n';
    } else {
        for (j = 8; j >= i; j--) {
            stars += '*';
        }
        stars += '\n';
    }
}
console.log(stars);

var stars = '';
for (i = 0; i < 9; i++) {
    if (i < 5) {
        for (j = 3; j >= i; j--) {
            stars += ' ';
        }
        for (k = 0; k <= i; k++) {
            stars += '*';
        }
        stars += '\n';
    } else {
        for (j = 5; j <= i; j++) {
            stars += ' ';
        }
        for (k = 8; k >= i; k--) {
            stars += '*';
        }
        stars += '\n';
    }
} 
console.log(stars);

var stars = '';
for (i = 0; i < 5; i++) {
    for (j = 3; j >= i; j--) {
        stars += ' ';
    }
    for (k = 0; k <= 2*i; k++) {
        stars += '*';
    }
    stars += '\n';
}
console.log(stars);

var stars = '';
for (i = 0; i < 5; i++) {
    for (j = 1; j <= i; j++) {
        stars += ' ';
    }
    for (k = 8; k >= 2*i; k--) {
        stars += '*';
    }
    stars += '\n';
}
console.log(stars);

var stars = '';
for (i = 0; i < 9; i++) {
    if (i < 5) {
        for (j = 3; j >= i; j--) {
            stars += ' ';
        }
        for (k = 0; k <= 2*i; k++) {
            stars += '*';
        }
        stars += '\n';
    } else {
        for (j = 5; j <= i; j++) {
            stars += ' ';
        }
        for (k = 16; k >= 2*i; k--) {
            stars += '*';
        }
        stars += '\n';
    }
} 
console.log(stars);

var stars = '';
for (i = 0; i < 9; i++) {
    if (i < 5) {
        for (j = 3; j >= i; j--) {
            stars += '*';
        }
        for (k = 0; k <= 2*i; k++) {
            stars += ' ';
        }
        for (l = 3; l >= i; l--) {
            stars += '*';
        }
        stars += '\n';
    } else {
        for (j = 5; j <= i; j++) {
            stars += '*';
        }
        for (k = 16; k >= 2*i; k--) {
            stars += ' ';
        }
        for (l = 5; l <= i; l++) {
            stars += '*';
        }
        stars += '\n';
    }
}
console.log(stars);