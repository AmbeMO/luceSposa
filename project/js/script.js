$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		speed: 1000,
		easing: 'ease',
		autoplay:true,
		autoplaySpeed: 3000,

	});

	$(function(){
		$(function() {
        var salon = $('#form-salon'),
            bride = $('#form-bride'),
            feedback = $('#form-feedback'),
            buttonsalons = $('#salons'),
            buttonbrides = $('#brides');
            buttonfeedbacks = $('#feedbacks');

        buttonsalons.click(function() {
            salon.show();
            bride.hide();
            feedback.hide();
        });

       buttonbrides.click(function() {
            salon.hide();
            bride.show();
            feedback.hide();
        });
        buttonfeedbacks.click(function() {
            salon.hide();
            bride.hide();
            feedback.show();
        });
    });

})(jQuery);

});