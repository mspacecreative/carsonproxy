<?php if ( have_rows('channels', 'options') ) {
	echo '
	<p style="font-weight: 700; margin-bottom: 10px;">Follow us on</p>
	<ul class="socialButtons" style="margin-bottom: 2em;">';
	while ( have_rows('channels', 'options') ) {
		the_row();
		$link = get_sub_field('link', 'options');
		$icon = get_sub_field('icon', 'options');
							
	echo '
			<li><a class="social" href="' . $link . '" target="_blank"><i class="fa ' . $icon . '"></i></a></li>';
	}
	echo '
	</ul>';
}
else {
	echo '<p>Social Media Buttons will appear here when they are registered and activated!</p>';
}