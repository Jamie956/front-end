(function($) {

    $.fn.helloWorld = function() {
        this.each( function() {
            $(this).text("Hello, World!");
        });
    }
    
    $.fn.helloWorld2 = function(customText) {
        return this.each( function() {
            $(this).text(customText);
        });
    }
    
    $.fn.helloWorld3 = function( options ) {
        var settings = $.extend({
            text         : 'Hello, World!',
            color        : null,
            fontStyle    : null
        }, options);

		return this.each( function() {
		    $(this).text( settings.text );
		
		    if ( settings.color ) {
		        $(this).css( 'color', settings.color );
		    }
		
		    if ( settings.fontStyle ) {
		        $(this).css( 'font-style', settings.fontStyle );
		    }
		});   
    }
    
	$.fn.helloWorld4 = function( options ) {
		var settings = $.extend({
		    text         : 'Hello, World!',
		    color        : null,
		    fontStyle    : null,
		    complete     : null
		}, options);
		
		return this.each( function() {
		    $(this).text( settings.text );
		
		    if ( settings.color ) {
		        $(this).css( 'color', settings.color );
		    }
		
		    if ( settings.fontStyle ) {
		        $(this).css( 'font-style', settings.fontStyle );
		    }	
		    
		    if ( $.isFunction( settings.complete ) ) {
		        settings.complete.call( this );
		    }
		});		
	};
}(jQuery));