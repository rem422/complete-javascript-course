    // let js = "amazing"; 
    // console.log(40 + 8 + 23 -10);

// VALUES AND VARIABLES
//     console.log('Jonas');
//     console.log(23);
    
//     let firstName = "Jonas";


//     console.log(firstName);
//     console.log(firstName);
//     console.log(firstName);
    
//     //naming conventions
//     let jonas_matilda ="JM";
//     let $lastName = 'Mathew';
//     let myWork = 'Web Developer';

// //Descriptive naming
//     let myFirstJob = 'Programmer';
//     let myCurrentJob = 'Teacher';

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


