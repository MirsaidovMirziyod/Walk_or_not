let elResultGreen = document.querySelector(".ha");
let elResultRed = document.querySelector(".yoq");
let elInputGradus = document.querySelector("#obhavo");
let elInputYomgir = document.querySelector("#Yomgir");
let elInputZal = document.querySelector("#zal");
let elForm = document.querySelector(".form");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let elInputGradusVal = +elInputGradus.value;

  if (
    elInputZal.checked === true &&
    elInputYomgir.checked === true &&
    elInputGradusVal >= 5 &&
    elInputGradusVal <= 30
  ) {
    elResultGreen.classList.toggle("green");
  } else if (elInputYomgir.checked === true) {
    elResultRed.classList.toggle("red");
  } else if (elInputGradusVal >= 5 && elInputGradusVal <= 30) {
    elResultGreen.classList.toggle("green");
  } else if (
    elInputGradusVal <= 5 &&
    elInputGradusVal >= 30 &&
    elInputZal.checked === true
  ) {
    elResultRed.classList.toggle("red");
  } else {
    elResultRed.classList.toggle("red");
  }
});
