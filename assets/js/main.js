(function ($) {
	
	// TRIGGER OVERLAYS
	var clientsPage = 'clients',
	    aboutPage = 'about',
		contactPage = 'contact',
		base_url = '/',
		site_tagline = 'Shareholder Communications',
		body = $('body');
		site_title = 'Carson Proxy',
		menuOverlay = $('.menuOverlay'),
		modal = $('.modal'),
		submitSuccess = $('.submissionSuccessOverlay'),
		hamburgerIcon = $('.hamburger');
	
	function restoreUrl() {
		history.replaceState(null, null, base_url);
		$(document).prop('title', site_title + ' | ' + site_tagline);
	}
	
	function toggleMenu() {
		body.toggleClass('menuOpen');
		
		hamburgerIcon.toggleClass('is-active');
		
		menuOverlay.fadeToggle('fast');
	}
	
	// MOBILE MENU
	$('.hamburger').click(function(e) {
		e.preventDefault();
		toggleMenu();
	});
	
	// SMOOTH SCROLL
	$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 500);
			    return false;
			}
		}
	});
	
	$('.closeModalButton').click(function() {
		modal.slideUp();
		restoreUrl();
		setTimeout(function() {
			body.removeClass('clients about contact');
		},500);
	});
	
	// ESCAPE KEY CLICK TO ESCAPE
	$(document).keyup(function(e) {
		if (e.key === "Escape") { // escape key maps to keycode `27`
			modal.slideUp();
			submitSuccess.slideUp();
			menuOverlay.fadeOut();
			hamburgerIcon.removeClass('is-active');
			
			restoreUrl();
		}
	});
	
	/*
	// DISPLAY SUBMISSION SUCCESS STATEMENT
	var submitSuccess = $('.submissionSuccessOverlay');
	$(document).ajaxSuccess( function() {
		if ( $('.sent').length ) {
			submitSuccess.fadeIn();
		}
	});
	
	var wpcf7Elm = document.querySelector( '.wpcf7' );
 
	wpcf7Elm.addEventListener( 'wpcf7mailsent', function( event ) {
		if ( $('.sent').length ) {
			submitSuccess.fadeIn();
		}
		modal.slideUp();
	}, false );
	*/
	
	submitSuccess.click(function() {
		submitSuccess.fadeOut();
		
		restoreUrl();
	});
	
	$(function() {
		AOS.init();
	});
	
	function submissionSuccessNotice() {
		if (window.location.href.indexOf('submission-success') != -1) {
			submitSuccess.fadeIn();
			modal.slideUp();
		} else {
			submitSuccess.hide();
		}
	}
	
	window.onload = submissionSuccessNotice();
	
})(jQuery);