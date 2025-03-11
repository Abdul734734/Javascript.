const colorChangeBtn = document.getElementById("colorchange");
const colorInput = document.getElementById("colorinput");
const colorText = document.getElementById("colorText");

const randomHexColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

colorChangeBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = randomHexColor();
});

console.log(randomhexcolor());
