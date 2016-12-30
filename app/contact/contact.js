(function() {
    'use strict';

    angular.module('OblivionApp')
        .controller('ContactCtrl', ContactCtrl);

    function ContactCtrl() {
        var vm = this;
        vm.contact = 'Contact';
    }

})();
