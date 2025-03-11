const calculateAverageUntilZero = () => {
  let sum = 0;
  let count = 0;
  let number;
  while (number != 0) {
    number = Number(window.prompt("Enter a number"));
    sum = sum + number;
    count++;
  }
  console.log(sum / count);
};

calculateAverageUntilZero();
