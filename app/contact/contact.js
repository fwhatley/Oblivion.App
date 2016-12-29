(function() {
    'use strict';

    angular.module('GamingRapApp')
        .controller('ContactCtrl', ContactCtrl);

    function ContactCtrl() {
        var vm = this;
        vm.contact = 'Contact';
    }

})();
