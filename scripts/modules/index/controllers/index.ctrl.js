(function(){

  'use strict';

angular.module('index.module')
.controller('IndexCtrl', ctrl)

ctrl.$inject = ['$http'];

function ctrl($http){
  var vm = this;
  vm.title = "hello LSA";





/*
  $http.jsonp('https://spreadsheets.google.com/feeds/worksheets/' + key + '/private/full/values?alt=json-in-script&callback=').then(function(res){
    console.log(res);
  });
https://docs.google.com/spreadsheets/d/1D9b1ywfmKX2pqyQjtJZQfOq64mYRs1KTgt5TO1WyXL0/pubhtml*/

}


})();
