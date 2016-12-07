$.noConflict();
(function($) {
  
  $(document).ready(function(){
    var poster;
    var url;
    $('#movie-form').on('submit', function(e) { 
      e.preventDefault(); 
      poster = $('#movie').val();
      url = 'https://www.omdbapi.com/?t=' + poster + '&r=json' + '&plot=full';
      $.get(url).done(
          function(data) {
            var movie = data.Poster;
            if(movie !== null) {
              $('#error').empty();
              $('#rating').text('Rated: ' + data.Rated);
              $('#release').text('Release: ' + data.Released);
              $('#runtime').text('Runtime: ' + data.Runtime);
              $('#poster').html('<a href="http://www.imdb.com/find?ref_=nv_sr_fn&q='+poster+'&s=all"><img id="thePoster" src=' + movie + ' alt = "Poster Not Found" /></a>');
              $('#plot').text('Plot: ' + data.Plot);
              $('#metascore').text('MetaScore: ' + data.Metascore);
              $('#imdb').html('<a href="http://www.imdb.com/title/' + data.imdbID + '/">IMDBRating: ' + data.imdbRating + '</a>');
            }
            else {
              $('#error').text('Error: ' + data.Error);
              $('#rating').empty();
              $('#release').empty();
              $('#runtime').empty();
              $('#plot').empty();
              $('#metascore').empty();
              $('#imdb').empty();
              $('#poster').html('<img id="thePoster" src="https://vignette2.wikia.nocookie.net/assassinscreed/images/3/39/Not-found.jpg/revision/latest?cb=20110517171552" alt = "No Photo found" />');
            }
          });
          
    });
  });
   
})(jQuery);