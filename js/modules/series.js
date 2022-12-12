export default function series(seriesNode)  {
	// Data
	// This is the abstract model of stars
	let amountOfStars = 0

	//Query selector
	//Here I select HTML elements that I want to interact with javascript. The reason I have it close to the top is that I know which HTML elements that's changed by javascript. I also need to select elements before eventlisteners.
	const starButtons = seriesNode.querySelectorAll('.series__star');
	const starButtonsIcons = seriesNode.querySelectorAll('.series__star img');


	//  addeventlistener
	//  Here I listen to an event on an element, in these cases a 'click'. When that event happens, it runs a handler function.
	//  I use an anonomus function to be able to send in the index of the button as a prameter.
	for (let index = 0; index < starButtons.length; index += 1) {
		starButtons[index].addEventListener('click', () => {
			handleStarButtonclick(index)
		})
	}
	 
	//  Handler
	//  Here have the handlers that runs all the methods I want to happen. That way I have ane overview of what happens in the code without looking at the methods themself.
	function handleStarButtonclick(index) {
		setAmountOfStars(index);
		renderHTML();
	}

	// Methods
	// Here I have all the methods, each function does one thing to make the code as clean as possible. Methods is a set of instructions to do a certain task.

	/**
	 * This changes the amountOfStars variable based on which star button we click
	 * We add 1 because an array starts at 0
	 * If you click the same button twice, we set amountOfStars to 0
	 * @param {number} index of star button clicked
	 */
	function setAmountOfStars(index) {
		const newAmountOfStars = index + 1;

		if (amountOfStars === newAmountOfStars) {
			amountOfStars = 0;
		} else {
			amountOfStars = newAmountOfStars;
		}
	}

	/**
	 * This renders yellow stars
	 * First loop removes all yellow stars so we can apply new yellow stars
	 * amountOfStars decides how many of the stars should be yellow, as we loop over the stars untill the index is the same number as amountOfStars
	 * @see amountOfStars 
	 */
	function renderHTML() {
		for (let index = 0; index < starButtons.length; index += 1) {
			starButtonsIcons[index].src = '/assets/svg/star.svg'
		}
	
		for (let index = 0; index < amountOfStars; index += 1)  {
			starButtonsIcons[index].src = '/assets/svg/star-active.svg'
		}
	}
}