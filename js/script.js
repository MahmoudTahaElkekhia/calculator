$().ready(function () {
  let display = $("#display");
  let operator = "";
  let firstOperand = "";
  let secondOperand = "";
  let result = "";

  function clearDisplay() {
    display.val("");
    operator = "";
    firstOperand = "";
    secondOperand = "";
    result = "";
  }

  $(".btn").click(function () {
    let value = $(this).text();

    if ($(this).attr("id") === "clear") {
      clearDisplay();
      return;
    }

    if ($(this).attr("id") === "equals") {
      if (firstOperand && operator && secondOperand) {
        result = eval(firstOperand + operator + secondOperand);
        display.val(result);
        firstOperand = result;
        secondOperand = "";
        operator = "";
      }
      return;
    }

    if ($(this).hasClass("operator")) {
      if (operator && secondOperand) {
        result = eval(firstOperand + operator + secondOperand);
        display.val(result);
        firstOperand = result;
        secondOperand = "";
        operator = value;
      } else {
        operator = value;
      }
    } else {
      if (operator) {
        secondOperand += value;
        display.val(secondOperand);
      } else {
        firstOperand += value;
        display.val(firstOperand);
      }
    }
  });
});
