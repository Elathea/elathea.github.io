document.addEventListener('DOMContentLoaded', function () {
	var navbarMenuIcons = document.querySelectorAll('.navbar-menu-button');
	var navbarButtonLists = document.querySelectorAll('.navbar-button-list');
	var navbar = document.getElementById('navbar');

	navbarMenuIcons.forEach(function(navbarMenuIcon) {
		navbarMenuIcon.addEventListener('click', function () {
			navbarButtonLists.forEach(function(navbarButtonList) {
				navbarButtonList.classList.toggle('show');
			});
			navbar.classList.toggle('show');
		});
	});
});
