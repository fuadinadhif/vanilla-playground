const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const submitBtn = document.querySelector('.form-submit-btn');
const itemWrapper = document.querySelector('.grocery-item-wrapper');
const listWrapper = document.querySelector('.grocery-list-wrapper');
const clearAllBtn = document.querySelector('.clear-all-btn');

let editID;
let editElement;
let editFlag = false;

form.addEventListener('submit', addItem);
clearAllBtn.addEventListener('click', clearAllItem);
window.addEventListener('DOMContentLoaded', setupItems);

function addItem(e) {
	e.preventDefault();

	const value = input.value;
	const id = new Date().getTime().toString();

	if (value && !editFlag) {
		const element = document.createElement('div');

		element.setAttribute('data-id', id);
		element.classList.add('grocery-list');
		element.innerHTML = `<p class="list-title">${value}</p>
						<div class="list-btn-wrapper">
							<button type="button" class="edit-btn">
								<i class="fa-solid fa-pen-to-square"></i>
							</button>
							<button type="button" class="delete-btn">
								<i class="fa-solid fa-trash"></i>
							</button>
						</div>`;

		const deleteBtn = element.querySelector('.delete-btn');
		deleteBtn.addEventListener('click', deleteItem);
		const editBtn = element.querySelector('.edit-btn');
		editBtn.addEventListener('click', editItem);

		listWrapper.appendChild(element);
		itemWrapper.classList.add('show');

		showAlert('Alert! - Item has been submitted', 'success');
		addToLocalStorage(id, value);
		setBackToDefault();
	} else if (value && editFlag) {
		editElement.textContent = value;
		showAlert('Alert! - Item updated', 'success');
		editFromLocalStorage(value);
		setBackToDefault();
	} else if (!value) {
		showAlert('Alert! - Item cannot be empty', 'danger');
	}
}

function editItem(e) {
	const element = e.currentTarget.parentElement.parentElement;

	editElement = e.currentTarget.parentElement.previousElementSibling;
	editFlag = true;
	editID = element.dataset.id;

	input.value = editElement.textContent;
	submitBtn.textContent = 'Edit';
}

function deleteItem(e) {
	const deleteElement = e.currentTarget.parentElement.parentElement;
	const value = deleteElement.firstElementChild.textContent;
	const id = deleteElement.dataset.id;

	console.log(id);

	deleteElement.remove();

	if (listWrapper.children.length == 0) {
		itemWrapper.classList.remove('show');
	}

	showAlert(`Alert! - ${value} has been deleted`, 'danger');
	deleteFromLocalStorage(id);
	setBackToDefault();
}

function clearAllItem() {
	const deleteAllElement = document.querySelectorAll('.grocery-list');

	deleteAllElement.forEach((element) => {
		element.remove();
	});
	itemWrapper.classList.remove('show');

	showAlert(`Alert! - All item has been deleted`, 'danger');
	localStorage.removeItem('list');
	setBackToDefault();
}

function showAlert(text, status) {
	const alertWrapper = document.querySelector('.alert-wrapper');

	alertWrapper.classList.remove('show', 'success', 'danger');
	alertWrapper.textContent = text;
	alertWrapper.classList.add('show', status);

	setTimeout(() => {
		alertWrapper.classList.remove('show', status);
	}, 2000);
}

function setBackToDefault() {
	input.value = '';
	editFlag = false;
	submitBtn.textContent = 'Submit';
}

// LOCAL STORAGE
function getLocalStorage() {
	return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}

function addToLocalStorage(id, value) {
	const grocery = { id, value };
	const items = getLocalStorage();

	items.push(grocery);
	localStorage.setItem('list', JSON.stringify(items));
}

function editFromLocalStorage(value) {
	let items = getLocalStorage();

	items = items.map((item) => {
		if (item.id == editID) {
			item.value = value;
		}
	});

	localStorage.setItem('list', JSON.stringify(items));
}

function deleteFromLocalStorage(id) {
	let items = getLocalStorage();

	items = items.filter((item) => {
		return item.id !== id;
	});

	console.log(items);

	localStorage.setItem('list', JSON.stringify(items));
}

function setupItems() {
	let items = getLocalStorage();

	if (items.length > 0) {
		items.forEach((item) => {
			createItem(item.id, item.value);
		});

		itemWrapper.classList.add('show');
	}
}

function createItem(id, value) {
	const element = document.createElement('div');

	element.setAttribute('data-id', id);
	element.classList.add('grocery-list');
	element.innerHTML = `<p class="list-title">${value}</p>
						<div class="list-btn-wrapper">
							<button type="button" class="edit-btn">
								<i class="fa-solid fa-pen-to-square"></i>
							</button>
							<button type="button" class="delete-btn">
								<i class="fa-solid fa-trash"></i>
							</button>
						</div>`;

	const deleteBtn = element.querySelector('.delete-btn');
	deleteBtn.addEventListener('click', deleteItem);
	const editBtn = element.querySelector('.edit-btn');
	editBtn.addEventListener('click', editItem);

	listWrapper.appendChild(element);
}
