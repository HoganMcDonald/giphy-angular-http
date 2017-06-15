var myApp = angular.module('myApp', []);

myApp.controller('MainController', function(GetGifs) {
  console.log('angular loadeddd');
  var vm = this;
  vm.searchField = '';
  vm.getRandom = function() {
    console.log(GetGifs.getRandom());
    GetGifs.getRandom().then(function() {
      vm.imageUrl = GetGifs.imageUrl;
    });
  };
});
