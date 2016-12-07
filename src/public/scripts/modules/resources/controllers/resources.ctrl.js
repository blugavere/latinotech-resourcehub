
(function() {

'use strict';

/*jshint latedef: false */

angular.module('resources.module')
  .controller('ResourcesCtrl', Controller);

  Controller.$inject = ['$scope', '$filter', 'LSAService'];

  function Controller($scope, $filter, LSAService) {
    var vm = this;
    vm.options = {};
    vm.data = [];

    LSAService.communityResources().then(function(response){
        angular.forEach(response.data.feed.entry, function(resource){
          var temp = {
            category: resource.gsx$category.$t,
            shortdescription: resource.gsx$shortdescription.$t,
            organization: resource.gsx$organization.$t,
            keywords: resource.gsx$keywords.$t,
            rating: (resource.gsx$averagerating.$t) ? parseFloat(resource.gsx$averagerating.$t) : 'Unrated',
            
            id: resource.gsx$id.$t,

          };
          vm.data.push(temp);
        });      
    });
  }

})();
