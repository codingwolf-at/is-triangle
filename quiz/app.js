const quizForm = document.querySelector("#triangle-quiz");
const submitForm = document.querySelector("#submit-btn");
const outputHeading = document.querySelector("#output-heading");

const correctAnswers = ['90', 'right-angled', 'isosceles', 'Scalene', '360']; 

const calculateScore = () => {
  let score = 0;
  let index = 0;
  const data = new FormData(quizForm);
  for (let answer of data.values()) {
    if (answer === correctAnswers[index]) {
      score = score + 1
    }
    index = index + 1;
  }
  outputHeading.innerText = `You score is : ${score}`;
}

submitForm.addEventListener("click", calculateScore)