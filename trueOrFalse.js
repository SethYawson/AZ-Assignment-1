/**
 * Write a JavaScript function that takes in two numbers
 * and returns true if the sum of both numbers is
 * greater than 100 and returns false otherwise.
 * The name of your function must be trueOrFalse.
 * The function must take 2 arguments corresponding
 * to the numbers to be summed up: m and n.
 * The function must return true if the
 * sum of the numbers is greater than 100 and
 * return false otherwise.
 */

// Write your code here
function trueOrFalse(x, y) {
    return (x + y) > 100;
}

const num1 = 73;
const num2 = 87;

const result = trueOrFalse(num1, num2);

console.log(`Is the sum of ${num1} and ${num2} greater than 100? ${result}`)



// End of code

// Do not modify code below this line.
// --------------------------------
