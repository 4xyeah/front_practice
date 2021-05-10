const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

const SHOWING = 'showing';

const firstSlide = document.querySelector('.item:first-child');

firstSlide.classList.add(SHOWING);

const slide = () => {
	const curSlide = document.querySelector(`.${SHOWING}`);
	if (curSlide) {
		curSlide.classList.remove(SHOWING);
		const nextSlide = curSlide.nextElementSibling;
		if (nextSlide) {
			nextSlide.classList.add(SHOWING);
		} else {
			firstSlide.classList.add(SHOWING);
		}
	} else {
		firstSlide.classList.add(SHOWING);
	}
};
setInterval(slide, 4000);
