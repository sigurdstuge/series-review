import header from './modules/header.js';
import series from './modules/series.js';
import slideshow from './modules/slideshow.js';

header();

// Here a create a loop where I send in nodes of each section to be able to implement seperated logic.
for (const seriesNode of document.querySelectorAll('.series__stars')) {
	series(seriesNode);
}

// Here a create a loop where I send in nodes of each section to be able to implement seperated logic.
for (const slideshowNode of document.querySelectorAll('.slideshow')) {
	slideshow(slideshowNode);
}
