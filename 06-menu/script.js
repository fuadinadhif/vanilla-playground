import { menus as fullMenu } from './data.js';

const menuContainer = document.querySelector('.menu-container');
const buttonContainer = document.querySelector('.button-container');

window.addEventListener('DOMContentLoaded', () => {
	showMenu(fullMenu);
	showCategories(fullMenu);
});

function showMenu(items) {
	const displayMenu = items
		.map((item) => {
			return `<article class="menu-item">
					<img
						class="menu-image"
						src=${item.img}
						alt=${item.title}
					/>
					<div class="menu-info">
						<header>
							<h3 class="menu-name">${capitalFirst(item.title)}</h3>
							<h3 class="menu-price">${item.price}</h3>
						</header>
						<p class="menu-desc">
							${lastDot(item.desc.charAt(0).toUpperCase() + item.desc.substring(1))}
						</p>
					</div>
				</article>`;
		})
		.join('');

	menuContainer.innerHTML = displayMenu;
}

function showCategories(items) {
	const displayCategories = items
		.reduce(
			(acc, curr) => {
				if (!acc.includes(curr.category)) {
					acc.push(curr.category);
				}

				return acc;
			},
			['all']
		)
		.map((item) => {
			return `<button class="filter-button" data-category=${item}>${item}</button>`;
		})
		.join('');

	buttonContainer.innerHTML = displayCategories;
	filterMenu();
}

function filterMenu() {
	const filterBtns = document.querySelectorAll('.filter-button');

	filterBtns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			const pickedCategory = e.target.dataset.category;
			const filteredMenu = fullMenu.filter((menu) => {
				if (menu.category == pickedCategory) {
					return menu;
				}
			});

			if (pickedCategory == 'all') {
				showMenu(fullMenu);
			} else {
				showMenu(filteredMenu);
			}
		});
	});
}

function capitalFirst(text) {
	const textArr = text.split(' ');

	const result = textArr
		.map((textEl) => {
			return textEl.charAt(0).toUpperCase() + textEl.substring(1);
		})
		.join(' ');

	return result;
}

function lastDot(text) {
	const textTrimmed = text.trim();
	const lastChar = textTrimmed.charAt(textTrimmed.length - 1);
	let result = textTrimmed;

	if (lastChar !== '.') {
		if (lastChar == ',') {
			result = textTrimmed.slice(0, -1) + '.';
		} else {
			result = textTrimmed.slice() + '.';
		}
	}

	return result;
}
