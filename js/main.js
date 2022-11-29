import header from './modules/contact.js';
import contact from './modules/header.js';
import series from './modules/series.js';
import slideshow from './modules/slideshow.js';


contact();
header();
series();

for (const slideshowNode of document.querySelectorAll('.slideshow')) {
	slideshow(slideshowNode);
}
