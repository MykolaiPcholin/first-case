"use strict";
let usersName = prompt ("Enter your name!");
let surName = prompt ("Enter your surname!");
let age = prompt ("Enter your age!");

let first = parseInt(prompt("Enter first number!"));
let second = parseInt(prompt("Enter second number!"));
let third = parseInt(prompt("Enter third number!"));
let average = (first + second + third) / 3;

let details = "x = 6, y = 14, z = 4";

let aluFirst = "x += y - x++ * z; // -4; 6 * 4 >> -24 + 14 >> 6 + (-10) >> -4";
let aluSecond = "z = --x - y * 5; // -65; 6-1 - 14 * 5 >> 5 - 70 >> -65";
let aluThird = "y /= x + 5 % z; // 2; 14 / (6 + 5 % 4) >> 14 / (6 + 1) >> 14 / 7 >> 2";
let aluFourth = "z - x++ + y * 5; // 68; 4 - 6 + 14*5 >> 4 - 6 + 70 >> 68";
let aluFifth = "x = y - x++ * z; // 10; 14 - 6 * 4 >> 14 - 24 >> 10 ";

document.write("<header></header>");
document.write("<main><nav></nav><section>", "Classwork:", "<br/><br/>", "Ваше имя: " + usersName + "<br/>", "Вашая Фамилия: " + surName , "<br/>", "Вам: " + age + " лет", "<br/>", "Вы ввели числа: " + first + " " + second + " " + third + "<br/>", "Среднее число: " + average + "<br/><br/>", "Homework:" + "<br/><br/>" + details + "<br/><br/>" + aluFirst+ "<br/>" + aluSecond+ "<br/>" + aluThird+ "<br/>" + aluFourth+ "<br/>" + aluFifth, "</section></main>");
document.write("<footer></footer>");