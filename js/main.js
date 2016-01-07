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
		$('.swiper-button-prev').animate({"margin-left":"10px"}, function(){
			$('.swiper-button-prev').animate({"margin-left":"-10px"})
		})
	}
	function nextButtonMove (){
		$('.swiper-button-next').animate({"margin-right":"10px"}, function(){
			$('.swiper-button-next').animate({"margin-right":"-10px"})
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

	$('.main-massage').click(function(){
	$('.bg1').animate({"left":"0"},500);
	$('.bg2').animate({"left":"40%"},500);
	$('.massage').delay(400).animate({"top":"20%"}, 500);
	//$('.pop-click').animate({"opacity":"0"}, 1)
  console.log('hi')
})

	$('.btn-massage').click(function(){
		$('.massage').animate({"top":"100%"}, 500, function(){
			$('.bg1').animate({"left":"-60%"},500);
			$('.bg2').animate({"left":"100%"},500);	
		});
	})
});

