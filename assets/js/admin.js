jQuery(function() {
	jQuery( '.mtral .block label.custom input[type="text"]' ).live( 'keypress keyup keydown focus blur', function(e){
		if( jQuery( this ).val() ){
			jQuery( this ).closest( 'label' ).closest( '.block' ).find( 'label select' ).prop( 'disabled', true ); 
		}else{
			jQuery( this ).closest( 'label' ).closest( '.block' ).find( 'label select' ).prop( 'disabled', false ); 
		}
	});
	jQuery( '.mtral .block label select' ).on( 'change click', function(e){
		let custom_link = jQuery(this).children("option:selected").attr('custom-link')
		let val = jQuery(this).children("option:selected").val()
		
		if( custom_link !== undefined ){
			jQuery( this ).closest( 'label' ).closest( '.block' ).find( 'label input[type="text"]' ).val( val );
		}else{
			jQuery( this ).closest( 'label' ).closest( '.block' ).find( 'label input[type="text"]' ).val( '' );
		}
	}).change();
});