import header from './modules/header.js';
import slideshow from './modules/slideshow.js';

header();

for (const slideshowNode of document.querySelectorAll('.slideshow')) {
	slideshow(slideshowNode);
}
