$(document).ready(function(){
	
	var alturaTela = $(window).height();
	var disparo = alturaTela*1/9; 

	$(".hotspot").click(function(){

		$(".menuoptions").toggleClass("isActive");
		$(".menu_level_01").toggleClass("optionsActive");
		$("body").toggleClass("noscroll");

		$('div[id^="#menuoptions_02"]').removeClass("optionsActive");

		
	});

	$(".menuoptions").on("swipeleft",function(){
		$(".menuoptions").toggleClass("isActive");
		$(".menu_level_01").toggleClass("optionsActive");
		$("body").toggleClass("noscroll");

		$('div[id^="#menuoptions_02"]').removeClass("optionsActive");
	});

	/* Fixar menu */
	$(window).scroll(function() {
	    if ($(window).scrollTop() > disparo) {
	        $('.navbar').addClass('menuFixar');        
	    } else {
	        $('.navbar').removeClass('menuFixar');
	    }
	});

	/* Ativar menu de nível dois */
	$('a[href^="#menuoptions_02"]').on('click', function(event) {

	    var targetMenu = $(this.getAttribute('href'));

	    $(targetMenu).toggleClass("optionsActive");

	    $(".label_back").click(function(){
			$(targetMenu).removeClass("optionsActive");	
		});
	});

});