/*
    let js = "amazing"; 
    console.log(40 + 8 + 23 -10);

VALUES AND VARIABLES
    console.log('Jonas');
    console.log(23);
    
    let firstName = "Jonas";


    console.log(firstName);
    console.log(firstName);
    console.log(firstName);
    
    //naming conventions
    let jonas_matilda ="JM";
    let $lastName = 'Mathew';
    let myWork = 'Web Developer';

//Descriptive naming
    let myFirstJob = 'Programmer';
    let myCurrentJob = 'Teacher';

//DATA TYPES
// JavaScript has dynamic typing: We do not have to manually define the data type of the value stored in a variable. Instead, data types are defined automatically.

//premitive data types

//1. Number: Floating point numbers used for decimals and integers
    let age = 23;
    console.log(typeof age);

//2. String: Sequence of characters used for text
    let middleName = 'Jonas';
    console.log(typeof middleName);

//3. Boolean: Logical type that can only be true or false used for taking decisions
    let javascriptIsFun =  true;
    console.log(javascriptIsFun);

    console.log(typeof true);

    // dynamic typing in action
    javascriptIsFun = 'YES!'
    console.log(typeof javascriptIsFun);

//4. Undefined: Value taken by a variable that is not yet defined('Empty value')
    let year;
    console.log(year);
    console.log(typeof year);

    //reassigning a variable
    year = 1991;
    console.log(year);
    console.log(typeof year);
    

//5. Null: Also means ('Empty value') for now
console.log(typeof null); // Type of null is object (this is a bug in JavaScript)

//6. Symbol (ES2015): Value that is unique and cannot be changed [Not useful for now]
//7. Symbol (ES2020): Large integers than the Number type can hold


//LET, CONST and VAR
// As of best practice always use const by default and only use let only when you are really sure the variable will change in the future.
// let is blocked scoped and var is function scoped.

//let is used when you need to mutate a variable or declare an empty variable.
let age =30;
age = 31;
console.log(age);

///const is used to declare variables that are not suporsed to change anywhere in the programm and we cannot declare empty variables using const.
const birthYear = 1991;
// birthYear = 1990;
// const job;


//var is the old way of declaring a variable and can be used the same as let but  it should completely be avoided. 
var job = 'programmer';
job = 'Teacher'
console.log(job);

//BASIC OPERATORS
//An operator allows us to transform values or combine multiple values and do all kind of work with values.

//mathimatical operators
    const now = 2037;
    const ageJonas = now - 1991;
    const ageSarah = now - 2018;
    console.log(ageJonas , ageSarah);
    
    // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
    console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
    
    //plus sign can olso be used in string concatination
    const firstName = 'Jonas';
    const lastName = 'Schmedtmann';
    console.log(firstName + ' ' + lastName);
    
//Assignment operators
let x = 10 + 5; //15
x += 10 // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++ //x = x + 1 = 101
x-- //x = x - 1 = 100
x-- //x = x - 1 = 99
console.log(x);

//comparison operators
//>, <, >=, <=
console.log(ageJonas > ageSarah); 
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 2018);

//OPERATOR PRECEDENCE
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;// x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;

console.log(ageJonas, ageSarah, averageAge);

//CODING CHALLENGE #1
//Data 1:
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

//Data 2:
const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.75;

const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);
const johnHigherBMI = johnBMI > markBMI;
console.log(markBMI, johnBMI, johnHigherBMI);

//STRINGS AND TEMPLATE LITERALS
const firstName = "Jonas";
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

//string concatination
const jonas = "I'm " + firstName + ', a' + ' ' + (year - birthYear) + ' years old ' + job + '!'
console.log(jonas);

//template literal
const jonasNew = `I'm ${firstName} a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

//multiline strings
console.log('String with \n\
    multiple \n\
    lines');

console.log(`Sring with
multiple
lines`);

//TAKING DECISIONS IF ELSE STATEMENTS
//this is also known as controlled structure
const age = 15;
const isOldEnough = 18;

if(age >= isOldEnough) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = isOldEnough - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft}`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20;
    console.log(century);
    
} else {
    century = 21;
    console.log(century);
    
}

//CODING CHALLENGE #2
// //Data 1:
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

//Data 2:
const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.75;

const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);

if(markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}
*/

//TYPE CONVERSION & COERCION
//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log( Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 +  ' years old');
console.log('I am ' + '23' +  ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' - 3);
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1; // '11
n = n - 1;
console.log(n);




