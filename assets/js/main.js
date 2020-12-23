(function ($) {
	
	var menuOverlay = $('.menuOverlay'),
	  hamburgerIcon = $('.hamburger');
	function toggleMenu() {
		$('body').toggleClass('menuOpen');
		
		hamburgerIcon.toggleClass('is-active');
		
		menuOverlay.fadeToggle('fast');
		
		/*
		if ( subMenuLink.href.indexOf("#") != -1 ) {
			hamburgerIcon.removeClass('is-active');
			$('body').removeClass('menuOpen');
		}
		*/
	}
	
	// ADD ANIMATION TO MENU ITEM
	var menuItem = $('.menu-item');
	
	$('.aboutLink a').click(function(e) {
		e.preventDefault();
		
		menuOverlay.fadeToggle('fast');
		bio.slideDown();
		hamburgerIcon.removeClass('is-active');
	});
	
	$('.contactLink a').click(function(e) {
		e.preventDefault();
		
		menuOverlay.fadeToggle('fast');
		form.slideDown();
		hamburgerIcon.removeClass('is-active');
	});
	
	// MOBILE MENU
	$('.hamburger').click(function(e) {
		e.preventDefault();
		toggleMenu();
		
		// ADD ANIMATION TO MENU ITEMS
		menuItem.each(function() {
			setTimeout(function() {
				menuItem.toggleClass('aos-animate');
			}, 400);
		});
	});
	
	$('.menu-item a').click(function() {
		// ADD ANIMATION TO MENU ITEMS
		menuItem.each(function() {
			setTimeout(function() {
				menuItem.toggleClass('aos-animate');
			}, 400);
		});
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
	
	// TOGGLE BIO
	var bio = $('.bioOverlay');
	$('.bioToggle').click(function(e) {
		e.preventDefault();
		bio.slideDown();
	});
	
	var reveal = $('.reveal');
	reveal.each(function() {
		$('.bioToggle').click(function() {
			reveal.not( reveal.slideUp() );
		});
	});
	
	// TOGGLE FORM
	var form = $('.formOverlay');
	$('.formToggle').click(function(e) {
		e.preventDefault();
		form.slideDown();
	});
	
	$('.closeModalButton').click(function() {
		$(this).parent().slideToggle();
	});
	
	// ESCAPE KEY CLICK TO ESCAPE
	$(document).keyup(function(e) {
		if (e.key === "Escape") { // escape key maps to keycode `27`
			bio.slideUp();
			form.slideUp();
			submitSuccess.slideUp();
			menuOverlay.fadeOut();
			hamburgerIcon.removeClass('is-active');
		}
	});
	
	// DISPLAY SUBMISSION SUCCESS STATEMENT
	var submitSuccess = $('.submissionSuccessOverlay');
	$(window).load( function() {
		if ( $('.sent').length ) {
			submitSuccess.fadeIn();
		}
	});
	
	submitSuccess.click(function() {
		submitSuccess.slideUp();
	});
	
	$(document).ready(function() {
		AOS.init();
		
		// ADD ANIMATION TO MENU ITEMS
		var counter = 0;
		menuItem.each(function() {
			$(this).attr({
				'data-aos': 'fade-down',
				'data-aos-delay': 250 - (counter++ * 100),
			}).removeClass('aos-animate');
		});
	});
	
})(jQuery);