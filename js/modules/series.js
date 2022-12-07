export default function series(seriesNode)  {
	// Data
	let amountOfStars = 0

	//queryselector
	const starButtons = seriesNode.querySelectorAll('.series__star');
	const starButtonsIcon = seriesNode.querySelectorAll('.series__star img');

	//addeventlistener
	for (let index = 0; index < starButtons.length; index += 1) {
		starButtons[index].addEventListener('click', () => {
			handleStarButtonclick(index)
		})
	}

	// handler
	function handleStarButtonclick(index) {
		const newAmountOfStars = index + 1;

		if (amountOfStars === newAmountOfStars) {
			amountOfStars = 0;
		} else {
			amountOfStars = newAmountOfStars;
		}
		
		renderHTML();
	}

	// Methods
	function renderHTML() {
		for (let index = 0; index < starButtons.length; index += 1) {
			starButtonsIcon[index].src = '/assets/svg/star.svg'
		}

		for (let index = 0; index < amountOfStars; index += 1)  {
			starButtonsIcon[index].src = '/assets/svg/star-active.svg'
		}

	}
}