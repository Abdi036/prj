const inputValue = document.querySelector(".inputValue");
const clearBtn = document.querySelector(".clear"); //done
const deleteBtn = document.querySelector(".delete"); //done
const equalBtn = document.querySelector(".btnEqual");

const squareBtn = document.querySelector(".square"); //done
const decimalBtn = document.querySelector(".decimalPoint");
const operandBtn = document.querySelectorAll(".operand");
const numbersBtn = document.querySelectorAll(".numbers");

// Handling Events

// clear All the inputvalue
inputValue.value = 0;

clearBtn.addEventListener("click", () => {
  inputValue.value = 0;
});

// delete value one by one
deleteBtn.addEventListener("click", () => {
  const newValue = inputValue.value.slice(0, -1);
  inputValue.value = newValue;
  if (!inputValue.value) inputValue.value = 0;
});

// handling Square
squareBtn.addEventListener("click", () => {
  if (!inputValue.value) return;
  else {
    inputValue.value = inputValue.value * inputValue.value;
  }
});

// handling numbers and signs
numbersBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const clickedBtn = btn.value;
    const currentValue = inputValue.value;

    const updatedValue =
      currentValue === "0" ? clickedBtn : currentValue + clickedBtn;
    inputValue.value = updatedValue;
  });
});

// handling dot

operandBtn.forEach((operator) => {
  operator.addEventListener("click", () => {
    // Update lastInput to operator when an operator is clicked
    lastInput = "operator";
  });
});

numbersBtn.forEach((number) => {
  number.addEventListener("click", () => {
    // Update lastInput to number when a number is clicked
    lastInput = "number";
  });
});

// Check if a character is an operator
function isOperator(char) {
  return operandBtn.some((btn) => btn.value === char);
}

// handling operands
operandBtn.forEach((opp) => {
  opp.addEventListener("click", () => {
    const clickedBtn = opp.value;
    let currentValue = inputValue.value;

    if (
      currentValue.endsWith("+") ||
      currentValue.endsWith("-") ||
      currentValue.endsWith("*") ||
      currentValue.endsWith("/")
    ) {
      currentValue = currentValue.slice(0, -1) + clickedBtn;
    } else {
      currentValue += clickedBtn;
    }
    inputValue.value = currentValue;
  });
});

// handling calculations
equalBtn.addEventListener("click", () => {
  const opp = inputValue.value.match(/[+\-*/]/g);
  const operands = inputValue.value.split(/[+\-*/]/g);
  let currentValue = +operands[0];

  for (let i = 0; i < operands.length - 1; i++) {
    const newValue = Number(operands[i + 1]);

    switch (opp[i]) {
      case "+":
        currentValue += newValue;
        break;
      case "-":
        currentValue -= newValue;
        break;
      case "*":
        currentValue *= newValue;
        break;
      case "/":
        currentValue /= newValue;
        break;
      default:
        alert("Insert correct operand");
    }
    inputValue.value = currentValue;
  }
});
