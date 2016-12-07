
 /*jshint latedef: false */

(function () {
 'use strict';

angular.module('lsa.service', [])
  .service('LSAService', service);

service.$inject = ['$http'];

function service($http) {
  var service = this;

  var key = 'INSERT KEY HERE';

  this.communityResources = function(){
    return $http.jsonp('https://spreadsheets.google.com/feeds/list/' + key + '/od6/public/values?alt=json-in-script&callback=JSON_CALLBACK');
  }

  this.communityResourceDetails = function(id){
    return $http.jsonp('https://spreadsheets.google.com/feeds/list/' + key + '/od6/public/values?sq=id=' + id + '&alt=json-in-script&callback=JSON_CALLBACK');  
  }

  this.communityResourceReviews = function(id){
    return $http.jsonp('https://spreadsheets.google.com/feeds/list/' + key + '/ofsas4n/public/values?sq=communityresourceid=' + id + '&alt=json-in-script&callback=JSON_CALLBACK');  
  }

}

}());
