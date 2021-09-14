const baseInput = document.querySelector("#base-input");
const heightInput = document.querySelector("#height-input");
const checkAreaBtn = document.querySelector("#check-area-btn");
const outputHeading = document.querySelector("#output-heading");

const calculateArea = () => {
  const base = Number(baseInput.value);
  const height = Number(heightInput.value);
  const area = 1/2*(base*height);
  outputHeading.innerText = `The area of the triangle is ${area} square units`
  console.log(area)
}

checkAreaBtn.addEventListener("click", calculateArea)