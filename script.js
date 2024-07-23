let currentNumber = "";
let previousNumber = "";
let operation = "";

// Function to append numbers to the display
function appendNumber(number) {
  currentNumber += number;
  document.getElementById("result").value = currentNumber;
}

// Function to append operators
function appendOperation(op) {
  // Check if an operator has already been selected and currentNumber is not empty
  if (operation !== "" && currentNumber !== "") {
    calculate(); // Perform calculation if previous operation exists
  }
  operation = op;
  previousNumber = currentNumber;
  currentNumber = ""; // Reset current number for next operand
}

// Function to clear the display
function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operation = "";
  document.getElementById("result").value = "";
}

// Function to delete a single digit
function deleteNumber() {
  let displayValue = document.getElementById("result").value;
  // Check if there's anything to delete
  if (displayValue.length > 0) {
    currentNumber = displayValue.slice(0, -1); // Remove last character
    document.getElementById("result").value = currentNumber;
  }
}

// Function to perform calculations
function calculate() {
  let num1 = parseFloat(previousNumber);
  let num2 = parseFloat(currentNumber);
  let result;

  // Check for valid input before proceeding
  if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid Input! Please enter valid numbers.");
    return;
  }

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      // Check for division by zero
      if (num2 === 0) {
        alert("Error! Cannot divide by zero.");
        return;
      }
      result = num1 / num2;
      break;
    default:
      alert("Invalid Operation!");
  }

  // Update display with the result
  currentNumber = result.toString();
  previousNumber = "";
  operation = "";
  document.getElementById("result").value = currentNumber;
}
