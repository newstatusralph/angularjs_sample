(function(angular) {
    'use strict';
    angular.module('heroApp').component('sonComponent', {
        templateUrl: 'sonComponent.html',
        bindings: {
            data: "<",
            apply: "<"
        },
        controllerAs: 'vm', 
        controller: function($scope){
            var vm=this; 
            vm.$onInit=function(){
            }
        }
    });
})(window.angular);
