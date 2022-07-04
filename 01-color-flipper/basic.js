const colors = ["teal", "salmon", "pink", "lavender", "turquoise"];

const colorName = document.querySelector(".color-name");
const btn = document.querySelector(".color-btn");

let prevIndex;
let randomIndex;

btn.addEventListener("click", function () {
  prevIndex = randomIndex;
  randomIndex = getRandomIndex();

  while (prevIndex == randomIndex) {
    randomIndex = getRandomIndex();
  }

  document.body.style.backgroundColor = colors[randomIndex];
  colorName.textContent =
    colors[randomIndex].charAt(0).toUpperCase() + colors[randomIndex].slice(1);
});

function getRandomIndex() {
  return Math.floor(Math.random() * colors.length);
}
