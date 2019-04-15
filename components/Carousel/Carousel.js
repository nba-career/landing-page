class Carousel {
	constructor(carousel) {
		this.carousel = carousel;
		this.leftButton = carousel.querySelector('.left-button');
		this.rightButton = carousel.querySelector('.right-button');

		this.images = carousel.querySelectorAll('img');
		this.currentIndex = 0;

		this.leftButton.addEventListener('click', () => {
			this.slideLeft();
		});

		this.rightButton.addEventListener('click', () => {
			this.slideRight();
		});
	}
	slideLeft() {
    this.images[this.currentIndex].style.display = 'none';
		if (this.currentIndex === 0) {
			this.currentIndex = this.images.length - 1
		} else {
			this.currentIndex = this.currentIndex - 1
    }
    this.images[this.currentIndex].style.display = 'block';
	}

	slideRight() {
    this.images[this.currentIndex].style.display = 'none';
		if (this.currentIndex < this.images.length - 1) {
			this.currentIndex++;
		} else {
			this.currentIndex = 0;
    }
    this.images[this.currentIndex].style.display = 'block';
	}
}

let carousel = document.querySelector('.carousel');
const fancyCarousel = new Carousel(carousel);