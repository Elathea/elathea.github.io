document.addEventListener('DOMContentLoaded', function () {
	const themeToggleButton = document.querySelector('.navbar-button-content[aria-label="toggle-color-scheme"]');
	let currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

	function applyTheme(theme) {
		document.documentElement.classList.remove('light-theme', 'dark-theme');
		document.documentElement.classList.add(`${theme}-theme`);
	}

	themeToggleButton.addEventListener('click', function () {
		currentTheme = currentTheme === 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', currentTheme);
		applyTheme(currentTheme);
	});
});