const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    if (button.id === "clear") {
      display.value = "";
    } else if (button.id === "equal") {
      calculate();
    } else {
      display.value += button.value;
    }
  });
});

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
