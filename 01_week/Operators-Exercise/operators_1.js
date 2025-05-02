/* 
1. Create two variables, a and b, and assign them integer values (e.g., 8 and 3).
2. Perform the following operations using a and b, and store the results in separate variables:
 - Add the values (sum).
 - Subtract b from a (difference).
 - Multiply the values (product).
 - Divide a by b (quotient).
 - Find the remainder when a is divided by b (remainder).
3. Use console.log() to print the results of each operation. For example, print: "The sum of a and b is: 11"
4. Add comments to explain what each operation does.
5. Change the values of a and b and observe how the results change.
6. Try the same operations with one positive and one negative number.
*/
const a = 8;
const b = 3;

const sum = a + b;
const difference = b - a;
const product = a * b;
const quotient = a / b;
const remainder = a % b;

console.log("The sum of a and b is: " + sum);
console.log("The difference when b is subtracted from a is: " + difference);
console.log("The product of a and b is: " + product);
console.log("The quotient when a is divided by b is: " + quotient);
console.log("The remainder when a is divided by b is: " + remainder);

a = 15;
b = -3;

sum = a + b;
difference = a - b;
product = a * b;
quotient = a / b;
remainder = a % b;

console.log("\nAfter changing values:");
console.log("The sum of a and b is: " + sum);
console.log("The difference when b is subtracted from a is: " + difference);
console.log("The product of a and b is: " + product);
console.log("The quotient when a is divided by b is: " + quotient);
console.log("The remainder when a is divided by b is: " + remainder);
