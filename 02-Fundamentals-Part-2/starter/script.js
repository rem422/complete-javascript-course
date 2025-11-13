"strict mode";
/* 
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log(`I can Drive :D`);

const interface = 'Audio';
const private = 54;
const if = 23;

//FUNCTIONS
function logger() {
    console.log(`My name is Jonas`);
};

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, orange) {
    const juice = `Juice with ${apples} apples and ${orange} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

console.log(Number(23));

//FUNCTION DECLARATIONS vs. EXPRESSION
//function declaration => can be called before defining
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

//function expression
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991)

console.log(age1, age2);

// ARROW FUNCTION
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (firstName, birthYear) => {
    const age = 2037 - birthYear;
    const retirementAge = 65 - age;
    // return retirementAge;
    return `${firstName} retires in ${retirementAge} years.`;
}

console.log(yearsUntilRetirement('Jonas', 1991));
console.log(yearsUntilRetirement('Bob', 1980));
*/

// CHALLENGE #1
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// //Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log(`No team wins...`);
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// //Test 2
// scoreDolphins2 = calcAverage(85, 54, 41);
// scoreKoalas2 = calcAverage(23, 34, 27);
// console.log(scoreDolphins2, scoreKoalas2);
// checkWinner(scoreDolphins2, scoreKoalas2);

//FUNCTIONS CALLING OTHER FUNCTIONS
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 4));

//INTRODUCTION TO ARRAYS
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = 'Jay';
// console.log(friends);
//
// const y= new Array(1991, 1984, 2008, 2020);
// console.log(y);
//
// const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// Exercise
// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
//
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
//
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

//BASIC ARRAYS OPERATIONS
// const friends = ['Michael', 'Steven', 'Peter'];
//
// //Add elements
// const newLength = friends.push('Jay'); //Adds element to the end of an array
// console.log(friends);
// console.log(newLength);
//
// friends.unshift('John'); //Adds element to the beginning of an array
// console.log(friends);
//
// //Remove elements
// friends.pop(); //Removes the last element of an array
// const popped = friends.pop(); //Removes the first element of an array
// console.log(popped);
// console.log(friends);
//
// friends.shift(); //Removes the first element of an array
// console.log(friends);
//
// //shows the index of an element
// console.log(friends.indexOf('Michael'));
// console.log(friends.indexOf('Bob'));
//
// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes('23'));
// console.log(friends.includes(23));
//
// if(friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// };

//CHALLENGE #2
// const calcTip = (bill) => {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
//
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
//
// console.log(bills, tips, totals);

//INTRODUCTION TO OBJECTS
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Steven', 'Peter'],
// };
// console.log(jonas);
// //Dot vs. Bracket Notation
// console.log(jonas.lastName);
// console.log(jonas['lastName']);
//
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);
//
// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
//
// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     alert('Wrong request! Choose between firstName, lastName, age, job and friends');
// }
//
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);
//
// //challenge
// //"Jonas has 3 friends, and his best friend is called Michael"
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);

//object methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriversLicense: true,
    // calcAge: (birthYear) => {
    //     return new Date().getFullYear() - birthYear;
    // },
    // calcAge: function() {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // },
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} years old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

// console.log(jonas.calcAge(1991)) //dot notation
// console.log(jonas['calcAge'](1991)) //bracket notation
console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//challenge
//Jonas is a 46 years old teacher, and has a driver's license.
console.log(jonas.getSummary());


