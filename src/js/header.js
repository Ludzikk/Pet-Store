const changePictureOfHeader = () => {
	if (window.screen.width < 992) {
		header.classList.add("picture-anim-small");
	} else {
		header.classList.add("picture-anim-big");
	}
};

changePictureOfHeader();