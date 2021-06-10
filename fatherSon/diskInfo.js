(function(angular) {
    'use strict';
    angular.module('heroApp').component('diskInfo', {
        templateUrl: 'diskInfo.html',
        bindings: {
            diskInfo: '='
        },
        controllerAs: 'vm'
    });
})(window.angular);
