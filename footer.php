			<!-- footer -->
			<footer class="footer light" role="contentinfo">

				<div class="innerContainer">
					<!-- copyright -->
					<p class="desktopOnly">Carson Proxy Advisors Ltd.<br />
					50 Carroll Street, Toronto, Ontario, M4M 3G3&nbsp;&nbsp;|&nbsp;&nbsp;<a href="tel:18885111228">1-888-511-1228</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="tel:14168040825">416-804-0825</a></p>
					<p class="mobileOnly">Carson Proxy Advisors Ltd.<br />
					50 Carroll Street, Toronto, Ontario, M4M 3G3<br />
					<a href="tel:18885111228">1-888-511-1228</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="tel:14168040825">416-804-0825</a></p>
					<p class="copyright">
						&copy; <?php echo esc_html( date( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?>. <?php echo __('All rights reserved.'); ?></a>
					</p>
					<!-- /copyright -->
				</div>

			</footer>
			<!-- /footer -->

		</div>
		<!-- /wrapper -->
		
		<?php get_template_part('templates/overlays');
		get_template_part('templates/modal');
		
		wp_footer(); ?>

	</body>
</html>
