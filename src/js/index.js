const header = document.querySelector(".header");
const footerYear = document.querySelector(".footer__year")

const changePictureOfHeader = () => {
	if (window.screen.width < 992) {
		header.classList.add("picture-anim-small");
	} else {
		header.classList.add("picture-anim-big");
	}
};

const setFooterYear = () => {
	const date = new Date()

	footerYear.textContent = date.getFullYear();
}

changePictureOfHeader();
setFooterYear()