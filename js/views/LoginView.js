// Category View
// =============

// Includes file dependencies
define([ "jquery", "backbone" ], function( $, Backbone ) {

    // Extends Backbone.View
    var LoginView = Backbone.View.extend( {

        // The View Constructor
        initialize: function() {

            // The render method is called when Category Models are added to the Collection
            //this.collection.on( "added", this.render, this );
        },

        // Renders all of the Category models on the UI
        render: function() {

            // Maintains chainability
            return this;

        }

    } );

    // Returns the View class
    return LoginView;

} );
