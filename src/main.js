import "./css/index.css";

document.documentElement.classList.add("ready");

const DRAW_BUTTON_ANIMATION_CLASS = "is-animating";
const drawButtons = document.querySelectorAll(".btn-draw");

drawButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    if (button.classList.contains(DRAW_BUTTON_ANIMATION_CLASS)) {
      return;
    }

    button.classList.add(DRAW_BUTTON_ANIMATION_CLASS);
  });

  button.addEventListener("animationend", (event) => {
    if (event.animationName !== "btn-fill-hover") {
      return;
    }

    button.classList.remove(DRAW_BUTTON_ANIMATION_CLASS);
  });
});
