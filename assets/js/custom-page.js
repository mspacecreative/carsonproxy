(function( root, $, undefined ) {
	"use strict";

	$(function () {
		
		var
		base_url = '/',
		base_title = "Carson Proxy",
		base_description = "Shareholder Communications",
		base_title_desc = base_title + ' | ' + base_description,
		base_href = window.location.href,
		split_href = base_href.split('/'),
		secondLevelPath = split_href,
		view_page = $('.view-page'),
		menu = $('.menuOverlay'),
		modal = $('.modal'),
		closeButton = $('button.close'),
		body = $('body'),
		clientsPage = 'clients',
		contactPage = 'contact',
		careersPage = 'careers',
		aboutPage = 'about';
				 
		function ChangeUrl(page, url) {
		    if (typeof (history.pushState) != "undefined") {
				var obj = { 
					Page: page, 
					Url: url
				};
		       history.pushState(obj, obj.Page, obj.Url);
		    } else {
		        alert("Browser does not support HTML5.");
		    }
		}
		
		function openModalPages() {
				
			// REDIRECT SINGLE CPTs TO OPEN IN MODAL
			$.urlParam = function(name){
				var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
				if (results==null) {
				    return null;
				}
				return decodeURI(results[1]) || 0;
			}
				
			var pID = $.urlParam('query');
				
			if( window.location.href.indexOf(pID) != -1 ) {
				var targetButton = $('[data-id="' + pID + '"]'),
				url = targetButton.attr('href');
					
				targetButton.trigger('click');
				ChangeUrl('', url);
			}
		}
		
		function reopenModalPages() {
			if( window.location.href.indexOf(aboutPage) != -1 ) {
				$('.aboutLink a').trigger('click');
			} else if( window.location.href.indexOf(clientsPage) != -1 ) {
				$('.workLink a').trigger('click');
			} else if( window.location.href.indexOf(contactPage) != -1 ) {
				$('.contactLink a').trigger('click');
			} else if( window.location.href.indexOf(careersPage) != -1 ) {
				$('.careersLink a').trigger('click');
			}
		}
		
		$(function() {
			
			$(document).on('click', '.view-page', function(e) {
			    e.preventDefault();
				
				var hamburger = $('.hamburger'),
				pageTitle = $(this).attr('title'),
				page_url = $(this).attr('href'),
					
				data = {
			        'action': 'load_page_by_ajax',
			        'id': $(this).data('id'),
			        'security': carsonproxy.security
			    };
				
				menu.fadeOut();
				hamburger.removeClass('is-active');
					
				document.title = pageTitle + " | " + base_title;
				ChangeUrl('', page_url);
					
				$.post(carsonproxy.ajaxurl, data, function(response) {
			        response = JSON.parse(response);
			        //$('.modal .pageTitle').text(pageTitle);
			        if ( response.content && response.headshot ) {
						$('.modal .modal-body').html(
							'<div class="row">' + 
								'<div class="col col-lg-6 col-md-6 col-sm-12 col-xs-12 portrait">' + 
									response.headshot + 
								'</div>' + 
								'<div class="col col-lg-6 col-md-6 col-sm-12 col-xs-12 row middle-lg middle-md">' + 
									'<div style="padding: 0 3em;">' +
										response.content + 
									'</div>' +
								'</div>' +
							'</div>'
						);
					} else if ( response.content ) {
						$('.modal .pageTitle').text(pageTitle);
						$('.modal .modal-body').html(
							'<div>' + 
								response.content + 
							'</div>'
						);
					}
			 
					modal.slideDown({
						start: function () {
						    modal.css({
						      display: "flex"
						    });
						}
					});
			    });
			});
			
			$('.workLink').on('click', function(e) {
				e.preventDefault();
				body.addClass('clients').removeClass('about contact careers');
			});
			
			$('.aboutLink').on('click', function(e) {
				e.preventDefault();
				body.addClass('about').removeClass('clients contact careers');
			});
			
			$('.contactLink').on('click', function(e) {
				e.preventDefault();
				body.addClass('contact').removeClass('clients about careers');
			});
			
			$('.careersLink').on('click', function(e) {
				e.preventDefault();
				body.addClass('careers').removeClass('clients about contact');
			});
			
			// CLOSE OVERLAYS ON BACK BUTTON CLICK
			if (window.history && window.history.pushState) {
		       $(window).on('popstate', function () {
			        modal.slideUp();
					//location.reload();
					document.title = base_title + " | " + base_description;
					reopenModalPages();
			   });
		    }
			
			$('.menuInner > ul:first-of-type li').find('a').map(function() {
				$(this).addClass('view-page');
			});
			
			window.onload = openModalPages();
		});
		
	});

} ( this, jQuery ));