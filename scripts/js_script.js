"use strict";

let number = 5.2;

console.log(number);

const persone = 'string';

const bool = false;

const bill = true;

const object = {
	name: "avantis",
	manufacture: 2021,
	color: "red",
	isWorks: true
};

console.log(object["name"]);

let arr = ['plum.png','dick-pick.jpeg', 5, [], {}];
arr[6] = 'hello bitch'
console.log(arr.length)
console.log(arr[arr.length-1]) 

const arr = [1, 2, 3];  //массив
console.log(arr[0]);
const objArr = {0: 1, 1: 2, 2: 3};  //обьект
console.log(objArr[1]);

objArr.yy = '1234'; или objArr[yy] = '1234' //добавляем новое свойство в обьект
console.log(objArr.yy);

let count = 0;
count += 10;
console.log(count);

let x = 10, y = 16;
console.log(x !== y);

console.log("hell" > "hill")

let x = 3, y = 4;
function minus1(x) {return x - 1, x * x;};
console.log(minus1(y))

alert('restart your PC')