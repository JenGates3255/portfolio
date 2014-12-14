$(document).on('ready', function() {
  
	$('.nav-item').children('ul').hide();


	$('.nav-item').click(function(){
		$(this).children('ul').toggle();
	});


});