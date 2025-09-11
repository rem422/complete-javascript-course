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

//FUNCTIONS CALLING OTHER FUNCTIONS
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 4));



