const header = document.querySelector(".header");
const footerYear = document.querySelector(".footer__year");
const navSide = document.querySelector(".nav-side");
const navSideBg = document.querySelector(".nav-side__bg");
const navSideBtn = document.querySelector(".nav__hamburger");
const navSideCloseBtn = document.querySelector(".nav-side__closebutton");

const changePictureOfHeader = () => {
	if (window.screen.width < 992) {
		header.classList.add("picture-anim-small");
	} else {
		header.classList.add("picture-anim-big");
	}
};

const setFooterYear = () => {
	const date = new Date();

	footerYear.textContent = date.getFullYear();
};

const toggleNavSide = () => {
	navSide.classList.toggle("hidden");
	navSideBg.classList.toggle("hidden");
	document.body.classList.toggle("body-scroll");
};

changePictureOfHeader();
setFooterYear();

navSideBtn.addEventListener("click", toggleNavSide);
navSideCloseBtn.addEventListener("click", toggleNavSide);
navSideBg.addEventListener("click", toggleNavSide);
