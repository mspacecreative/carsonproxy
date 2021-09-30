<!-- MENU OVERLAY -->
<div class="menuOverlay">
	<div class="menuContainer">
		<div class="menuInner light">
			<?php 
			echo carson_nav();
			echo '<a href="' . home_url('careers') . '" data-id="133" class="view-page">' . __('Careers') . '</a>';
			include 'social-media-buttons.php';
			?>
		</div>
	</div>
</div>
		
<!-- REQUEST A CALL BACK FORM -->
<div class="formOverlay light reveal">
	<button class="closeModalButton"><span>&nbsp;</span>
		<span>&nbsp;</span></button>
	
	<div class="formOverlayContainer">
		<h3>Please fill out the form below and we&#8217;ll get back to you as soon as possible.</h3>
		<?php echo do_shortcode('[contact-form-7 id="5" title="Request a call back"]'); ?>
	</div>
</div>
<!-- / REQUEST A CALL BACK FORM -->
		
<!-- FORM SUBMISSION STATEMENT -->
<div class="submissionSuccessOverlay reveal">
	<button class="closeModalButton"><span>&nbsp;</span>
		<span>&nbsp;</span></button>
	
	<div class="submissionSuccessContainer">
		<p>Thank you for requesting a call back. It has been successfully received and we will be in touch soon.</p>
	</div>
</div>
<!-- FORM SUBMISSION STATEMENT -->

<!-- CLIENTS OVERLAY -->
<section class="clientsContainer">
	<button class="closeModalButton dark">
		<span>&nbsp;</span>
		<span>&nbsp;</span>
	</button>
	<div class="innerContainer clientsInner">
		<div>
			<h1 class="textAlignCenter pageTitle">Clients</h1>
			<?php include('partials/loop-clients.php'); ?>
		</div>
	</div>
</section>
<!-- CLIENTS OVERLAY -->