<?php

// LOOP CLIENTS
function loopClients() {
	ob_start();
		get_template_part('templates/loops/loop-clients');
	return ob_get_clean();
}
add_shortcode( 'loop_clients', 'loopClients' );