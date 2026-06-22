import "./css/index.css";

document.documentElement.classList.add("ready");

const quantityInput = document.getElementById("quantity");
const minValueInput = document.getElementById("min-value");
const maxValueInput = document.getElementById("max-value");
const drawButtons = document.querySelectorAll(".btn-draw");

const DRAW_BUTTON_ANIMATION_CLASS = "is-animating";

function setupButtonAnimations() {
  drawButtons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      if (button.classList.contains(DRAW_BUTTON_ANIMATION_CLASS)) return;
      button.classList.add(DRAW_BUTTON_ANIMATION_CLASS);
    });

    button.addEventListener("animationend", (event) => {
      if (event.animationName !== "btn-fill-hover") return;
      button.classList.remove(DRAW_BUTTON_ANIMATION_CLASS);
    });
  });
}

function setupInputValidations() {
  const limitLength = (inputElement, maxLength) => {
    inputElement.addEventListener("keydown", (e) => {
      const invalidChars = ["-", "+", ".", ",", "e", "E"];
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    });

    inputElement.addEventListener("input", (e) => {
      if (e.target.value.length > maxLength) {
        e.target.value = e.target.value.slice(0, maxLength);
      }
    });
  };

  limitLength(quantityInput, 1);
  limitLength(minValueInput, 3);
  limitLength(maxValueInput, 3);
}

setupButtonAnimations();
setupInputValidations();