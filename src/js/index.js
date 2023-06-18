const header = document.querySelector(".header");
const footerYear = document.querySelector(".footer__year");
const navSide = document.querySelector(".nav-side");
const navSideBg = document.querySelector(".nav-side__bg");
const navSideBtn = document.querySelector(".nav__hamburger");
const navSideCloseBtn = document.querySelector(".nav-side__closebutton");
const productsCount = document.querySelector(".main__productscount");
const productsSort = document.querySelector("#sort");
const catLinkBtns = document.querySelectorAll(".main__button--cat");
const aquariumLinkBtns = document.querySelectorAll(".main__button--aquarium");
const dogLinkBtns = document.querySelectorAll(".main__button--dog");
const rateStars = document.querySelector(".main__item-rate-bg")

const setFooterYear = () => {
	const date = new Date();

	footerYear.textContent = date.getFullYear();
};

const toggleNavSide = () => {
	navSide.classList.toggle("hidden");
	navSideBg.classList.toggle("hidden");
	document.body.classList.toggle("body-scroll");
};

const checkProductsCount = () => {
	productsCount.textContent = `${productsCount.parentElement.nextElementSibling.childElementCount} products`;
};

const changeSortType = () => {
	const productsSortType = productsSort.value;
	const productsItem = document.querySelectorAll(".main__itemlist-price");
	switch (productsSortType) {
		case "az":
			console.log("a-z");
			break;
		case "za":
			console.log("z-a");
			break;
		case "lowtohigh":
			productsItem.forEach((item) => {
				const productItemLenght = item.textContent.length;
				item.parentElement.style.order = `${parseInt(
					Number(item.textContent.slice(0, productItemLenght - 1))
				)}`;
			});
			break;
		case "hightolow":
			productsItem.forEach((item) => {
				const productItemLenght = item.textContent.length;
				item.parentElement.style.order = `-${parseInt(
					Number(item.textContent.slice(0, productItemLenght - 1))
				)}`;
			});
			break;
		default:
			console.log("Wrong value");
	}
};

setFooterYear();

if (
	document.title.includes("Dog") ||
	document.title.includes("Cat") ||
	document.title.includes("Aquarium") ||
	document.title.includes("Reptile") ||
	document.title.includes("Small") ||
	document.title.includes("Bird")
) {
	checkProductsCount();

	productsSort.addEventListener("click", changeSortType);
} 

navSideBtn.addEventListener("click", toggleNavSide);
navSideCloseBtn.addEventListener("click", toggleNavSide);
navSideBg.addEventListener("click", toggleNavSide);
