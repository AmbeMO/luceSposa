$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		speed: 1000,
		easing: 'ease',
		autoplay:true,
		autoplaySpeed: 3000,
		// appendArrows:$('.slider__row-arrows')
	});

	$('.slider__1').slick({
		arrows:true,
		speed: 1000,
		easing: 'ease',
		autoplay:true,
		autoplaySpeed: 3000,
		appendArrows:$('.slider__row-arrows__1')
	});

	$('.slider__2').slick({
		arrows:true,
		speed: 1000,
		easing: 'ease',
		autoplay:true,
		autoplaySpeed: 3000,
		appendArrows:$('.slider__row-arrows__2')
	});

	$('.slider__3').slick({
		arrows:true,
		speed: 1000,
		easing: 'ease',
		autoplay:true,
		autoplaySpeed: 3000,
		appendArrows:$('.slider__row-arrows__3')
	});

	$('.slider__1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		console.log(nextSlide);
		$('.slider__row-pages__1 p').text('0' + (nextSlide  + 1));
		if(nextSlide == 1){
			$('.slider__top-line__1').css('width', '50%');
		} else if (nextSlide == 2) {
			$('.slider__top-line__1').css('width', '70%');
		} else if (nextSlide == 3) {
			$('.slider__top-line__1').css('width', '100%');
		}else $('.slider__top-line__1').css('width', '20%');

	});

	$('.slider__2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		console.log(nextSlide);
		$('.slider__row-pages__2 p').text('0' + (nextSlide  + 1));
		if(nextSlide == 1){
			$('.slider__top-line__2').css('width', '50%');
		} else if (nextSlide == 2) {
			$('.slider__top-line__2').css('width', '70%');
		} else if (nextSlide == 3) {
			$('.slider__top-line__2').css('width', '100%');
		}else $('.slider__top-line__2').css('width', '20%');
		

	});

	$('.slider__3').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		console.log(nextSlide);
		$('.slider__row-pages__3 p').text('0' + (nextSlide  + 1));
		if(nextSlide == 1){
			$('.slider__top-line__3').css('width', '50%');
		} else if (nextSlide == 2) {
			$('.slider__top-line__3').css('width', '70%');
		} else if (nextSlide == 3) {
			$('.slider__top-line__3').css('width', '100%');
		}else $('.slider__top-line__3').css('width', '20%');

	});



	$(function(){
		$(function() {
        var salon = $('#form-salon'),
            bride = $('#form-bride'),
            feedback = $('#form-feedback'),
            buttonsalons = $('#salons'),
            buttonbrides = $('#brides'),
            buttonfeedbacks = $('#feedbacks'),

            buttonclose = $('.footer__priorities-close__row'),
        		prioTitle = $('.footer__priorities-title'),
        		prioText = $('.footer__priorities-text'),
        		infoTitle = $('.footer__info-title'),
        		infoText = $('.footer__info-text');

       
            salon.hide();
            bride.hide();
            feedback.hide();
           

        buttonsalons.click(function() {
        		buttonsalons.css('border-bottom', '1px solid black');
        		buttonbrides.css('border-bottom', 'none');
        		buttonfeedbacks.css('border-bottom', 'none');

            salon.show();
            bride.hide();
            feedback.hide();
        });

       buttonbrides.click(function() {
       		buttonbrides.css('border-bottom', '1px solid black');
       		buttonsalons.css('border-bottom', 'none');
       		buttonfeedbacks.css('border-bottom', 'none');

            salon.hide();
            bride.show();
            feedback.hide();
        });
        buttonfeedbacks.click(function() {
        		buttonfeedbacks.css('border-bottom', '1px solid black');
        		buttonsalons.css('border-bottom', 'none');
        		buttonbrides.css('border-bottom', 'none');

            salon.hide();
            bride.hide();
            feedback.show();
        });

        buttonclose.click(function() {
        	prioTitle.hide();
        	prioText.hide();
        	infoTitle.hide();
        	infoText.hide();
        })
    });

});

});