/**
 * Write a JavaScript function that finds the area of a triangle
 * given the lengths of three of its sides
 * The name of your function must be areaOfTriangle
 * The function must take 3 arguments corresponding
 * to the length of one side of the trianle: a, b and c.
 * The function must return the area of the triangle.
 * Round off the returned value to 2 decimal places.
 */

// Write your code here

function areaOfTriangle(a, b, c) {
    // s is the semi-perimeter of the triangle
    const s = (a + b + c) / 2;

    // using Heron's formular

    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return area;}

    let sideX = 8;
    let sideY = 9;
    let sideZ = 12;

    let triangleArea = areaOfTriangle(sideX, sideY, sideZ);

    // Rounding to to decimal places
    triangleArea = triangleArea.toFixed(2);

    console.log("Area of the triangle:", triangleArea);

// End of code

// Do not modify code below this line.
// --------------------------------
