const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const drawerNav = document.querySelector('.drawer-nav');
const drawerMask = document.querySelector('.drawer-mask');

toggleBtn.addEventListener('click', () => {
	drawerNav.classList.toggle('show-nav');
	drawerMask.classList.toggle('show-mask');
});

closeBtn.addEventListener('click', () => {
	drawerNav.classList.remove('show-nav');
	drawerMask.classList.remove('show-mask');
});

drawerMask.addEventListener('click', () => {
	drawerNav.classList.remove('show-nav');
	drawerMask.classList.remove('show-mask');
});
