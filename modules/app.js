angular.module('app',[])
.controller('index', ctrl)

ctrl.$inject = ['$http'];

function ctrl($http){
  var vm = this;
  vm.title = "hello ajs";

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



/*
  $http.jsonp('https://spreadsheets.google.com/feeds/worksheets/' + key + '/private/full/values?alt=json-in-script&callback=').then(function(res){
    console.log(res);
  });
https://docs.google.com/spreadsheets/d/1D9b1ywfmKX2pqyQjtJZQfOq64mYRs1KTgt5TO1WyXL0/pubhtml*/

}
