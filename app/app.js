(function() {
    'use strict';

    var app = angular
        .module('GamingRapApp', 
            [
                'ngResource',
                'ngSanitize',
                'ui.router',
                'infinite-scroll'
            ]);

    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");
        $stateProvider

        .state('home', {
          url: '^/home',
          templateUrl: 'app/home/home.html',
          controller:'HomeCtrl as vm',
          title : 'Home',
        })
        .state('about', {
          url: '^/about',
          templateUrl: 'app/about/about.html',
          controller:'AboutCtrl as vm',
          title : 'About',
        })        
        .state('contact', {
          url: '^/contact',
          templateUrl: 'app/contact/contact.html',
          controller:'ContactCtrl as vm',
          title : 'Contact',
        })
    
    });
    
    

}());
