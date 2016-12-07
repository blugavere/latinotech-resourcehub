(function(){

  'use strict';

angular.module('index.module')
.controller('IndexCtrl', ctrl)

ctrl.$inject = ['$http'];

function ctrl($http) {
  var vm = this;
  vm.title = "hello LSA";
}

})();
