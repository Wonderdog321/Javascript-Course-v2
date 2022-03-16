//Linking a Javascript File EP 9
let word = 'amazing';
if(word === 'amazing') alert('Javascript is amazing!');
//Values and Variables EP 10
const firstName = "David";
//Practice Assignments
//Lecture: Values and Variables
let country = "United States";
const continent = "North America";
let population = "329.5 million";
console.log("My name is " + firstName + " I live in " + country + " in the continent of " + continent + " population of " + population + ".");
//Lecture: Data Types
/* 
Javascript is dynamic typeing: We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.
    Number: Floating point numbers -> Used for ddecimals and integers.
    String: Sequence of characters -> Used for text
    Boolean: (True or False)
    Undefined: Value taken by a variable that is not yet defined.('Empty Value')
    Null: Also means 'empty value'
    Symbol: Value that is unique and cannot be changed/
    BigInt: Larger integers than the Number type can hold. 
*/
let isIsland = false;
let language;
console.log(typeof isIsland + " " + typeof population + " " + typeof country + " " + typeof language);
//Lecture: let, const, and var
language = "English";
//Lecture: Basic Operators
const currentYear = 2022;
const ageDavid = currentYear - 1996;
console.log(ageDavid);
console.log(ageDavid * 2, ageDavid / 10, 2**3);
//2**3 means 2 to the power of 3 = 2 * 2 * 2
//Assignment operators
let x = 10;
x += 10; //Adds 10 to X
x *= 10; //Multiplys by 10
x++; //Adds 1 to X
x--;//Subtracts to X

//Comparison Operators
//> - Greater than, < Less than, >= Greater than or equal to, <= Less than or equal to

//Coding challenge #1
let mass = 78;
let height = 1.69;
const MarkBMI = mass / height ** 2;
mass = 92;
height = 1.95;
const JohnBMI = mass / height ** 2;
const markHigherBMI = MarkBMI > JohnBMI;
console.log(MarkBMI, JohnBMI, markHigherBMI);

//Lecture Strings and Template Literals
const lastName = 'Young';
let age = 26;
let currentPosition = 'Lead Linesman';
const davidNew = `I'm ${firstName} ${lastName}, I'm ${age} years old. My current position is ${currentPosition}.`;
console.log(davidNew);

//Old way
console.log('String with \n\
multiple\n\
lines');

//New way with back tics
console.log(`String
with
multiple
lines`);

//Type Conversion and Coercion
//Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);//Number gives a converted version
console.log(inputYear + 18); //Not converted yet
console.log(Number(inputYear) + 18);//Fixed
console.log(Number('Jonas'));//Gives NaN (Not a number) means its an invalid number. Get a NaN when Number() cannot convert the string into an number.
//Type Coercion: happens whenever an operator is dealing with 2 values of different types. Javascript will automatically convert it in the background.
//Example
console.log('23' - '10' - 3);//Converts the strings to subtract. While using an + it will concat it into an string.
let n = '1' + 1; //Concats to a string of 11
n = n - 1; //11 - 1 since its subtracting
console.log(n); //Displays 10;

//Falsy values: 0, '', undefined, null, NaN. When converted to a boolean it is false.

//Equality Operators === or !== Strict equality operator (Does not do type coercion) while == or != does type coercion.

//Basic Boolean Logic &&(and) ||(or) != (Not)
const hasDriversLicense = true;
const hasGoodVision = false;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
if(shouldDrive){
    console.log('Sarah is able to drive!');
}else{
    console.log('Someone else should drive...');
}

//Coding challenge #3
const DolphinScores = [100, 91, 110];
const KoalasScores = [100, 91, 110];
const DolphinAvg = (DolphinScores[0] + DolphinScores[1] + DolphinScores[2]) / DolphinScores.length;
const KoalasAvg = (KoalasScores[0] + KoalasScores[1] + KoalasScores[2]) / KoalasScores.length;
console.log(KoalasAvg + " " + DolphinAvg);
if(KoalasAvg <= 100 && DolphinAvg <= 100){
    console.log("No one wins the trophey.");
}else if(KoalasAvg > DolphinAvg){
    console.log("Koalas gets the trophey.");
}else if(KoalasAvg < DolphinAvg){
    console.log("Dolphin gets the trophey.");
}else{
    console.log("Both teams get an trophey!");
}

//Switch statements
const day = 'monday';

switch(day){
    case 'monday': //day === 'monday' set to the strict equality.
        console.log('Plan course structure.');
        break; //Without the break it will continue to execute code
    case 'tuesday':
        console.log('Singing the the dogs tuesday!');
        break;
    default:
        console.log('Not a valid day.');//Similar to a else block
}

//Statements and Expressions
//Statements do not provide values on their selfs
//Expressions provide values

//The conditional ternary operator
//Ternary has 3 parts
//Condition | true part | false part //Similar to an 1 line if else statement
age >= 18 ? console.log('I like to drink wine!'):
console.log("I like to drink water!");
const bill = 100;
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total was ${tip + bill}`);