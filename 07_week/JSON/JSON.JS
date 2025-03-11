/* Task 1
Create a JavaScript object named `student` with properties:
- `name`
- `age`
- `grade`
Convert the object into a JSON string and log it to the console.
*/

// Your code here

// const student = {
//   name: "Basu Dev",
//   age: 20,
//   grade: "8th",
// };
// const studentJSON = JSON.stringify(student);
// console.log(studentJSON);

/* Task 2
Take the JSON string from Task 1 and convert it back into a JavaScript object.
Log the `name` property of the converted object.
*/

// Your code here
// const person = JSON.parse(studentJSON);
// console.log(person["name"]);

/* Task 3
Create an array named `classroom`, where each element is an object representing a student.
Each student object should have properties for `name`, `age`, and `grade`.
Convert the array into a JSON string and log it to the console.
*/

// Your code here
// const classroom = [
//   { name: "abdul", age: 30, grade: "c" },
//   { name: "saif", age: 28, grade: "b" },
//   { name: "basu", age: 20, grade: "a" },
// ];
// const json = JSON.stringify(classroom);
// console.log(json);
/* Task 4
Take the JSON string from Task 3, convert it back into a JavaScript array,
and log the names of all students in the classroom.
*/

// Your code here
// const students = JSON.parse(json);
// const size = students.length;
// for (let i = 0; i < size; i++) {
//   console.log(students[i].name);

// }
/* Task 5
Create an object named `weatherReport` with the following properties:
- `temperature`
- `humidity`
- `conditions` (e.g., "Sunny", "Rainy")

Convert the object into a JSON string and store it in a variable named `weatherJSON`.
Then, parse the JSON string back into an object and log the `conditions` property.
*/

// Your code here

// const weatherReport = {
//   temperature: -2,
//   humidity: 5,
//   conditions: "Sunny",
// };
// const weatherJSON = JSON.stringify(weatherReport);
// console.log(weatherJSON);

// const parseWeather = JSON.parse(weatherJSON);
// console.log(parseWeather.conditions);

/* Task 6
Define an array named `movies`, where each movie has:
- `title`
- `director`
- `rating`

Convert this array into a JSON string, then parse it back into a JavaScript object.
Log all movie titles with a rating higher than 8.
*/

// Your code here

// const movies = [
//   {
//     title: "kabhihum",
//     director: "margit",
//     rating: 8,
//   },
//   {
//     title: "fast2",
//     director: "juha",
//     rating: 7,
//   },
//   {
//     title: "hello",
//     director: "saif",
//     rating: 9,
//   },
// ];
// const jsonString = JSON.stringify(movies);
// console.log("JSON STRING", jsonString);

// const parsedMovies = JSON.parse(jsonString);
// console.log("JSON PARSE", parsedMovies);

// parsedMovies.forEach((movie) => {
//   if (movie.rating >= 8) {
//     console.log(movie.title);
//   }
// });

/* Task 7
Write a function `filterHighRatedMovies(jsonString)` that:
- Takes a JSON string representing an array of movie objects.
- Converts it into a JavaScript array.
- Returns a new array containing only movies with a rating higher than 8.
*/

// Your code here
function filterHighRatedMovies(jsonString) {
  try {
    let movies = JSON.parse(jsonString); // Convert JSON string to array
    return movies.filter((movie) => movie.rating > 8); // Keep movies with rating > 8
  } catch (error) {
    console.log("Invalid JSON!"); // Show error message
    return []; // Return an empty array if JSON is bad
  }
}

/* Task 8
Define an object named `shoppingCart` with:
- `items` (an array of product objects, each with `name` and `price`)
Convert `shoppingCart` into a JSON string and log it to the console.
*/

// Your code here

/* Task 9
Write a function `totalCartValue(jsonString)` that:
- Takes a JSON string representing a shopping cart.
- Converts it into a JavaScript object.
- Returns the total price of all items in the cart.
*/

// Your code here

/* Task 10
Create an object named `gameProgress` with:
- `level`
- `score`
- `livesRemaining`

Convert the object into a JSON string and log it.
Parse the JSON back into an object and update the `score` property by adding 100 points.
Log the updated object.
*/

// Your code here
console.log("Hello world");
