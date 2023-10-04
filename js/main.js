let buttonArray = [
  "MC",
  "MR",
  "M+",
  "M-",
  "C",
  "7",
  "8",
  "9",
  "&#xf7;",
  "&#x221A;",
  "4",
  "5",
  "6",
  "&#xd7;",
  "%",
  "1",
  "2",
  "3",
  "-",
  "&#xb2;",
  "0",
  ".",
  "&#xb1;",
  "+",
  "=",
  "&#8362; to &#36;",
  "&#36; to &#8362;",
  "&#8364; to &#8362;",
  "&#8362; to &#8364;",
  "",
];
let memory = 0;
let input = document.querySelector(".input");
let result = document.querySelector("  .result");
let Loc = window.localStorage.setItem("res", result.value);
let Get = window.localStorage.getItem("res");
for (let i = 0; i < buttonArray.length; i++) {
  let buttons = document.createElement("button");
  buttons.classList = "but";
  buttons.innerHTML = buttonArray[i];
  input.appendChild(buttons);
}
let buttons = document.querySelectorAll(" .but");
buttons.forEach((Element) => {
  Element.addEventListener("click", (element) => {
    if (element.target.innerHTML === "=") {
      calc();
    } else if (element.target.innerHTML === "C") {
      result.value = "";
    } else if (element.target.innerHTML === "MC") {
      result.value = result.value.slice(0, -1);
    } else if (element.target.innerHTML === "M+") {
      memory = result.value;
      result.value = +result.value + +memory;
    } else if (element.target.innerHTML === "M-") {
      memory = result.value;
      result.value = -result.value - +memory;
    } else if (element.target.innerHtml === "MR ") {
    } else if (element.target.innerHTML === "%") {
      result.value = result.value / 100;
    } else if (element.target.innerHTML === "±") {
      result.value = -result.value;
    } else if (element.target.innerHTML === "√") {
      result.value = +Math.sqrt(result.value);
    } else if (element.target.innerHTML === "²") {
      result.value = result.value * result.value;
    } else if (element.target.innerHTML === "₪ to $") {
      result.value = +result.value / 3.81;
    } else if (element.target.innerHTML === "$ to ₪") {
      result.value = +result.value * 3.81;
    } else if (element.target.innerHTML === "€ to ₪") {
      result.value = +result.value / 4.05;
    } else if (element.target.innerHTML === "₪ to €") {
      result.value = +result.value * 4.05;
    } else {
      result.value += element.target.innerHTML;
    }
  });
});
let Calculator = document.createElement("img");
Calculator.classList = "fa-solid fa-calculator";
Calculator.src = "./img/calculator-solid.svg";
Calculator.style.width = "20px";
Calculator.innerHTML = "";
buttons[29].appendChild(Calculator);
let calc = () => {
  try {
    result.value = eval(result.value);
    console.log(result.innerHTML);
  } catch (error) {
    result.value = "Error";
  }
};


