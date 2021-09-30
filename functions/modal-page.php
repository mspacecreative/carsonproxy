<?php
function load_page_by_ajax_callback() {
    check_ajax_referer('view_page', 'security');
    $args = array(
        'post_type' => 'page',
        'post_status' => 'publish',
        'p' => $_POST['id'],
    );
 
    $posts = new WP_Query( $args );
 
    $arr_response = array();
    if ($posts->have_posts()) {
 
        while($posts->have_posts()) {
        
        	$posts->the_post();
            $modal_content = apply_filters( 'the_content', get_the_content() );
            $portrait = get_field('head_shot');
            $size = 'full';
            $image = wp_get_attachment_image( $portrait, $size );
            
        	$arr_response = array(
                'title' => get_the_title(),
                'content' => $modal_content,
                'headshot' => $image,
                //'left_column' => get_field('left_column'),
                //'right_column' => get_field('right_column'),
                //'call_to_action_left' => get_field('call_to_action_left'),
                //'call_to_action_right' => get_field('call_to_action_right'),
            );
        }
        wp_reset_postdata();
    }
 
    echo json_encode($arr_response);
 
    wp_die();
}

add_action('wp_ajax_load_page_by_ajax', 'load_page_by_ajax_callback');
add_action('wp_ajax_nopriv_load_page_by_ajax', 'load_page_by_ajax_callback');

add_filter( 'nav_menu_link_attributes', 'wpse_100726_extra_atts', 10, 3 );

function wpse_100726_extra_atts( $atts, $item, $args )
{
    $itemid = get_post_meta( $item->ID, '_menu_item_object_id', true );
    $atts['data-id'] = $itemid;
    return $atts;
}