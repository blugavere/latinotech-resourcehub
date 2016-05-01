(function() {

'use strict';
/*jshint latedef: false */
/**
 * @ngdoc function
 * @name benLugavereApp.controller:LibraryCtrl
 * @description
 * # LibraryCtrl
 * Controller of the benLugavereApp
 */

angular.module('resources.module')
  .controller('DetailsCtrl', Controller);

  Controller.$inject = ['$scope', '$filter', 'LSAService', '$state', '$stateParams'];

  function Controller($scope, $filter, LSAService, $state, $stateParams) {
    var vm = this;
    vm.reviews = [];
    vm.data = {};
    console.log($stateParams);

    LSAService.communityResourceDetails($stateParams.id).then(function(response){
      //console.log(response);
      var feed = response.data.feed.entry[0];
      console.log('details', feed);
      vm.data = {
        organization: feed.gsx$organization.$t,
        phone: feed.gsx$contactinformation.$t,

        address: feed.gsx$address.$t,
        eligibility: feed.gsx$eligibility.$t,
        notes: feed.gsx$notes.$t,
        
        cost: feed.gsx$cost.$t,
        pointperson: feed.gsx$pointperson.$t,
        services: feed.gsx$services.$t
        
      };
    });

    vm.averageRating = function(){
      if(vm.reviews.length == 0) { return; }
      var values = vm.reviews.map(function(r){
        return r.rating;
      });
      var sum = values.reduce(function(a, b) { 
        a = a || 0;
        b = b || 0;
        return parseInt(a) + parseInt(b); 
      });
      
      var avg = sum/values.length;

      return avg;
    }

    LSAService.communityResourceReviews($stateParams.id).then(function(response){
      console.log('reviews', response.data);
      var feed = response.data.feed.entry[0];
      
      angular.forEach(response.data.feed.entry, function(review){
      var temp = {
        id: review.gsx$id.$t,
        content: review.gsx$content.$t,
        rating: review.gsx$rating.$t
      };

        vm.reviews.push(temp);
      });

      vm.drawChart();
      console.log(vm.reviews);
    });

    vm.count = function(num){
      var count = 0;
      angular.forEach(vm.reviews, function(r){
        r = r.rating || 0;
        r = Math.floor(parseInt(r));
        if(r === num)
        {
          count++;
        }
      });

     return count; 
    }
 
    vm.drawChart = function() {

        var data = google.visualization.arrayToDataTable([
          ['Rating', 'Count'],
          ['Very Poor', vm.count(1)],
          ['Poor',     vm.count(2)],
          ['Fair',      vm.count(3)],
          ['Good',  vm.count(4)],
          ['Excellent', vm.count(5)]
        ]);

        var options = {
          title: 'Rating'
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);

      }
  }
  
})();
