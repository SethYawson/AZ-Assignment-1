/**
 * Write two JavaScript functions that calculate
 * the multiplication and division of two numbers.
 * The name of your first function must be multiplication
 * and the name of the second function must be division.
 * The functions must take 2 arguments corresponding to the
 * numbers to be multiplied or divided: i and j.
 * The multiplication function must return the
 * product of the 2 numbers passed into it.
 * Round off the returned value to 2 decimal places.
 * The division function must return the
 * quotient of the 2 numbers passed into it.
 * Round off the returned value to 2 decimal places.
 */

// Write your code here
//function to calculate multiplication
function multiplication(i, j) {
    return i * j;
}

//function to calculate division
function division(i, j) {
    // check if check if the divisor not zero
    if(j !==0) {
        return i / j;
   } else { 
    console.log("Division is not allowed !!");
    return undefined;
   }
}

const num1 = 6;
const num2 = 2;

const product = multiplication(num1, num2);
const quotient = division(num1, num2);

product = product.toFixed(2)
quotient = quotient.toFixed(2)

console.log("Products:", product);
console.log("Quotient:", quotient);

// End of code

// Do not modify code below this line.
// --------------------------------
