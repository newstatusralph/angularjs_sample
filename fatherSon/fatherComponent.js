(function(angular) {
    'use strict';
    angular.module('heroApp').component('fatherComponent', {
        templateUrl: 'fatherComponent.html',
        bindings: {
        },
        controllerAs: 'vm', 
        controller: function($scope){
            var vm=this; 
            vm.$onInit=function(){
                vm.sonApply=function(d){
                    console.log('sonApply('+d+')');
                }
                vm.sonData=[1, 2, 3]; 
            }
        }
    });
})(window.angular);
