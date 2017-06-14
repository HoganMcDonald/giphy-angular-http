var myApp = angular.module('myApp', []);

myApp.controller('GiphyController', function($http) {
  var vm = this;

  //hides button and shows response
  vm.showResponse = true;

  vm.gifUrl = '';
  //gets random gif
  vm.randomGif = function() {
    var url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag';
    $http.get(url).then(function(response) {
      vm.gifUrl = response.data.data.image_url;
      vm.showResponse = false;
    });
  };

  vm.reset = function() {
    vm.showResponse = true;
    vm.gifUrl = '';
  };

});
