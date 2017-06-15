myApp.service('myService', function($http) {
  var ms = this;
  //random gif on page load
  ms.loadRandom = function() {
    var url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag';
    $http.get(url).then(function(response) {
      var toReturn = response.data.data.image_url;
      console.log(toReturn);
      return ms.toReturn;
    });
  };


});
