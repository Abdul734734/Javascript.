const animalSimple = [
  "Fox",
  "Eagle",
  "Shark",
  "Wolf",
  "Panda",
  "Tiger",
  "Dolphin",
  "Owl",
  "Kangaroo",
  "Unicorn",
];

const displayAnimals = (animalArray) => {
  const animalList = document.querySelector("#animalList");
  animalList.innerHTML = "";
  for (const animal of animalArray) {
    const li = document.createElement("li");
    li.textContent = `${animal}`;
    animalList.appendChild(li);
  }
};

const addAnimal = () => {
  const nameInput = document.querySelector("#newAnimalName").value.trim();
  animalSimple.push(nameInput);
  displayAnimals(animalSimple);
  document.querySelector("#newAnimalName").value = "";
};
const addAnimalButton = document.querySelector("#addAnimal");
addAnimalButton.addEventListener("click", addAnimal);
displayAnimals(animalSimple);
