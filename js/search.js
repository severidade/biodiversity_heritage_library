$(document).ready(function(){

	$(window).scroll(function(){
		var topo = $(window).scrollTop();
		var altura = $(window).height();
		if (topo > altura * 1/4 ) {
			$('#search').css( 'opacity', '1');
		} else {
			$('#search').css( 'opacity', '0');
		}	
	});
	$('#searchButton').click(function(){
		$('#modal-search').addClass("modalOpen");
		$('body').css( 'overflow-y', 'hidden');
	});

	$('#closeButton').click(function(){
		$('#modal-search').removeClass("modalOpen");
		$('body').css( 'overflow-y', 'scroll');
	});

	$('#submitButton').click(function(){
		alert("This website is a test. Search has no results.");
		$('#modal-search').removeClass("modalOpen");
		$('body').css( 'overflow-y', 'scroll');
	});

    $(".place").focusout(function(){
        $(this).css("color", "#FFFFFF");
    });

});


