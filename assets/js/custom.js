/*=============================================================
Authour URL: www.designbootstrap.com

http://www.designbootstrap.com/

License: MIT

http://opensource.org/licenses/MIT

100% Free To use For Personal And Commercial Use.

IN EXCHANGE JUST TELL PEOPLE ABOUT THIS WEBSITE

========================================================  */

$(document).ready(function () {

/*====================================
SCROLLING SCRIPTS
======================================*/

$('.scroll-me a').bind('click', function (event) { //just pass scroll-me in design and start scrolling
	var $anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top
	}, 1200, 'easeInOutExpo');
	event.preventDefault();
});


/*====================================
SLIDER SCRIPTS
======================================*/

var background_delay_time = 15000; // this isn't working...problem could be in vegas.min.js 
var carousel_delay_time = 6000;

$('#carousel-slider').carousel({
interval: carousel_delay_time //TIME IN MILLI SECONDS
});


/*====================================
VEGAS SLIDESHOW SCRIPTS
======================================*/
$.vegas('slideshow', {
	backgrounds: [
	{ src: 'assets/img/guitar.jpg', fade: 1000, delay: background_delay_time }, // sparedes
	{ src: 'assets/img/concert.jpg', fade: 1000, delay: background_delay_time },
	{ src: 'assets/img/baritone-saxophone.jpg', fade: 1000, delay: background_delay_time },
	{ src: 'assets/img/bulb.jpeg', fade: 1000, delay: background_delay_time },
	]
});

// Fix the shudder effect
// $.vegas('slideshow', {
// backgrounds: [
// { src: 'assets/img/1.jpg', fade: 1000, delay: 9000 },
// { src: 'assets/img/2.jpg', fade: 1000, delay: 9000 },
// ]
// })('overlay', {
// /** SLIDESHOW OVERLAY IMAGE **/
// src: 'assets/js/vegas/overlays/06.png' // THERE ARE TOTAL 01 TO 15 .png IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE HERE
// });


/*====================================
POPUP IMAGE SCRIPTS
======================================*/
$('.fancybox-media').fancybox({
	openEffect: 'elastic',
	closeEffect: 'elastic',
	helpers: {
		title: {
			type: 'inside'
		}
	}
});


/*====================================
FILTER FUNCTIONALITY SCRIPTS
======================================*/
$(window).load(function () {
	var $container = $('#work-div');
	$container.isotope({
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		}
	});
	$('.caegories a').click(function () {
		$('.caegories .active').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
		return false;
	});

});



/*====================================
WRITE YOUR CUSTOM SCRIPTS BELOW
======================================*/







});
