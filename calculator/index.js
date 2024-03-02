const inputValue = document.querySelector(".inputValue");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".btnEqual");

const squareBtn = document.querySelector(".square");
const addBtn = document.querySelector(".addition");
const subBtn = document.querySelector(".substraction");
const divBtn = document.querySelector(".division");
const multBtn = document.querySelector(".multiplication");
const decimalBtn = document.querySelector(".decimalPoint");

// Handling Events

// clear the input
clearBtn.addEventListener("click", () => {
  inputValue.value = "";
});

// delete value one by one
deleteBtn.addEventListener("click", () => {
  const newValue = inputValue.value.slice(0, -1);
  inputValue.value = newValue;
});
