			<!-- footer -->
			<footer class="footer light" role="contentinfo">

				<div class="innerContainer">
					<!-- copyright -->
					<p class="copyright textAlignCenter">
						&copy; <?php echo esc_html( date( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?>. <?php echo __('All rights reserved.'); ?></a>
					</p>
					<!-- /copyright -->
				</div>

			</footer>
			<!-- /footer -->

		</div>
		<!-- /wrapper -->
		
		<?php get_template_part('templates/overlays');
		
		wp_footer(); ?>

	</body>
</html>
