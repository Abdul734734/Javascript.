/* 
Write a function named getGrade:
Take a score as a parameter.
If score is 90 or higher, return "Grade A".
If score is between 80 and 89, return "Grade B".
For any other score, return "Grade C".
Call the function with scores like 85 and 75 and print the result. 
*/
function calculateGrade(score) {
  if (score >= 90) {
    return "Grade A";
  } else if (score >= 80 && score <= 89) {
    return "Grade B";
  } else {
    return "Grade C";
  }
}

calculateGrade(85);
calculateGrade(75);
console.log(calculateGrade(85));
console.log(calculateGrade(75));
