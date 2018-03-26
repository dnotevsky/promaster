$(document).ready(function main() {
	//Класс Carousel
	var CarouselPrototype = {
		init: function init(options) {
			setTimeout(this.autoplay.bind(this), 6500);
			$(this.element).carousel(options);
			$(this.nextButton).on('click', this.handleNextClick.bind(this));
			$(this.prevButton).on('click', this.handlePrevClick.bind(this));
		},
		handleNextClick: function handleNextClick() {
			this.showNext();
		},
		handlePrevClick: function handlePrevClick() {
			this.showPrev();
		},
		autoplay: function autoplay() {
			$(this.element).carousel('next');
	    	setTimeout(this.autoplay.bind(this), 4500);
		},
		showNext: function showNext() {
			$(this.element).carousel('next');
		},
		showPrev: function showPrev() {
			$(this.element).carousel('prev');
		}
	};

	function Carousel(options) {
		this.element = options.element;
		this.nextButton = options.nextButton;
		this.prevButton = options.prevButton;
	};

	Carousel.prototype = Object.create(CarouselPrototype);
	Carousel.prototype.constructor = Carousel;

	var coverCarousel = new Carousel({
		element: $('.cover .carousel').first(),
		nextButton: $('.cover .carousel__next').first(),
		prevButton: $('.cover .carousel__prev').first()
	});

	coverCarousel.init({
		fullWidth: true,
		indicators: false
	});


	window.Carousel = Carousel;
});