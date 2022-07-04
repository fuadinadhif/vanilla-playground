const switcher = document.querySelector('.switch');
const video = document.querySelector('video');
const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
	preloader.classList.add('hide-preloader');
});

switcher.addEventListener('click', () => {
	if (!switcher.classList.contains('slide')) {
		switcher.classList.add('slide');
		video.play();
	} else {
		switcher.classList.remove('slide');
		video.pause();
	}
});
