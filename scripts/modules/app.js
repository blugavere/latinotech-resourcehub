(function(){
  'use strict';

  angular.module('app',[
    'angular.filter',
    'ui.router',
    'index.module',
    'resources.module'
])
.config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        controller:'IndexCtrl',
        templateUrl: '/scripts/modules/index/views/index.html',
        controllerAs: 'vm'
      });
      $urlRouterProvider.otherwise('/');
  })
.controller('HeaderController', headerCtrl);

headerCtrl.$inject = ['$scope', '$location'];

function headerCtrl($scope, $location) {
        $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}

})();
