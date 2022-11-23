export default function slideshow() {
	const slides = document.querySelectorAll('.slideshow__slide');
	const buttonLeft = document.querySelector('.slideshow__button--left');
	const buttonRight = document.querySelector('.slideshow__button--right');
	

	buttonLeft.addEventListener('click', handleButtonLeftClick);
	function handleButtonLeftClick() {
		console.log('left')
	}

	buttonRight.addEventListener('click', handleButtonRightClick);
	function handleButtonRightClick() {
		console.log('right')
	}
}