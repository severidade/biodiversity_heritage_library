$(document).ready(function(){

	$(".conteinerPosts .post:eq(0)").addClass("postActive");

	$('.lb-next').on('click', function(event) {
		if ($(".postActive").next().size()) {
			$(".postActive").fadeOut().removeClass("postActive").next().fadeIn().addClass("postActive");
		} else {
			$(".postActive").fadeOut().removeClass("postActive");
			$(".conteinerPosts .post:eq(0)").fadeIn().addClass("postActive");
		}	
	});

	$('.lb-prev').on('click', function(event) {
		if ($(".postActive").prev().size()) {
			$(".postActive").fadeOut().removeClass("postActive").prev().fadeIn().addClass("postActive");
		} else {
			$(".postActive").fadeOut().removeClass("postActive");
			$(".conteinerPosts .post:last-of-type").fadeIn().addClass("postActive");
		}
	});

	$(window).resize(function() {
		if ($(window).width() > 425 ) {
			$(".post").css("display", "block");
		} else {
			$(".post").css("display", "none");
			$(".post:eq(0)").css("display", "inherit");
		}
	});

});