const mainNavContainer = document.querySelector('.main-nav');
const mainNavList = document.querySelector('.main-nav-list');
const mainNavItem = document.querySelectorAll('.main-nav-item');
const toggleContainer = document.querySelector('.toggle');
const toggleBtn = document.querySelector('.toggle-btn');
const date = document.querySelector('.date');
const backTop = document.querySelector('.back-to-top');
const mainHeader = document.querySelector('.main-header');

date.textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
	const scrollHeight = window.scrollY;
	const footer = document.querySelector('.main-footer');

	// console.log(footerTop);
	// console.log(scrollHeight);
	// console.log(footerTop.getBoundingClientRect());
	// console.log(window.innerHeight);
	// console.log(window.innerHeight);

	if (isInViewport(footer)) {
		backTop.classList.add('absolute');
	} else {
		backTop.classList.remove('absolute');
	}

	if (scrollHeight > 300) {
		mainHeader.style.backgroundColor = 'rgba(255, 255, 255, 1)';
	} else if (scrollHeight < 300) {
		mainHeader.style.backgroundColor = 'rgba(255, 255, 255, 0';
	}

	if (scrollHeight > 600) {
		backTop.classList.add('show');
	} else if (scrollHeight < 600) {
		backTop.classList.remove('show');
	}
});

toggleBtn.addEventListener('click', () => {
	const containerHeight = mainNavContainer.getBoundingClientRect().height;
	const linksHeight = mainNavList.getBoundingClientRect().height;

	toggleContainer.classList.toggle('show');

	if (containerHeight == 0) {
		mainNavContainer.style.height = `${linksHeight}px`;
	} else {
		mainNavContainer.style.height = 0;
	}
});

mainNavItem.forEach((item) => {
	item.addEventListener('click', (e) => {
		const id = e.target.getAttribute('href').slice(1);
		const targetElement = document.getElementById(id);
		const headerHeight = mainHeader.getBoundingClientRect().height;
		const positionElement = targetElement.offsetTop - headerHeight;

		console.log(targetElement.offsetTop);
		console.log(positionElement);

		e.preventDefault();
		window.scrollTo({
			top: positionElement,
			left: 0,
			behavior: 'smooth',
		});
		mainNavContainer.style.height = 0;
		toggleContainer.classList.remove('show');
	});
});

backTop.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
});

function isInViewport(element) {
	const rect = element.getBoundingClientRect();

	return rect.top <= window.innerHeight;
}
