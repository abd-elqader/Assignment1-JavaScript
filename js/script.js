///////////// 1- Write a program that allow to user enter number then print /////////////
var num = prompt('enter number');
window.alert(num);


///////////// 2 - Write aprogram that take number from user then print yes if that number can divide by 3 and 4 otherwise print no /////////////////
var age = Number(window.prompt('enter your number'));
if (age % 4 == 0 && age % 3 == 0){
    window.alert('yes');
}else{
    window.alert('no');
}

//////////// 3 - Write a program that allows the user to insert 2 integers then print the max ////////////////////
var fristNumber = Number(window.prompt('enter first number :'));
var secondNumber = Number(window.prompt('enter second number :'));
if (fristNumber > secondNumber){
    window.alert(fristNumber);
}else{
    window.alert(secondNumber);
}

///////////// 4 - Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive. //////////////
var integarNumber = Number(window.prompt('enter integar number :'))
if (integarNumber < 0){
    window.alert('negative');
}else{
    window.alert('positive');
}

///////////// 5 - Write a program that take 3 integers from user then print the max element and the min element. //////////////
var fristNumber = Number(window.prompt('enter frist number :'));
var secondNumber = Number(window.prompt('enter second number :'));
var thirdNumber = Number(window.prompt('enter third number :'));

if (fristNumber > secondNumber){
    if (fristNumber > thirdNumber){
        window.alert('the max element = ' + fristNumber);
        if (secondNumber >thirdNumber){
            window.alert('the min element = ' + thirdNumber);
        }else{
            window.alert('the min element = ' + secondNumber);
        }
    }else{
        window.alert('the max element = ' + thirdNumber);
        window.alert('the min element = ' + secondNumber);
    }
}else{
    if (secondNumber > thirdNumber){
        window.alert('the max element = ' + secondNumber);
        if (fristNumber > thirdNumber){
            window.alert('the min element = ' + thirdNumber);
        }else{
            window.alert('the min element = ' + fristNumber);
        }
    }else{
        window.alert('the max element = ' + thirdNumber);
        window.alert('the min element = ' + fristNumber);
    }
}




///////////// 6 - Write a program that allows the user to insert integer number then check If a number is oven or odd //////////

var check_num = Number(window.prompt('check the number'));
if(check_num % 2 == 0){
    window.alert('the number is even');
}else{
    window.alert('the number is odd');
}



///////////// 7 - Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant ///////////

var chars = window.prompt('give my character :');

if (chars == 'a' || chars == 'e' || chars == 'i' || chars == 'o' || chars == 'u') {
    window.alert('the character is vowel');
}else{
    window.alert('the character is consonant');
}

///////////// 8 - Write a program that allows user to insert integer then print all numbers between 1 to that’s number ///////////////

var specialNumber = window.prompt('give me number :')
for (var i = 1; i <= specialNumber; i++) {
    console.log(i);
}

///////////// 9 - Write a program that allows user to insert integer then print a multiplication table up to 12. ////////////////

var num = window.prompt('give me number :');
for (var i = 1; i <= num; i++){
    console.log(num * i);
}


/////////// 10 - Write a program that allows to user to insert number then print all even numbers between 1 to this number ////////////

var num = Number(window.prompt('give me number :'));

for(var i = 1; i < num; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}


////////////  11 - Write a program that take two integers then print the power. ///////////

var number = Number(window.prompt('give me the number :'));
var power = Number(window.prompt('give me the power :'));
var result = 1;
for (var i=1; i <= power; i++){
    result *= number; 
}
console.log(result);


//////////// 12 - Write a program to enter marks of five subjects and calculate total, average and percentage. /////////////////////

var sub1 = Number(window.prompt('enter mark fo first subject :'));
var sub2 = Number(window.prompt('enter mark fo second subject :'));
var sub3 = Number(window.prompt('enter mark fo third subject :'));
var sub4 = Number(window.prompt('enter mark fo fourth subject :'));
var sub5 = Number(window.prompt('enter mark fo fifth subject :'));

var total = sub1 + sub2 + sub3 + sub4 + sub5;
var average = total/5;
var percentage = total/500*100 + "%";

console.log('total : ' + total + '  |  average : ' + average + '  |  percentage : ' + percentage);

//////////// 13 - Write a program to input month number and print number of days in that month. //////////////////////

var monthNumber = Number(window.prompt('enter month number :'));

if (monthNumber == 1 || monthNumber == 3 || monthNumber == 5 || monthNumber == 7 || monthNumber == 8 || monthNumber == 10 || monthNumber == 12) {
    console.log('31 days');
} else if (monthNumber == 4 || monthNumber == 6 || monthNumber == 9 || monthNumber == 11){
    console.log('30 days');
} else if(monthNumber == 2){
    console.log('28 days');
}else{
    console.log('invalid month number');
}

/**
 * 14 - Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade
 * Percentage >= 90%: Grad A
 * Percentage >= 80%: Grad B
 * Percentage >= 70%: Grad C
 * Percentage >= 60%: Grad D
 * Percentage < 40%: Grad F
 * 
 */

    var physics = Number(window.prompt('enter mark of Physics :'));
    var chemistry = Number(window.prompt('enter mark of Chemistry :'));
    var biology = Number(window.prompt('enter mark of Biology :'));
    var mathematics = Number(window.prompt('enter mark of Mathematics :'));
    var computer = Number(window.prompt('enter mark of Computer :'));

    var total = physics + chemistry + biology + mathematics + computer;
    var percentage = total / 500 * 100;
    console.log(percentage); 

    if( percentage >= 90 ){
        console.log(`Grad A`);
    }else if (percentage >= 80) {
        console.log(`Grad B`);
    }else if (percentage >= 70) {
        console.log(`Grad C`);
    }else if (percentage >= 60) {
        console.log(`Grad D`);
    }else if (percentage < 40) {
        console.log(`Grad F`);
    }


/***************************  using switch case *******************/

//////////// 15 - Write a program to print total number of days in month ////////////////////////


var monthNumber = Number(window.prompt('enter month number :'));
switch(monthNumber){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log('31 days');
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log('30 days');
            break;
        case 2:
            console.log('28 days');
            break;
        default:
            console.log('invalid month number');
            break; // the last break don't important :)
    }


/////////// 16 - Write a program to check whether an alphabet is vowel or consonant ///////////////

var chars = window.prompt('give my character :');

switch (chars) {
    case 'a' :
    case 'e' :
    case 'i' :
    case 'o' :
    case 'u' :
        window.alert('the character is vowel');
    break;
    default:
        window.alert('the character is consonant');
    break;
}


////////// 17 - Write a program to find maximum between two numbers   ///////////////////////////

var firstNumber = Number(window.prompt('enter first number :'));
var secondNumber = Number(window.prompt('enter second number :'));
switch (firstNumber > secondNumber) {
    case true:
        console.log(`first number (${firstNumber}) is max `);
        break;
    case false:
        console.log(`second number (${secondNumber}) is max`)
        break;
}


////////// 18 - Write a program to check whether a number is even or odd  ///////////////////////

var number = Number(window.prompt('enter a number for checking (even or odd):'));
switch (number % 2 == 0) {
    case true:
        console.log('even');
        break;
    case false:
        console.log('odd');
        break;
}

///////// 19 - Write a program to check whether a number is positive or negative or zero ///////

var number = Number(window.prompt('enter a number for checking (positive or negative or zero):'));
switch (true) {
    case number > 0:
        console.log('positive');
        break;
    case number < 0:
        console.log('negative');
        break;
    case number == 0:
        console.log('zero');
        break;
}

///////// 20 - Write a program to create Simple Calculator     /////////////////////////////////

var number1 = Number(window.prompt('enter a frist number :'));
var operator = window.prompt('enter operator');
var number2 = Number(window.prompt('enter a second number :'));

switch (operator) {
    case "+":
        console.log(`${number1} + ${number2} = ${number1 + number2}`);
        break;
    case "-":
        console.log(`${number1} - ${number2} = ${number1 - number2}`);
        break;
    case "*":
        console.log(`${number1} * ${number2} = ${number1 * number2}`);
        break;
    case "/":
        console.log(`${number1} / ${number2} = ${number1 / number2}`);
        break;
    default:
        console.log('invalid operator');
        break;
}