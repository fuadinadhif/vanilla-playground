import reviews from './data.js';

const photoProfile = document.querySelector('.photo-profile');
const author = document.querySelector('.author');
const job = document.querySelector('.job');
const review = document.querySelector('.review');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const surpBtn = document.querySelector('.surp-btn');

let reviewIndex = 0;

window.addEventListener('DOMContentLoaded', () => {
	showReview();
});

prevBtn.addEventListener('click', () => {
	reviewIndex--;
	if (reviewIndex < 0) {
		reviewIndex = reviews.length - 1;
	}
	showReview();
});

nextBtn.addEventListener('click', () => {
	reviewIndex++;
	if (reviewIndex > reviews.length - 1) {
		reviewIndex = 0;
	}
	showReview();
});

surpBtn.addEventListener('click', () => {
	let prevIndex = reviewIndex;
	reviewIndex = getRandomIndex();

	while (prevIndex == reviewIndex) {
		reviewIndex = getRandomIndex();
	}
	showReview();
});

function showReview() {
	let content = reviews[reviewIndex];

	photoProfile.src = content.img;
	author.textContent = capFirst(content.name);
	job.textContent = content.job.toUpperCase();
	review.textContent = content.text;
}

function capFirst(letter) {
	const arrLetter = letter.split(' ');

	const result = arrLetter
		.map((element) => {
			return element.charAt(0).toUpperCase() + element.substring(1);
		})
		.join(' ');

	return result;
}

function getRandomIndex() {
	return Math.floor(Math.random() * reviews.length);
}
