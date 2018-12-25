for (i = 0; i < 1; i++) {
    for (j = 10; j >= i; j--) {
        document.write(
            '<span class="space"></span>'
        );
    }
    for (k = 0; k <= 2*i; k++) {
        document.write(
            '<span class="star"></span>'
        );
    }
    document.write(
        '<br>'
    );
}
for (i = 1; i < 13; i++) {
    if (i % 4 !== 0) {
        for (j = 11; j >= i; j--) {
            document.write(
                '<span class="space"></span>'
            );
        }
        for (k = 0; k <= 2*i; k++) {
            document.write(
                '<span class="leaf"></span>'
            );    
        }
        document.write(
            '<br>'
        );
    } else {
        for (j =11; j >= i; j--) {
            document.write(
                '<span class="space"></span>'
            );
        }
        for (k = 0; k <= 2*i; k++) {
            document.write(
                '<span class="deco"></span>'
            );    
        }
        document.write(
            '<br>'
        );
    }
}

document.write(
    '<br>'
);

for (i = 0; i < 1; i++) {
    for (j = 4; j >= i; j--) {
        document.write(
            '<span class="space"></span>'
        );
    }
    for (k = 0; k <= 2*i; k++) {
        document.write(
            '<span class="star"></span>'
        );
    }
    document.write(
        '<br>'
    );
}
for (n = 0; n < 3; n++) {
    for (i = 1; i < 5; i++) {
        if (i % 4 !== 0) {
            for (j = 5; j >= i; j--) {
                document.write(
                    '<span class="space"></span>'
                );
            }
            for (k = 0; k <= 2 * i; k++) {
                document.write(
                    '<span class="leaf"></span>'
                );
            }
            document.write(
                '<br>'
            );    
        } else {
            for (j = 5; j >= i; j--) {
                document.write(
                    '<span class="space"></span>'
                );
            }
            for (k = 0; k <= 2 * i; k++) {
                document.write(
                    '<span class="deco"></span>'
                );
            }
            document.write(
                '<br>'
            );
        }
    }
}

document.write(
    '<br>'
);

for (i = 0; i < 1; i++) {
    for (j = 4; j >= i; j--) {
        document.write(
            '<span class="space"></span>'
        );
    }
    for (k = 0; k <= 2*i; k++) {
        document.write(
            '<span class="star"></span>'
        );
    }
    document.write(
        '<br>'
    );
}
for (n = 0; n < 3; n++) {
    for (i = 1; i < 5; i++) {
        if (i % 4 !== 0) {
            for (j = 5 - n; j >= i; j--) {
                document.write(
                    '<span class="space"></span>'
                );
            }
            for (k = 0; k <= 2 * (i + n); k++) {
                document.write(
                    '<span class="leaf"></span>'
                );
            }
            document.write(
                '<br>'
            );    
        } else {
            for (j = 5 - n; j >= i; j--) {
                document.write(
                    '<span class="space"></span>'
                );
            }
            for (k = 0; k <= 2 * (i + n); k++) {
                document.write(
                    '<span class="deco"></span>'
                );
            }
            document.write(
                '<br>'
            );
        }
    }
}

document.write(
    '<br>'
);

// 별
for (i = 0; i < 1; i++) {
    for (j = 4; j >= i; j--) {
        document.write(
            '<span class="space"></span>'
        );
    }
    for (k = 0; k <= 2*i; k++) {
        document.write(
            '<span class="star"></span>'
        );
    }
    document.write(
        '<br>'
    );
}
// 첫 번째 tree
for (i = 1; i < 4; i++) {
    for (j = 5; j >= i; j--) {
        document.write(
            '<span class="space"></span>'
        );
    }
    for (k = 0; k <= 2*i; k++) {
        document.write(
            '<span class="leaf"></span>'
        );
    }
    document.write(
        '<br>'
    );
}
// 첫 번째 deco
for (i = 4; i < 5; i++) {
    for (j = 5; j >= i; j--) {
        document.write(
            '<span class="space"></span>'
        );
    }
    for (k = 0; k <= 2*i; k++) {
        document.write(
            '<span class="deco"></span>'
        );
    }
    document.write(
        '<br>'
    );
}
// 두 번째 tree
for (i = 2; i < 5; i++) {
    for (j = 5; j >= i; j--) {
        document.write(
            '<span class="space"></span>'
        );
    }
    for (k = 0; k <= 2*i; k++) {
        document.write(
            '<span class="leaf"></span>'
        );
    }
    document.write(
        '<br>'
    );
}
// 두 번째 deco
for (i = 5; i < 6; i++) {
    for (j = 5; j >= i; j--) {
        document.write(
            '<span class="space"></span>'
        );
    }
    for (k = 0; k <= 2*i; k++) {
        document.write(
            '<span class="deco"></span>'
        );
    }
    document.write(
        '<br>'
    );
}
// 세 번째 tree
for (i = 3; i < 6; i++) {
    for (j = 5; j >= i; j--) {
        document.write(
            '<span class="space"></span>'
        );
    }
    for (k = 0; k <= 2*i; k++) {
        document.write(
            '<span class="leaf"></span>'
        );
    }
    document.write(
        '<br>'
    );
}
// 세 번째 deco
for (i = 6; i < 7; i++) {
    for (k = 0; k <= 2*i; k++) {
        document.write(
            '<span class="deco"></span>'
        );
    }
    document.write(
        '<br>'
    );
}
// 기둥
for (i = 0; i < 3; i++) {
    for (j = 4; j >= 0; j--) {
        document.write(
            '<span class="space"></span>'
        );
    }
    for (k = 2; k >= 0; k--) {
        document.write(
            '<span class="trunk"></span>'
        );
    }
    document.write(
        '<br>'
    );
}