/**
 * AngularJS LSA API SDK
 * @version v0
 * @author Ben Lugavere <ben@Lugavere.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
 /*jshint latedef: false */
(function () {
 'use strict';

 /**
 * @ngdoc module
 * @name connector for the behance api.
 * @description
 *
 */

angular.module('lsa.service', [])
  .constant('WORKSHEET_KEY', 'FPPjPLS6sD6RL7XqmGyaaKJ1fgbhRnDh')
  .service('LSAService', service);

service.$inject = ['$http', 'WORKSHEET_KEY'];

function service($http, TOKEN) {
  var service = this;
  var _token = TOKEN;
  this.root = 'http://api.behance.net/v2/';
  this.suffix = '/?client_id=' + _token + '&callback=JSON_CALLBACK';

  this.token = function token(token) {
      if (arguments.length === 0) {
          return _token;
       }
      _token = token;
  };
  var key = '1D9b1ywfmKX2pqyQjtJZQfOq64mYRs1KTgt5TO1WyXL0';

  /*
    $http.jsonp('https://spreadsheets.google.com/feeds/list/' + key + '/od6/public/values?alt=json-in-script&callback=JSON_CALLBACK').then(function(res){
      console.log(res);
    });
  */

    $http.jsonp('https://spreadsheets.google.com/feeds/list/' + key + '/2/public/values?alt=json-in-script&callback=JSON_CALLBACK').then(function(res){
      console.log('Worksheet 3: Community Resources', res.data.feed);
      console.log('Data', res.data.feed.entry);
    });

      $http.jsonp('https://spreadsheets.google.com/feeds/worksheets/1D9b1ywfmKX2pqyQjtJZQfOq64mYRs1KTgt5TO1WyXL0/private/full').then(function(res){
        console.log('Schema', res.data.feed);
      });



}

}());
