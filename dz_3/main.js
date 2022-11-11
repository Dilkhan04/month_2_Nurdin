// Задание №1

// let numbers = {
//     number1: prompt("Введите первое число?"),
//     number2: prompt("Введите первое число?")
// }
// function numbersMin(number1, number2){
//     console.log(Math.min(number1, number2))
// }
// numbersMin(numbers.number1, numbers.number2)

// Задание №2

// function argumentLength(){
//     const argument = prompt("Введите что-то?");
//     console.log(argument.length)
// }
// argumentLength()

// Задание №3
// 3.1

// const num1 = prompt("Введите первое число?");
// const maths = prompt("+ or - or : or * ???");
// const num2 = prompt("Введите второе число?");
// let sum;
// function math(){
//     if(maths === "+"){
//         sum = parseInt(num1) + parseInt(num2);
//         console.log(sum)
//     } else if(maths === "-"){
//         sum = num1 - num2;
//         console.log(sum)
//     } else if(maths === ":"){
//         sum = num1 / num2;
//         console.log(sum)
//     } else if(maths === "*"){
//         sum = num1 * num2;
//         console.log(sum)
//     } else {
//         alert("У вас ОШИБКА!!!")
//     }
// }
// math()

// 3.2

// let num1 = prompt("Введите первое число?");
// let maths = prompt("+ or - or : or * ???");
// let num2 = prompt("Введите второе число?");
// let result;
// switch (num1, num2, maths){
//     case "+":
//         result = parseInt(num1) + parseInt(num2)
//         console.log(result)
//         break;
//     case "-":
//         result = num1 - num2
//         console.log(result)
//         break;
//     case "*":
//         result = num1 * num2
//         console.log(result)
//         break;
//     case "/":
//         result = num1 / num2
//         console.log(result)
//         break;
//     default:
//         alert("У вас ОШИБКА!!!")
// }