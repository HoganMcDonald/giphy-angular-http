myApp.service('GetGifs', function($http) {
  var gg = this;

  this.getRandom = function() {
    console.log('getting random');
    var url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
    return $http.get(url).then(function(response) {
      console.log(response);
      gg.imageUrl = response.data.data.image_url;
    });
  }; //end get random


});
