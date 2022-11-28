export default function slideshow() {
	//data
	let currentSlideIndex = 0;
	
	//Querryselector
	const slides = document.querySelectorAll('.slideshow__slide');
	const buttonLeft = document.querySelector('.slideshow__button--left');
	const buttonRight = document.querySelector('.slideshow__button--right');
	
	//event listener
	buttonLeft.addEventListener('click', handleButtonLeftClick);
	buttonRight.addEventListener('click', handleButtonRightClick);

	//handler
	function handleButtonLeftClick() {
		decreaseCurrentSlideIndex();
		renderHTML();
	}
	function handleButtonRightClick() {
		increaseCurrentSlideIndex();
		renderHTML();
	}
	
	//methoods
	function increaseCurrentSlideIndex() {
		if (currentSlideIndex === slides.length - 1) {
			currentSlideIndex = 0
		} else {
			currentSlideIndex += 1
		}

		console.log(currentSlideIndex);
	}

	function decreaseCurrentSlideIndex() {
		if (currentSlideIndex === 0) {
			currentSlideIndex = slides.length - 1
		} else {
			currentSlideIndex -= 1
		}
		console.log(currentSlideIndex);
	}

	function renderHTML() {
		renderSlideshow();
	}

	function renderSlideshow() {
		for(let index = 0; index < slides.length; index += 1) {
			slides[index].classList.remove('slideshow__slide--visible')
		}


		slides[currentSlideIndex].classList.add('slideshow__slide--visible')
	}

	// Called methods
	renderHTML();
}

