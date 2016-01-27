/* global jQuery */

(function( $, undefined ) {

    $(function() {

        main(); // Rock from main

    });

    function main() {

        var frm = $( '#sample' );

        frm.height( $( window ).height() - frm.offset().top - 10 );
        $( '.entry-list' ).height( $( window ).height() - $( '.entry-list' ).offset().top - 10 );

        $( '.entry-list li' ).click(function( evt ) {

            var li = $( this );
            var a = li.children( 'a' );

            evt.preventDefault();

            $( '.entry-list li' ).removeClass( 'active' );
            li.addClass( 'active' );

            frm.attr( 'src', a.attr( 'href' ) + ( $( '.entry-list' ).data( 'activate-id' ) || '' ) );

            // frm.attr( 'src', a.attr( 'href' ) + '#jqPlot-sample' );
        });

        $( '.siberToggle' ).click(function( evt ) {

            evt.preventDefault();

            $( '.entry-container' ).toggleClass( 'no-list' );
        });

        $( '.entry-list li' ).attr( 'tabindex', 1 ).focus(function() {

            $( this ).click();
        });

        $( '.entry-list-container' ).keydown(function( evt ) {

            var $nextTarget;

            if ( evt.which === 38 ) {

                // up
                $nextTarget = $( '.entry-list li.active' ).prev();

                if ( !$nextTarget.length ) {

                    $nextTarget = $( '.entry-list li.active' ).closest( 'ul' ).prevAll( 'ul:first' ).find( 'li:last' );
                }

            } else if ( evt.which === 40 ) {

                // down
                $nextTarget = $( '.entry-list li.active' ).next();

                if ( !$nextTarget.length ) {

                    $nextTarget = $( '.entry-list li.active' ).closest( 'ul' ).nextAll( 'ul:first' ).find( 'li:first' );
                }
            }

            $nextTarget && $nextTarget.length && $nextTarget.focus();
        });
    }

})( jQuery );
