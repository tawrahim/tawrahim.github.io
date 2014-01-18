/**
 * This is a collection of functions
 * used in the project
 * @author: Tawheed Abdul-Raheem
 * @class: MainUtility 
 * */

var App = App || {};

(function() {
    'use strict';

    App.MainUtility = {

        // Initialize all functions that needs
        // to be invoked on page load
        init: function() {
            this.currentDate();
        },

        // Append current date to DOM
        currentDate: function() {
            $('#mainDate').append(new Date());
        }
    };
    return App.MainUtility;
}());

// Invoke the init function
$(function () {
    'use strict';
    App.MainUtility.init();
});
