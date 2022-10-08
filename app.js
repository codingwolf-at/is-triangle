const angleInput = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle-button");
const outputHeading = document.querySelector("#output-heading");

isTriangleButton.addEventListener("click", isTriangleHandler);

function isTriangleHandler() {
  if (Number(angleInput[0].value) < 0 
    || Number(angleInput[1].value) < 0 
    || Number(angleInput[2].value) < 0
    || angleInput[0].value === ""
    || angleInput[1].value === ""
    || angleInput[2].value === "") {
    alert('All angles must be a positive non zero number');
  } else {
    const sum = calculateSumOfAngles(angleInput);
    sum === 180
    ? outputHeading.innerText = "Yayy, the angles form a triangle"
    : outputHeading.innerText = "Oh Oh!, the angles do not form a triangle"
  }
}

function calculateSumOfAngles(angleInput) {
  return Number(angleInput[0].value) + Number(angleInput[1].value) + Number(angleInput[2].value);
}
