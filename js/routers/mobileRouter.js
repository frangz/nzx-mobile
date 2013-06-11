// Mobile Router
// =============

// Includes file dependencies
define([ "jquery","backbone", "../views/LoginView" ], function( $, Backbone, LoginView ) {

    // Extends Backbone.Router
    var NzxRouter = Backbone.Router.extend( {

        // The Router constructor
        initialize: function() {

            // Instantiates a new Animal Category View
            this.loginView = new LoginView( { el: "#login" } );

            // Tells Backbone to start watching for hashchange events
            Backbone.history.start();

        },

        // Backbone.js Routes
        routes: {

            // When there is no hash bang on the url, the home method is called
            "": "login",

            // When #category? is on the url, the category method is called
            //"category?:type": "category"

        },

        // Home method
        login: function() {

            $.mobile.loading( "show" );
            //this.loginView.render();

        },

        // Category method that passes in the type that is appended to the url hash
      /*  category: function(type) {

            // Stores the current Category View  inside of the currentView variable
            var currentView = this[ type + "View" ];

            // If there are no collections in the current Category View
            if(!currentView.collection.length) {

                // Show's the jQuery Mobile loading icon
                $.mobile.loading( "show" );

                // Fetches the Collection of Category Models for the current Category View
                currentView.collection.fetch().done( function() {

                    // Programatically changes to the current categories page
                    $.mobile.changePage( "#" + type, { reverse: false, changeHash: false } );
    
                } );

            }

            // If there already collections in the current Category View
            else {

                // Programatically changes to the current categories page
                $.mobile.changePage( "#" + type, { reverse: false, changeHash: false } );

            }

        } */

    } );

    // Returns the Router class
    return NzxRouter;

} );
