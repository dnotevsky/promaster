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


	//Класс Select
	var SelectPrototype = {
		init: function init(options) {
			$(this.element).select2(options);
		}
	};

	function Select(options) {
		this.element = options.element;
		this.init(options);
	};

	Select.prototype = Object.create(SelectPrototype);
	Select.prototype.constructor = Select;

	var basicSelect = $('.basic-select');
	$(basicSelect).each(function(index, select) {
		select = new Select({
			element: select
		});
	});

	//Подкласс MultipleSelect
	function MultipleSelect(options) {
		Select.call(this, options);
		this.init(options);
	};

	MultipleSelect.prototype = Object.create(Select.prototype);
	MultipleSelect.prototype.constructor = MultipleSelect;

	var specializationSelect = new MultipleSelect({
		element: $('#select-specialization'),
		placeholder: 'Выбрать специализацию'
	});


	//Класс RangeSlider
	var RangeSliderPrototype = {
		init: function init(options) {
			noUiSlider.create(this.element, options);
		}
	};

	function RangeSlider(element, options) {
		this.element = element;
		this.init(options);
	};

	RangeSlider.prototype = Object.create(RangeSliderPrototype);
	RangeSlider.prototype.constructor = RangeSlider;

	var rangeSlider = $('.range-slider');
	$(rangeSlider).each(function(index, slider) {
		slider = new RangeSlider(slider, {
			start: [0, 40000],
			connect: true,
			range: {
				'min': 0,
				'max': 100000
			}
		});
	});
});