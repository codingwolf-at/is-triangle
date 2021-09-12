const angleInput = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle-button");
const outputHeading = document.querySelector("#output-heading");

isTriangleButton.addEventListener("click", isTriangleHandler);

function isTriangleHandler() {
  const sum = calculateSumOfAngles(angleInput);
  sum === 180
  ? outputHeading.innerText = "Yayy, the angles form a triangle"
  : outputHeading.innerText = "Oh Oh!, the angles do not form a triangle"
}

function calculateSumOfAngles(angleInput) {
  return Number(angleInput[0].value) + Number(angleInput[1].value) + Number(angleInput[2].value);
}
