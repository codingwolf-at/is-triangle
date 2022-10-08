const baseInput = document.querySelector("#base-input");
const heightInput = document.querySelector("#height-input");
const checkAreaBtn = document.querySelector("#check-area-btn");
const outputHeading = document.querySelector("#output-heading");

const calculateArea = () => {
  const base = Number(baseInput.value);
  const height = Number(heightInput.value);
  if (base > 0 && height > 0) {
    const area = 1/2*(base*height);
    outputHeading.innerText = `The area of the triangle is ${area} square units`;
  } else {
    alert('Please enter positive non-zero value');
  }
}

checkAreaBtn.addEventListener("click", calculateArea)