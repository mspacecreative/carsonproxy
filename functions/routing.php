<?php 
add_action( 'template_redirect', 'redirect_page' );

function redirect_page() {
	$page_id = get_queried_object_id();
	$redirectURL = '/?query=' . $page_id;
	if ( is_page('clients') ) {
  		wp_redirect( $redirectURL, 301 );
    	exit;
	} elseif ( is_page('about') ) {
  		wp_redirect( $redirectURL, 301 );
    	exit;
	} elseif ( is_page('contact') ) {
		wp_redirect( $redirectURL, 301 );
    	exit;
	} elseif ( is_page('careers') ) {
		wp_redirect( $redirectURL, 301 );
    	exit;
	}
}