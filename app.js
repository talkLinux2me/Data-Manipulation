// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
//log results
console.log(`do the numbers add up to 25? ${isSum50}`);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
//log results
console.log(`are there at least two odd numbers? : ${isTwoOdd}`);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
//log results
console.log(`are any numbers larger than 25? : ${isOver25}`);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
//log results
console.log(`are all the numbers unique? : ${isUnique}`);

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
// Lets log the results.
console.log(`combining the reults into a single variable : ${isValid}`);

// Are the number divisible by 5?
const isDivisible = (n1 % 5) && (n2 % 5) && (n3 % 5) && (n4 % 5);
//log results
console.log(`are the numbers divisible by 5? : ${isDivisible}`);

// Is the first number larger than the last?
const isLarger = n1 < n4
//log results
console.log(`is the first number larger than the last? : ${isLarger}`);

//Accomplish the following arithmetic chain:
/**Subtract the first number from the second number.
Multiply the result by the third number.*/
const chain = (n2 - n1) * n3
console.log(`the first number subtracted from the second number then multiplied by the third number : ${chain}`);
//find the remainder of dividing the result by the fourth number.
const remainder = chain / n4
console.log(`the remainder of dividing the result by the fourth number is : ${remainder}`); 
//Change the way that isOver25 
//calculates so that we do not need to use the NOT operator (!) in other logic comparisons. 
//Rename the variable as appropriate.
const under25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
//log results
console.log(`these numbers are under 25 : ${under25}`);

/**
 * Part Two, Cross country road trip
Lets set parameters.
*/
const miles = 1500;
const fiftyFiveMPH = 55;
const sixtyMPH = 60;
const seventyFiveMPH = 75;
const fuelBudget = 175;
const gallonFuel = 3;
const option1 = 55/30;
const option2 = 60/28;
const option3 = 75/23;

//How many gallons of fuel will you need for the entire trip?
//const tripFuel = gallonFuel * miles
//console.log(`gallons of fuel for the trip : ${tripFuel}`);

//How long will the trip take in hours?
const tripOne = miles / fiftyFiveMPH
console.log(`It will take ${tripOne} hours to travel at 55 miles per hour.`);
const tripTwo = miles /sixtyMPH
console.log (`It will take ${tripTwo} hours if you travel at 60 miles per hour.`);
const tripThree = miles / seventyFiveMPH
console.log (`It will take ${tripThree} hours to travel at 75 miles per hour`);

//How many gallons of fuel will you need for the entire trip?
const fuelGallonA = option1 * tripOne
console.log(`it will take ${fuelGallonA} gallons of fuel at 55 MPH`);
const fuelGallonB = option2 * tripTwo
console.log(`it will take ${fuelGallonB} gallons of fuel at 60 MPH`);
const fuelGallonC = option3 * tripThree
console.log(`it will take ${fuelGallonC} gallons of fuel at 75 MPH`);

//Will your budget be enough to cover the fuel expense?
let fuel = fuelBudget/gallonFuel

const budgetVSfuel=(fuel,fuelG)=> fuel >= fuelG

console.log(budgetVSfuel(fuel, fuelGallonA))
console.log(budgetVSfuel(fuel, fuelGallonB))
console.log(budgetVSfuel(fuel, fuelGallonC))