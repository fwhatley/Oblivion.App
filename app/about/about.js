(function() {
    'use strict';

    angular.module('GamingRapApp')
        .controller('AboutCtrl', AboutCtrl);

    function AboutCtrl() {

        var vm = this;
        vm.about = 'About';
    }

})();
