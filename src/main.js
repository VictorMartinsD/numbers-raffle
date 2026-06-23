import "./css/index.css";

document.documentElement.classList.add("ready");

const quantityInput = document.getElementById("quantity");
const minValueInput = document.getElementById("min-value");
const maxValueInput = document.getElementById("max-value");
const drawButtons = document.querySelectorAll(".btn-draw");
const btnDraw = document.getElementById("btn-draw");
const btnRestart = document.getElementById("btn-restart");

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

    inputElement.addEventListener("focus", (e) => {
      e.target.select();
    });
  };

  limitLength(quantityInput, 1);
  limitLength(minValueInput, 3);
  limitLength(maxValueInput, 3);

  const inputsContainer = document.getElementById("inputs-container");
  inputsContainer.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      btnDraw.click();
    }
  });
}

function setupPanelToggle() {
  const setupHeader = document.getElementById("setup-header");
  const inputsContainer = document.getElementById("inputs-container");
  const toggleGroup = document.getElementById("toggle-group");
  const panelResult = document.getElementById("panel-result");
  const errorTooltip = document.getElementById("error-tooltip");

  btnDraw.addEventListener("click", () => {
    const min = parseInt(minValueInput.value, 10);
    const max = parseInt(maxValueInput.value, 10);

    if (min >= max) {
      errorTooltip.classList.remove("u-hidden");
      return;
    }

    errorTooltip.classList.add("u-hidden");
    setupHeader.classList.add("u-hidden");
    inputsContainer.classList.add("u-hidden");
    toggleGroup.classList.add("u-hidden");
    btnDraw.classList.add("u-hidden");
    panelResult.classList.remove("u-hidden");
  });

  btnRestart.addEventListener("click", () => {
    setupHeader.classList.remove("u-hidden");
    inputsContainer.classList.remove("u-hidden");
    toggleGroup.classList.remove("u-hidden");
    btnDraw.classList.remove("u-hidden");
    panelResult.classList.add("u-hidden");
  });

  const hideError = () => errorTooltip.classList.add("u-hidden");
  minValueInput.addEventListener("input", hideError);
  maxValueInput.addEventListener("input", hideError);
}

setupButtonAnimations();
setupInputValidations();
setupPanelToggle();