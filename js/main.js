$(document).ready(function(){

	//SWIPER //
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        keyboardControl: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop: true,
    });	
	function prevButtonMove (){
		$('.swiper-button-prev.swiper-button-white').animate({"margin-left":"10px"}, function(){
			$('.swiper-button-prev.swiper-button-white').animate({"margin-left":"-10px"})
		})
	}
	function nextButtonMove (){
		$('.swiper-button-next.swiper-button-white').animate({"margin-right":"10px"}, function(){
			$('.swiper-button-next.swiper-button-white').animate({"margin-right":"-10px"})
		})
	}

	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
		if($(this).data('clk') == '0') {
			$('body').animate({"margin-left":"200px"});
				$('.swiper-button-white').animate({"margin-left":"200px"});
				$('.swiper-button-white').fadeOut('slow');
			
			$('body').css({"overflow-x":"hidden"});
			$(this).data('clk', '1');
		} else {
			$('body').animate({"margin-left":"0"});
				$('.swiper-button-white').animate({"margin-left":"-200px"});
				$('.swiper-button-white').fadeIn('100');
			$('body').css({"overflow-x":"none"});
			$(this).data('clk', '0')
		}
	});

	setInterval(nextButtonMove, 2500);
	setInterval(prevButtonMove, 2500);
});

