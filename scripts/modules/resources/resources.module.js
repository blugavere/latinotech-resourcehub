(function(){

  'use strict';

  angular.module('resources.module',
  [
    'lsa.service'
  ])
  .config(function($stateProvider) {
    $stateProvider
      .state('resources', {
        url: '/resources',
        controller:'ResourcesCtrl',
        templateUrl: '/scripts/modules/resources/views/index.html',
        controllerAs: 'vm'
      })
      .state('details', {
        url: '/details/:id',
        controller:'DetailsCtrl',
        templateUrl: '/scripts/modules/resources/views/details.html',
        controllerAs: 'vm'
      })



      ;
  });

})();
