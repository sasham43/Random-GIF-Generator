$(function(){
console.log("jquery loaded");
  $("#getRandomGIF").on('click', function(){
    var tags = $("#tags").val();
    if(tags){
      $.ajax({
        url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC' + '&tag=' + tags,
        type: 'GET'
      }).done(function(response){
        console.log(response);
        var gifObject = response;
        $(".randomGifContainer").append("<img src=\"" + gifObject.data.image_url + "\"/>");
      });
    } else {
      $.ajax({
        url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC',
        type: 'GET'
      }).done(function(response){
        console.log(response);
        var gifObject = response;
        $(".randomGifContainer").append("<img src=\"" + gifObject.data.image_url + "\"/>");
      });
    }
  });

  $("#getSearchGIF").on('click', function(){
    var searchText = $("#search").val();
    $.ajax({
      url: 'http://api.giphy.com/v1/gifs/search?q=' + searchText + '&api_key=dc6zaTOxFJmzC',
      type: 'GET'
    }).done(function(response){
      console.log(response);
      var searchGIFS = response.data;
      displaySearchGIFS(searchGIFS);
    });
  });

  $(".clear").on('click',function(){
    $(this).parent().html('<button class="clear">CLEAR</button>');
  })


  function displaySearchGIFS(list){
    for (var it = 0; it < list.length; it++){
      // console.log(list[it].source_post_url);
      $(".searchGifContainer").append("<img src=\"" + list[it].images.original.url + "\"/>");
    }
  }

})
