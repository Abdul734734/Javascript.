alert;

const calculateAverageSpeed = () => {
  let distance;
  let time;
  let speed;
  while (distance !== 0) {
    distance = Number(prompt("Enter a distance in kilometers: "));
    time = Number(prompt("Enter a time in hours: "));
    speed = distance / time;
    console.log("The average speed is: ", speed);
  }
};

calculateAverageSpeed();
