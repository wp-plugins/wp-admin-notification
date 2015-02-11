jQuery(document).ready(function($){
	var dateFormat = 'yy-mm-dd';
	$('#wpan_term_start').datepicker({dateFormat: dateFormat});
	$('#wpan_term_end').datepicker({dateFormat: dateFormat});
	
	$('#wp_admin_notification_checked').on( 'click', function(){
		$.ajax({
          type: 'POST',
          url: ajaxurl,
          data: {
            'action'  : 'wpan_checked',
            'security': wpan_security,
            'data_id' : wpan_data_id
          },
          success: function( response ){
            $('#wp_admin_notification-'+wpan_data_id).fadeOut('slow');
          }
        });
		return false;
	});
});