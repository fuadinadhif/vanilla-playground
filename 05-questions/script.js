// const buttons = document.querySelectorAll('button');

// buttons.forEach((btn) => {
// 	btn.addEventListener('click', (e) => {
// 		const question = e.currentTarget.parentElement.parentElement;

// 		question.classList.toggle('show');
// 	});
// });

// ANOTHER WAY
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
	const button = question.querySelector('button');

	button.addEventListener('click', () => {
		questions.forEach((otherQuestion) => {
			if (otherQuestion != question) {
				otherQuestion.classList.remove('show');
			}
		});
		question.classList.toggle('show');
	});
});
