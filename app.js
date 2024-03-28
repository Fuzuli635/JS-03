//Task-01;
// let userName = "Fuzuli";
// let userName2 = "Aqil";
// let userName3 = "Ibrahim";
// function getUserName(name) {
//   console.log(`${name} is active now`);
// }
// getUserName(userName);
// getUserName(userName2);
// getUserName(userName3);
//Task-02;
// let a = 14;
// let b = 17;
// let c = 18;

// function numbers(num1, num2, num3) {
//   let big;
//   if (num1 > num2 && num1 > num3) {
//     big = num1;
//   } else if (num2 > num1 && num2 > num3) {
//     big = num2;
//   } else if (num3 > num2 && num3 > num1) {
//     big = num3;
//   }
//   return big;
// }
// console.log(numbers(a, b, c));
//Task-03;

//Task-04;
// const num = "99";
// function numberToText(number) {
//   const myArr = [
//     "",
//     "bir",
//     "iki",
//     "uc",
//     "dord",
//     "bes",
//     "alti",
//     "yeddi",
//     "sekkiz",
//     "doqquz",
//   ];
//   const myArr2 = [
//     "",
//     "on",
//     "iyirmi",
//     "otuz",
//     "qirx",
//     "elli",
//     "altmis",
//     "yetmis",
//     "seksen",
//     "doqsan",
//   ];
//   if (+number < 10) {
//     return myArr[+number]
//   } else if (+number >= 10) {
//     const teklik = myArr[+number[1]]
//     const onluq = myArr2[+number[0]]
//     return `${onluq} ${teklik}`
//   }
// }
// console.log(numberToText(num));
//Task-05;
// function findMinNum(num1, num2) {
//   if (num1 < num2) {
//     return num1;
//   } else if (num1 === num2) {
//     console.log("Equal Number");
//   } else {
//     return num2;
//   }
// }
// console.log(findMinNum(30, 6));
//Task-06;
// function calc(num1, num2, operator) {
//   if (operator === "*") {
//     return num1 * num2;
//   }
// }
// console.log(calc(40, 60, "*"));
//Task-07;
// let number = 125502;
// function isLucky(params) {
//   const digit = params.toString();
//   let firstHalfSum = 0;
//   for (let i = 0; i < 3; i++) {
//     firstHalfSum += +digit[i];
//   }
//   let secondHalfSum = 0;
//   for (let i = 3; i < 6; i++) {
//     secondHalfSum += +digit[i];
//   }
//   if (firstHalfSum === secondHalfSum) {
//     console.log("true");
//   } else {
//     console.log("False");
//   }
// }
// isLucky(number);
//Task-08;
// let string = "my name is fuzuli";
// function capitalizeWords(params) {
//   const words = params.split(".");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].toUpperCase();
//     console.log(words[i]);
//   }
// }
// capitalizeWords(string);
//Task -09;
// let num = 10;
// function isEven(num) {
//   if (num % 2 === 0) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }
// isEven(num);
//Task-10;
// let phoneNumber = "+71234567890";
// function isvalidnumber(params) {
//   if (phoneNumber.length === 12 && phoneNumber[0] === "+") {
//     console.log(true);
//   } else {
//     console.log("false");
//   }
// }
// isvalidnumber(phoneNumber);
//Task-11;
