<?php 
/* Template Name: Clients */
get_header('light');
$heading = get_the_title(); ?>

<div class="contentWrapper">
	<section class="section">
		
		<div class="innerContainer">
		<?php if ( $heading ) {
			echo '<h1 class="textAlignCenter pageTitle">' . $heading . '</h1>';
		}
			get_template_part('templates/loops/loop-clients'); ?>
		</div>
		
	</section>
</div>
	
<?php get_footer();