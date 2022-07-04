const value = document.querySelector('.value');
const buttons = document.querySelectorAll('.btn');

let theValue = 0;

buttons.forEach((button) => {
	button.addEventListener('click', function (e) {
		const buttonClasses = e.target.classList;

		if (buttonClasses.contains('decrease')) {
			theValue--;
		} else if (buttonClasses.contains('reset')) {
			theValue = 0;
		} else {
			theValue++;
		}

		if (theValue < 0) {
			value.style.color = 'Crimson`';
		} else if (theValue > 0) {
			value.style.color = 'LightSeaGreen';
		} else {
			value.style.color = '#000';
		}

		value.textContent = theValue;
	});
});
