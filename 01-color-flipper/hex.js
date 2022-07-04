const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const colorName = document.querySelector('.color-name');
const btn = document.querySelector('.color-btn');

let prevColor;
let hexColor;

btn.addEventListener('click', () => {
	prevColor = hexColor;
	hexColor = getRandomHex();

	while (prevColor == hexColor) {
		hexColor = getRandomHex();
	}

	document.body.style.backgroundColor = hexColor;
	colorName.textContent = hexColor;
});

function getRandomIndex() {
	return Math.floor(Math.random() * hex.length);
}

function getRandomHex() {
	let randomHex = '#';

	for (let i = 0; i < 6; i++) {
		randomHex += hex[getRandomIndex()];
	}
	return randomHex;
}
