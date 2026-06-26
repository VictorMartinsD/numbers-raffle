import "./css/index.css";

document.documentElement.classList.add("ready");

const quantityInput = document.getElementById("quantity");
const minValueInput = document.getElementById("min-value");
const maxValueInput = document.getElementById("max-value");
const noRepeatCheckbox = document.getElementById("no-repeat");
const drawButtons = document.querySelectorAll(".btn-draw");
const btnDraw = document.getElementById("btn-draw");
const btnRestart = document.getElementById("btn-restart");
const numbersOutput = document.getElementById("numbers-output");
const resultCountText = document.getElementById("result-count");

let drawCount = 0;

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
  const errorTooltip = document.getElementById("error-tooltip");
  const errorMessage = document.getElementById("error-message");

  const limitLength = (inputElement, maxLength, allowZero = true) => {
    inputElement.addEventListener("keydown", (e) => {
      const invalidChars = ["-", "+", ".", ",", "e", "E"];
      if (invalidChars.includes(e.key)) e.preventDefault();
      
      if (inputElement.id === "quantity") {
        if (e.key === "0" || e.key === "9") {
          e.preventDefault();
          errorMessage.textContent = "Digite um número de 1 a 8.";
          errorTooltip.classList.remove("u-hidden");
          setTimeout(() => errorTooltip.classList.add("u-hidden"), 2000);
        }
      }
    });

    inputElement.addEventListener("input", (e) => {
      if (!allowZero && e.target.value === "0") {
        e.target.value = "";
        return;
      }
      if (e.target.value.length > maxLength) {
        e.target.value = e.target.value.slice(0, maxLength);
      }
    });

    inputElement.addEventListener("focus", (e) => e.target.select());
  };

  limitLength(quantityInput, 1, false);
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

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateDrawResults(quantity, min, max, noRepeat) {
  const results = [];

  if (noRepeat) {
    const uniqueNumbers = new Set();
    while (uniqueNumbers.size < quantity) {
      uniqueNumbers.add(getRandomNumber(min, max));
    }
    return Array.from(uniqueNumbers);
  }

  for (let i = 0; i < quantity; i++) {
    results.push(getRandomNumber(min, max));
  }
  return results;
}

async function animateNumber(number, index, drawResults) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (index % 2 !== 0 && index > 0) {
        const prevNumber = numbersOutput.children[index - 1];
        if (prevNumber) {
          prevNumber.classList.remove("is-making-room");
        }
      }

      const numberElement = document.createElement("div");
      numberElement.className = "draw-number";
      
      const isOnlyNumber = drawResults.length === 1;
      const isLastOdd = (index === drawResults.length - 1) && (drawResults.length % 2 !== 0);
      
      if (isOnlyNumber || isLastOdd) {
        numberElement.classList.add("is-centered");
      } else if (index % 2 === 0) {
        numberElement.classList.add("is-shifting");
      }

      const tokenBg = document.createElement("div");
      tokenBg.className = "animated-token-bg";

      const tokenText = document.createElement("span");
      tokenText.className = "animated-token-text";
      tokenText.textContent = number;

      numberElement.appendChild(tokenBg);
      numberElement.appendChild(tokenText);
      numbersOutput.appendChild(numberElement);

      setTimeout(() => {
        tokenBg.classList.add("is-visible");
      }, 50);

      setTimeout(() => {
        tokenBg.classList.add("is-rotating");

        setTimeout(() => {
          tokenText.classList.add("is-inverse");
        }, 444);

      }, 1050);

      setTimeout(() => {
        tokenText.classList.remove("is-inverse");
        tokenText.classList.add("is-final");
        
        tokenBg.classList.remove("is-visible");
        tokenBg.classList.add("is-disappearing");

        setTimeout(() => {
          tokenBg.remove();
          tokenText.replaceWith(document.createTextNode(number));
          
          const isLeftNumberInPair = (index % 2 === 0) && !isOnlyNumber && !isLastOdd;

          if (isLeftNumberInPair) {
            numberElement.classList.add("is-making-room");
            setTimeout(() => {
              resolve(); 
            }, 500);
          } else {
            resolve();
          }
        }, 400);

      }, 2100);
    }, 300);
  });
}

function setupPanelToggle() {
  const setupHeader = document.getElementById("setup-header");
  const inputsContainer = document.getElementById("inputs-container");
  const toggleGroup = document.getElementById("toggle-group");
  const panelResult = document.getElementById("panel-result");
  const errorTooltip = document.getElementById("error-tooltip");
  const tooltipText = document.getElementById("error-message");

  btnDraw.addEventListener("click", async () => {
    if (!quantityInput.value || !minValueInput.value || !maxValueInput.value) {
      tooltipText.textContent = "Nenhum campo pode estar vazio!";
      errorTooltip.classList.remove("u-hidden");
      return;
    }

    const quantity = parseInt(quantityInput.value.slice(0, 1), 10);
    const min = parseInt(minValueInput.value.slice(0, 3), 10);
    const max = parseInt(maxValueInput.value.slice(0, 3), 10);
    const noRepeat = noRepeatCheckbox.checked;

    if (min === 0 || max === 0) {
      tooltipText.textContent = "O valor não pode ser 0.";
      errorTooltip.classList.remove("u-hidden");
      return;
    }

    if (min > max) {
      tooltipText.textContent = "O valor inicial deve ser menor ou igual ao final!";
      errorTooltip.classList.remove("u-hidden");
      return;
    }

    const totalAvailable = (max - min) + 1;

    if (noRepeat && quantity > totalAvailable) {
      tooltipText.textContent = "A quantidade é maior do que o intervalo permite!";
      errorTooltip.classList.remove("u-hidden");
      return;
    }

    errorTooltip.classList.add("u-hidden");
    
    const drawResults = generateDrawResults(quantity, min, max, noRepeat);

    drawCount++;
    resultCountText.textContent = `${drawCount}º Resultado`;

    setupHeader.classList.add("u-hidden");
    inputsContainer.classList.add("u-hidden");
    toggleGroup.classList.add("u-hidden");
    btnDraw.classList.add("u-hidden");
    panelResult.classList.remove("u-hidden");

    numbersOutput.innerHTML = "";

    for (let i = 0; i < drawResults.length; i++) {
      await animateNumber(drawResults[i], i, drawResults);
    }
  });

  btnRestart.addEventListener("click", () => {
    setupHeader.classList.remove("u-hidden");
    inputsContainer.classList.remove("u-hidden");
    toggleGroup.classList.remove("u-hidden");
    btnDraw.classList.remove("u-hidden");
    panelResult.classList.add("u-hidden");
    numbersOutput.innerHTML = "";
  });

  const hideError = () => errorTooltip.classList.add("u-hidden");
  quantityInput.addEventListener("input", hideError);
  minValueInput.addEventListener("input", hideError);
  maxValueInput.addEventListener("input", hideError);
  noRepeatCheckbox.addEventListener("change", hideError);
}

setupButtonAnimations();
setupInputValidations();
setupPanelToggle();