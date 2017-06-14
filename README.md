#To Do

[x] set up server and file structure
[x] git init
[x] review giphy api documentation
[x] set up html layout
[x] create controller(s)
~~[] create server routes???~~
[x] set up click and http
[x] display response from giphy
[] input field to add tags to random



## Giphy api

### Search

url for &http will include url of this:

`var searchURL = 'http://api.giphy.com/v1/gifs/search?q=' + searchItem + '&api_key=dc6zaTOxFJmzC';`

where searchItem is pulled from text input

### Random

url:

`http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag`  

optional - use tags like this

=american+psycho
