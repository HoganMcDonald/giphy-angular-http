var myApp = angular.module('myApp', []);

myApp.controller('MainController', function(GetGifs) {
  var vm = this;
  vm.searchField = '';
  vm.imageArray = [];

  //get random image
  vm.getRandom = function() {
    GetGifs.getRandom().then(function() {
      vm.imageArray = [];
      vm.imageArray.push(GetGifs.imageUrl);
    });
  }; //end get random image function

  //search gifs
  vm.searchGifs = function() {
    console.log('in search');
    GetGifs.searchGifs(vm.searchField).then(function() {
      vm.imageArray = [];
      for (var i = 0; i < GetGifs.imageArray.length; i++) {
        console.log(GetGifs.imageArray);
        vm.imageArray.push(GetGifs.imageArray[i].images.downsized_large.url);
      }
    });
  }; //end search gifs

});
