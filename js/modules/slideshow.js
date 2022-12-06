export default function slideshow(slideshowNode) {
	// Data
	// This variable represents an abstract model of the slideshow. Based on this model, I create the HTML which shows right slide. 
	let currentSlideIndex = 0;
	
	// Querryselectors 
	// Here I select HTML elements that i want to interact with javascript. The reason I have it close to the top is that I know which HTML elements that's changed by javascript. I also need to select elements before eventlisteners. 
	const slides = slideshowNode.querySelectorAll('.slideshow__slide');
	const buttonLeft = slideshowNode.querySelector('.slideshow__button--left');
	const buttonRight = slideshowNode.querySelector('.slideshow__button--right');
	

	// Eventlisteners
	// Here I listen to the an event on an element, in these cases a 'click'. When that event happens, it runs a handler function.
	buttonLeft.addEventListener('click', handleButtonLeftClick);
	buttonRight.addEventListener('click', handleButtonRightClick);


	// Handlers 
	// Here have the handlers that runs all the methods I want to happen. In that way I have ane overview of what happens in the code without looking at the methods themself.
	function handleButtonLeftClick() {
		decreaseCurrentSlideIndex();
		renderHTML();
	}

	function handleButtonRightClick() {
		increaseCurrentSlideIndex();
		renderHTML();
	}
	
	// Methods
	// Here I have all the methods, each function does one thing to make the code as clean as possible.

	// hvorfor kaller vi de methods?

	
	// This function increases the variable currentslideindex by 1, unless it's at the end of the array where it sets currentslideindex to 0.
	function increaseCurrentSlideIndex() {
		if (currentSlideIndex === slides.length - 1) {
			currentSlideIndex = 0
		} else {
			currentSlideIndex += 1
		}
	}

	// This function decreases the variable currentslideindex by 1, unles it's at the start of the array where it sets currentSlideIndex to end of array (slides.length - 1).
	function decreaseCurrentSlideIndex() {
		if (currentSlideIndex === 0) {
			currentSlideIndex = slides.length - 1
		} else {
			currentSlideIndex -= 1
		}
		console.log(currentSlideIndex);
	}

	// renderHTML is a main function who runs every change in HTML.
	function renderHTML() {
		renderSlideshow();
	}

	// This function changes the HTML to show right slide based on currentslideindex.
	function renderSlideshow() {
		for(let index = 0; index < slides.length; index += 1) {
			slides[index].classList.remove('slideshow__slide--visible')
		}

		slides[currentSlideIndex].classList.add('slideshow__slide--visible')
	}

	// Called methods
	// I call the render function to show the first slide in slide show.
	renderHTML();
}