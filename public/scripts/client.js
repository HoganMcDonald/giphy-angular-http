var myApp = angular.module('myApp', []);

myApp.controller('GiphyController', function(myService) {
  var vm = this;

  //hides button and shows response
  vm.showResponse = true;
  // vm.randomTag = '';
  // vm.gifUrl = [];
  console.log(myService.loadRandom());
  vm.startGif = myService.loadRandom();
  // vm.history = false;
  // vm.searchHistory = ['cats', 'dogs'];



  /*
    //random gif on page load
    vm.loadRandom = function() {
      var url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag';
      $http.get(url).then(function(response) {
        vm.startGif = response.data.data.image_url;
        console.log(vm.startGif);
      });
    };

    //gets random gif
    vm.randomGif = function() {
      var url = checkTags();
      $http.get(url).then(function(response) {
        vm.gifUrl.push(response.data.data.image_url);
        vm.showResponse = false;
      });
    };

    //search for gifs
    vm.searchGif = function() {
      var url = 'http://api.giphy.com/v1/gifs/search?q=' + vm.randomTag + '&api_key=dc6zaTOxFJmzC';
      $http.get(url).then(function(response) {
        console.log(response);
        for (var i = 0; i < response.data.data.length; i++) {
          vm.gifUrl.push(response.data.data[i].images.downsized.url);
          vm.showResponse = false;
        }
        vm.searchHistory.push(vm.randomTag);
        console.log(vm.gifUrl);
      });
    };

    //reveal search history
    vm.reveal = function() {
      vm.history = true;
    };

    //switch back to search page
    vm.reset = function() {
      vm.showResponse = true;
      vm.history = false;
      vm.gifUrl = [];
    };

    //add search tags
    function checkTags() {
      if (vm.randomTag) {
        return 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + vm.randomTag;
      } else {
        return 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag';
      }
    }
    */

});
