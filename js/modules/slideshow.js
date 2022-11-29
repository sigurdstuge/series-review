export default function slideshow(slideshowNode) {
	//data
	let currentSlideIndex = 0;
	
	//Querryselector
	const slides = slideshowNode.querySelectorAll('.slideshow__slide');
	const buttonLeft = slideshowNode.querySelector('.slideshow__button--left');
	const buttonRight = slideshowNode.querySelector('.slideshow__button--right');
	
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
	
	/**
	 * 
	 */
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