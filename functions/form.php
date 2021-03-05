<?php 
add_filter('wpcf7_form_action_url', 'wpcf7_custom_form_action_url');
function wpcf7_custom_form_action_url()
{
    return '/?query=submission-success';
}