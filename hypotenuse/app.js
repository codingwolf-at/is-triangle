const sideLengthInput = document.querySelectorAll(".side-length-input");
const checkBtn = document.querySelector("#check-btn")
const outputHeading = document.querySelector("#output-heading")

const calculateHypotenuse = () => {
  const firstSide = Number(sideLengthInput[0].value)
  const secondSide = Number(sideLengthInput[1].value)
  const hypotenuse = Math.sqrt(firstSide**2 + secondSide**2)
  outputHeading.innerText = `The length of the hypotenuse is ${hypotenuse} units`
}

checkBtn.addEventListener("click", calculateHypotenuse)