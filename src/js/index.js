const header = document.querySelector(".header");
let pictureNum = 1;

const changePictureOfHeader = () => {
    header.classList.remove("picture-anim-hide");

	if (window.screen.width < 992 && pictureNum === 0) {
		header.classList.add("second-picture-small");
		header.classList.remove("first-picture-small");
		header.classList.add("picture-anim");
		pictureNum = 1;
	} else if (window.screen.width > 992 && pictureNum === 0) {
		header.classList.add("second-picture-big");
		header.classList.remove("first-picture-big");
		header.classList.add("picture-anim");
		pictureNum = 1;
	} else if (window.screen.width < 992 && pictureNum === 1) {
		header.classList.add("first-picture-small");
		header.classList.remove("second-picture-small");
		header.classList.add("picture-anim");
		pictureNum = 0;
	} else if (window.screen.width > 992 && pictureNum === 1) {
		header.classList.add("first-picture-big");
		header.classList.remove("second-picture-big");
		header.classList.add("picture-anim");
		pictureNum = 0;
	}
};

setInterval(() => {
	changePictureOfHeader();

	setTimeout(() => {
		header.classList.remove("picture-anim");
	}, 2500);

	setTimeout(() => {
		header.classList.add("picture-anim-hide");
	}, 4600);
}, 5000);

setTimeout(() => {
	header.classList.remove("picture-anim");
}, 2500);

setTimeout(() => {
	header.classList.add("picture-anim-hide");
}, 4600);

changePictureOfHeader();
