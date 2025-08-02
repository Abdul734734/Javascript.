const buildGroceryList = () => {
  let groceryItems;
  let groceryList = [];
  while (groceryItems !== "done") {
    groceryItems = window.prompt("Enter the grocery items:");
    if (groceryItems === "done") {
      break;
    }
    groceryList.push(groceryItems);
  }

  console.log("Grocery List:", groceryList);
};

buildGroceryList();
