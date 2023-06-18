const setRandomRate = () => {
	const randomNum = Math.floor(Math.random() * 85)
	rateStars.style.width = `${randomNum}%`
}

setRandomRate();