const generateMultiplicationTable = () => {
  let multiply;
  let number = 5;
  for (i = 1; i <= 10; i++) {
    multiply = number * i;
    console.log(`${number} * ${i} = ${multiply}`);
  }
};
generateMultiplicationTable();

const generateMultiplicationTable1 = () => {
  let multiply;
  let number = window.prompt("Enter the number to generate multiplication");
  for (i = 1; i <= 10; i++) {
    multiply = number * i;
    console.log(`${number} * ${i} = ${multiply}`);
  }
};
generateMultiplicationTable1();
