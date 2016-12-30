(function() {
    'use strict';

    angular.module('OblivionApp')
        .controller('AboutCtrl', AboutCtrl);

    function AboutCtrl() {

        var vm = this;
        vm.about = 'About';
    }

})();
