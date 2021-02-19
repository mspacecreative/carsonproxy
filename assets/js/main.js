(function ($) {
	
	// TRIGGER OVERLAYS
	var clientsPage = 'clients',
	    aboutPage = 'about',
		contactPage = 'contact',
		base_url = '/',
		site_tagline = 'Shareholder Communications',
		site_title = 'Carson Proxy';
	$(function() {
		if( window.location.href.indexOf(clientsPage) > -1 ) {
			$('a[href="#' + clientsPage + '"]').trigger('click');
			history.pushState(null, null, '/clients');
		} else if( window.location.href.indexOf(aboutPage) > -1 ) {
			$('a[href="#' + aboutPage + '"]').trigger('click');
			history.pushState(null, null, '/about');
		} else if( window.location.href.indexOf(contactPage) > -1 ) {
			$('a[href="#' + contactPage + '"]').trigger('click');
			history.pushState(null, null, '/contact');
		}
			
		/*
		$(window).bind("popstate", function () {
			location.reload();
		});
		*/
	});
	
	var menuOverlay = $('.menuOverlay'),
	  clientOverlay = $('.clientsContainer'),
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
	
	$('.aboutLink a').click(function() {
		//e.preventDefault();
		
		history.pushState(null, null, '/about');
		
		$(document).prop('title', 'Industry Expertise' + ' | ' + site_title);
		
		menuOverlay.fadeToggle('fast');
		bio.slideDown();
		hamburgerIcon.removeClass('is-active');
	});
	
	$('.contactLink a').click(function() {
		//e.preventDefault();
		
		history.pushState(null, null, '/contact');
		
		$(document).prop('title', 'Contact' + ' | ' + site_title);
		
		menuOverlay.fadeToggle('fast');
		form.slideDown();
		hamburgerIcon.removeClass('is-active');
	});
	
	// MOBILE MENU
	$('.hamburger').click(function(e) {
		e.preventDefault();
		toggleMenu();
		
		// ADD CLASS TO EACH MENU ITEM
		/*
		menuItem.each(function() {
			menuItem.toggleClass('fadeDown');
		});
		
		// ADD ANIMATION TO MENU ITEMS
		/*
		menuItem.each(function() {
			setTimeout(function() {
				menuItem.toggleClass('aos-animate');
			}, 400);
		});
		*/
	});
	
	$('.menu-item a').click(function() {
		// ADD ANIMATION TO MENU ITEMS
		/*
		menuItem.each(function() {
			setTimeout(function() {
				menuItem.toggleClass('aos-animate');
			}, 400);
		});
	*/
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
		history.replaceState(null, null, base_url);
		$(document).prop('title', site_title + ' | ' + site_tagline);
	});
	
	// ESCAPE KEY CLICK TO ESCAPE
	$(document).keyup(function(e) {
		if (e.key === "Escape") { // escape key maps to keycode `27`
			bio.slideUp();
			form.slideUp();
			submitSuccess.slideUp();
			menuOverlay.fadeOut();
			hamburgerIcon.removeClass('is-active');
			clientOverlay.slideUp();
			
			history.replaceState(null, null, base_url);
			$(document).prop('title', site_title + ' | ' + site_tagline);
		}
	});
	
	// SHOW WORK OVERLAY
	$('.workLink').on('click', function(e) {
		e.preventDefault();
		
		history.pushState(null, null, '/clients');
		
		$(document).prop('title', 'Influencing shareholders' + ' | ' + site_title);
		
		menuOverlay.fadeOut('fast');
		hamburgerIcon.removeClass('is-active');
		clientOverlay.slideToggle();
	});
	
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
		form.hide();
	}, false );
	
	submitSuccess.click(function() {
		submitSuccess.slideUp();
	});
	
	$(function() {
		// CLOSE OVERLAYS ON BACK BUTTON CLICK
		if (window.history && window.history.pushState) {
	        $(window).on('popstate', function () {
	            clientOverlay.slideUp();
				bio.slideUp();
				form.slideUp();
				
				if ( window.location.href.indexOf(clientsPage) > -1 ) {
					clientOverlay.slideDown();
				} else if ( window.location.href.indexOf(aboutPage) > -1 ) {
					bio.slideDown();
				} else if ( window.location.href.indexOf(contactPage) > -1 ) {
					form.slideDown();
				}
	        });
	    }
		
		AOS.init();
		
		// ADD ANIMATION TO MENU ITEMS
		/*
		var counter = 0;
		menuItem.each(function() {
			$(this).attr({
				'data-aos': 'fade-down',
				'data-aos-delay': 250 - (counter++ * 100),
			}).removeClass('aos-animate');
		});
		*/
	});
	
})(jQuery);