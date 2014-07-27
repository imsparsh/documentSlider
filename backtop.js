/* #documentSlider plugin

* This plugin holds jQuery code to display an image at bottom right corner on
* the screen, which gets displayed when the document is scrolled down...
* and when clicked, slides the document at the top..

*/


$(document).ready(function(){

	// hide #backtop first
	$("#backtop").hide();
	
	// fade in #backtop
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#backtop').fadeIn();
			} else {
				$('#backtop').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#backtop a').click(function () {
			$('body,html').animate({
				scrollTop: 0}, 800);
			return false;
		});
	});

});
