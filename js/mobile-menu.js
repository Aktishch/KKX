// Ширина скролла
const html = document.querySelector('html');
let documentWidth = parseInt(document.documentElement.clientWidth);
let windowsWidth = parseInt(window.innerWidth);
let scrollbarWidth = windowsWidth - documentWidth;

// Переменные для мобильного меню
const nav = document.querySelector('.nav');
const burger = document.querySelector('#burger');
const mobile = document.querySelector('.mobile');
const exit = document.querySelector('.mobile__exit');
const mobileHead = document.querySelector('.mobile__head');
const mobileNav = document.querySelector('.mobile__nav');
const mobileContact = document.querySelector('.mobile__contact');
const mobileSocial = document.querySelector('.mobile__social');

// Событие появления меню
burger.addEventListener('click', () => {
    html.style.overflow = "hidden";
	html.style.marginRight = scrollbarWidth + "px";
    mobile.classList.add('-mobile-');
    mobileHead.classList.add('-mobile-head-');
    mobileNav.classList.add('-mobile-nav-');
    mobileContact.classList.add('-mobile-contact-');
    mobileSocial.classList.add('-mobile-social-');
});

// Событие скрытия меню
exit.addEventListener('click', () => {
    html.style.overflow = "visible";
	html.style.marginRight = "0";
    mobile.classList.remove('-mobile-');
    mobileHead.classList.remove('-mobile-head-');
    mobileNav.classList.remove('-mobile-nav-');
    mobileContact.classList.remove('-mobile-contact-');
    mobileSocial.classList.remove('-mobile-social-');
});

// Разворачивающее меню на главной
document.addEventListener('click', (event) => {
	if(event.target.classList.contains('mobile__submenu')){
		let subMenu = event.target.nextElementSibling;
		let arrow = event.target.querySelector('.mobile__icon');
		if(!subMenu.classList.contains('-mobile-listing-')){
			subMenu.classList.add('-mobile-listing-');
			arrow.classList.add('-mobile-icon-');
		}else{
			subMenu.classList.remove('-mobile-listing-');
			arrow.classList.remove('-mobile-icon-');
		}
	}
});

// Появление и исчезание меню при скролле
let prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', () => {
	let currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
	    nav.classList.add('-scrolled-');
	} else {
	    nav.classList.remove('-scrolled-');
	}
	prevScrollpos = currentScrollPos;
});