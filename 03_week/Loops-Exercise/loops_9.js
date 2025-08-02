const sumFromOneToHundred = () => {
  sum = 0;
  for (i = 1; i <= 100; i++) {
    sum = i + sum;
  }
  console.log("sum of 1 to 100:", sum);
};
sumFromOneToHundred();
