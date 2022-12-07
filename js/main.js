import header from './modules/header.js';
import slideshow from './modules/slideshow.js';
import series from './modules/series.js';

header();

for (const seriesNode of document.querySelectorAll('.series__stars')) {
	series(seriesNode);
}

for (const slideshowNode of document.querySelectorAll('.slideshow')) {
	slideshow(slideshowNode);
}
