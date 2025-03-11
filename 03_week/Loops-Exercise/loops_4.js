const countEvenNumbers = () => {
  let count = 0;
  for (let i = 0; i < 20; i++) {
    number = Number(window.prompt("Enter a number"));
    if (number % 2 === 0) {
      count += 1;
    }
  }
  console.log("countEvenNumber:", count);
};

countEvenNumbers();
