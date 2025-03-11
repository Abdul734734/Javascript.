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
    console.log("Grade A");
  } else if (score >= 80 || score < 35) {
    console.log("Grade B");
  } else if (score >= 70 || score < 10) {
    console.log("Grade C");
  } else if (score >= 60 || score < 30) {
    console.log("Grade D");
  } else if (score >= 50 || score < 20) {
    console.log("Grade E");
  } else {
    console.log("Grade F");
  }
}

calculateGrade(50);
calculateGrade(90);
calculateGrade(80);
calculateGrade();

function getLenght(string) {}
getLenght("HELLO");
