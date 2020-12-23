			<!-- footer -->
			<footer class="footer light" role="contentinfo">

				<div class="innerContainer">
					<!-- copyright -->
					<p class="copyright textAlignCenter">
						&copy; <?php echo esc_html( date( 'Y' ) ); ?> Copyright <?php bloginfo( 'name' ); ?>. <?php echo __('All rights reserved.'); ?></a>
					</p>
					<!-- /copyright -->
				</div>

			</footer>
			<!-- /footer -->

		</div>
		<!-- /wrapper -->
		
		<?php get_template_part('templates/overlays');
		
		wp_footer(); ?>

		<!-- analytics -->
		<script>
		(function(f,i,r,e,s,h,l){i['GoogleAnalyticsObject']=s;f[s]=f[s]||function(){
		(f[s].q=f[s].q||[]).push(arguments)},f[s].l=1*new Date();h=i.createElement(r),
		l=i.getElementsByTagName(r)[0];h.async=1;h.src=e;l.parentNode.insertBefore(h,l)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-XXXXXXXX-XX', 'yourdomain.com');
		ga('send', 'pageview');
		</script>

	</body>
</html>
