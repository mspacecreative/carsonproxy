<?php 
$args = array(
	'post_type' => 'clients',
	'posts_per_page'=> -1,
);
	
$loop = new WP_Query( $args );
if ( $loop->have_posts() ) : ?>
	
	<div class="clientListContainer row middle-lg middle-md">
			
		<?php while ( $loop->have_posts() ) : $loop->the_post();
		$logo = get_field('branding');
		$size = 'medium';
		$stacked = get_field('stacked_logo');
		$logoimg = wp_get_attachment_image( $logo, $size );
		
		if ( $logo ) : ?>
		<div class="col col-lg-3 col-md-3 col-sm-6 col-xs-6">
			<?php if ( $stacked ): ?>
			<div data-aos="fade-up" class="<?php echo $stacked ?>">
				<?php echo $logoimg ?>
			</div>
			<?php else : ?>
			<div data-aos="fade-up" class="brandContainer">
				<?php echo $logoimg ?>
			</div>
			<?php endif; ?>
		</div>
		<?php endif; ?>
	
		<?php endwhile; ?>
	
	</div>

<?php endif; wp_reset_query(); ?>