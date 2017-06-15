myApp.service('GetGifs', function($http) {
  var gg = this;

  gg.getRandom = function() {
    console.log('getting random');
    var url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
    return $http.get(url).then(function(response) {
      console.log(response);
      gg.imageUrl = response.data.data.image_url;
    });
  }; //end get random
  gg.searchGifs = function(searchTerm) {
    console.log('searching gifs', searchTerm);
    var url = 'http://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&api_key=dc6zaTOxFJmzC';
    return $http.get(url).then(function(response) {
      console.log(response);
      gg.imageArray = response.data.data;
    });
  };

});
