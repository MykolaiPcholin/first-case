for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 12; j++) {
                document.write(" * ");
        }
        document.write("<br>");
}
document.write("<br>");

for (let i = 0; i < 12; i++) {
        for (let j = (0 + i); j < 12; j++) {
                document.write(" * ");
        }
        document.write("<br>");
}
document.write("<br>");

for (let i = 0; i < 5; i++) {
        for (let j = (0 + i); j < 5; j++) {
                document.write(" * ");
        }
        document.write("<br>");
}
document.write("<br>");


for (let i = 0; i < 1; i++) {
    for (let j = 9; j < 10; j++) {
        document.write("<pre>" + "        *");
    }
    for (let j = 8; j < 9; j++) {
        document.write("<pre>" + "      * * *");
    }
    for (let j = 7; j < 8; j++) {
        document.write("<pre>" + "    * * * * *");
    }
    for (let j = 6; j < 7; j++) {
        document.write("<pre>" + "  * * * * * * *");
    }
    for (let j = 5; j < 6; j++) {
        document.write("<pre>" + "* * * * * * * * *");
    }
    for (let j = 4; j < 5; j++) {
        document.write("<pre>" + "  * * * * * * *");
    }
    for (let j = 3; j < 4; j++) {
        document.write("<pre>" + "    * * * * *");
    }
    for (let j = 2; j < 3; j++) {
        document.write("<pre>" + "      * * *");
    }
    for (let j = 1; j < 2; j++) {
        document.write("<pre>" + "        *");
    }
    document.write("<br>");
}
document.write("<br>");

let a = 5;
let b = 10;
let sum = 0;
document.write("a = " + a + "<br>");
document.write("b = " + b + "<br>");
document.write("<br>");
for (let i = a; i <= b; i++) {
    sum += i;
    if (i % 2) {
        document.write(i + " ");
    }
    
}
document.write("<br>");
document.write("sum from a to b = " + sum + "<br>");

document.write("<br>");
document.write("let result = (a + b < 4) ? 'Мало' : 'Много'; ");

document.write("<br>");
document.write("<br>");
document.write("var message = (login == 'Вася') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : ''; ");