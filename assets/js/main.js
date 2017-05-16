/*
	Intensify by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

/* ADDED JS */


/*MEREDITH*/


// Get the modal
var modalMer = document.getElementById('myModalMer');
var modalNick = document.getElementById('myModalNick');
var modalMatteo = document.getElementById('myModalMatteo');
var modalMac = document.getElementById('myModalMac');
var modalKara = document.getElementById('myModalKara');
var modalKate = document.getElementById('myModalKate');

// Get the button that opens the modal
var btnMer = document.getElementById("myBtnMer");
var btnNick = document.getElementById("myBtnNick");
var btnMatteo = document.getElementById("myBtnMatteo");
var btnMac = document.getElementById("myBtnMac");
var btnKara = document.getElementById("myBtnKara");
var btnKate = document.getElementById("myBtnKate");

// Get the <span> element that closes the modal
var spanNick = document.getElementsByClassName("close")[0];
var spanMer = document.getElementsByClassName("close")[1];
var spanMatteo = document.getElementsByClassName("close")[2];
var spanMac = document.getElementsByClassName("close")[3];
var spanKara = document.getElementsByClassName("close")[4];
var spanKate = document.getElementsByClassName("close")[5];

// When the user clicks on the button, open the modal
btnMer.onclick = function() {
    modalMer.style.display = "block";
}
btnNick.onclick = function(){
  modalNick.style.display = "block";
}
btnMatteo.onclick = function() {
    modalMer.style.display = "block";
}
btnMac.onclick = function(){
  modalNick.style.display = "block";
}
btnKara.onclick = function() {
    modalMer.style.display = "block";
}
btnKate.onclick = function(){
  modalNick.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanMer.onclick = function() {
    modalMer.style.display = "none";
}
spanNick.onclick = function() {
    modalNick.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalMer) {
        modalMer.style.display = "none";
    }
    if(event.target == modalNick){
      modalNick.style.display = "none";
    }
}

/* ADDED JS */

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly({
				offset: function() {
					return $header.height();
				}
			});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right'
				});

	});

})(jQuery);
