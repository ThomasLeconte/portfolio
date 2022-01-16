import './main.css'

const darkCheckbox = document.getElementById("dark-check");
darkCheckbox.addEventListener("click", updateDarkMode);
let darkmode = false;

function updateDarkMode () {
  darkmode = !darkmode;
  if (darkmode) {
    const elements = document.querySelectorAll(".white");
    for (let element of elements) {
      element.classList.add("dark");
      element.classList.remove("white");
    }
  } else {
    const elements = document.querySelectorAll(".dark");
    for (let element of elements) {
      element.classList.remove("dark");
      element.classList.add("white");
    }
  }
}