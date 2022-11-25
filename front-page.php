<?php
/* Template Name: Home */
get_header(); ?>
			
			<div class="row gutter_space_0 homeSplitContainer">
				
				<!-- LEFT COLUMN -->
				<div class="col col-lg-8 col-md-8 col-sm-12 col-xs-12 homeSplitLeft">
					
					<!-- BOTTOM LEFT TEXTURE
					<div class="bottomLeftTexture">
						<img src="<?php echo get_template_directory_uri(); ?>/assets/img/textures/bottom-left-texture.svg">
					</div>
					BOTTOM LEFT TEXTURE -->
					
					<!-- COL INNER -->
					<div class="colInner">
						
						<div class="row">
							
							<div class="col col-lg-7 col-md-7 col-sm-12 col-xs-12">
								<!-- DESCRIPTOR -->
								<h1 class="descriptor">We are a full-service shareholder communications and corporate governance consulting firm that works across all sectors in the Canadian market.</h1>
								<!-- / DESCRIPTOR -->
							</div>

							<div class="col col-lg-5 col-md-5 col-sm-12 col-xs-12">
								<!-- UNORDERED LIST -->
								<ul class="arrowRightList">
									<li>Investor intelligence</li>
									<li>Shareholder engagement</li>
									<li>Proxy solicitation</li>
									<li>Corporate governance consulting</li>
									<li>Information agent services</li>
									<li>Tender offers</li>
									<li>Debtholder Engagement</li>
									<li>Consent Solicitation</li>
								</ul>
								<!-- / UNORDERED LIST -->
							</div>
							
							<!-- ARROW DOWN -->
							<div class="col col-lg-12 col-md-12 col-sm-12 col-xs-12 arrowDownContainer">
								<div class="arrowDown">
									<a href="#rightColumn">
										<img src="<?php echo get_template_directory_uri(); ?>/assets/img/icons/arrow-down-purple.svg">
									</a>
								</div>
							</div>
							<!-- / ARROW DOWN -->
								
							<!--
							<div class="col col-lg-12 col-md-12 col-sm-12 col-xs-12">
							
								<h2 class="learnMore"><a href="#" class="bioToggle">Learn more</a></h2>
							</div>
							-->
							
						</div>
					
					</div>
					<!-- / COL INNER -->
					
				</div>
				<!-- / LEFT COLUMN -->
				
				<!-- RIGHT COLUMN -->
				<div id="rightColumn" class="col col-lg-4 col-md-4 col-sm-12 col-xs-12 homeSplitRight light">
					
					<!-- TEXTURES
					<div class="topLeftTexture">
						<img src="<?php echo get_template_directory_uri(); ?>/assets/img/textures/top-left-texture.png" width="300" height="auto">
					</div>
					
					<div class="bottomRightTexture">
						<img src="<?php echo get_template_directory_uri(); ?>/assets/img/textures/bottom-right-texture.png" width="300" height="auto">
					</div>
					-->
					
					<!-- COL INNER -->
					<div class="colInner">
					
						<div class="row">
							
							<div class="col col-lg-12 col-md-12 col-sm-12 col-xs-12">
								
								<!-- LOGO -->
								<div class="desktop-logo-container">
									<a href="<?php echo home_url(); ?>" style="display: block;">
										<?php include 'assets/img/logo-white.php'; ?>
									</a>
								</div>
								<!-- / LOGO -->

								<div class="menuInner light">
									<?php 
									echo carson_nav();
									include 'templates/social-media-buttons.php';
									echo '<a title="Careers" href="' . home_url('careers') . '" data-id="134" class="view-page careersLink">' . __('Careers') . '</a>';
									?>
								</div>
								
							</div>
							
							<!--
							<div class="col col-lg-12 col-md-12 col-sm-12 col-xs-12">
								GENERAL CONTACT INFO 
								<h2><a href="#" class="formToggle">Request a call back</a></h2>
								 / GENERAL CONTACT INFO 
							</div>
							-->
							
						</div>
						
					</div>
					<!-- / COL INNER -->
					
				</div>
				<!-- / RIGHT COLUMN -->
				
			</div>
			
		<?php get_footer(); ?>