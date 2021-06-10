(function(angular) {
    'use strict';
    angular.module('heroApp', []).controller('MainCtrl', function MainCtrl($scope) {
        var scope=$scope; 
        var vm=this; 
	new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("foo");
            }, 3000); 
	}).then((v)=>{
            scope.$apply(()=>{
                vm.hero = {
                    name: 'Ralph',
                    age: 43
                };
            });
            console.log(v);
	});
    });
})(window.angular);
