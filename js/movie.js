$.noConflict();
(function($) {
  
$(document).ready(function(){
    $('#movie-form').on('submit', function(e) { 
        e.preventDefault(); 
        var poster = $('#movie').val();
        var url = 'https://www.omdbapi.com/?t=' + poster + '&r=json' + '&plot=full';
        $.get(url).done(
          function(data,json) {
            var movie = data.Poster;
            if(movie != null) {
              $('#ERROR').empty();
              $('#Rating').text('Rated: ' + data.Rated);
              $('#Release').text('Release: ' + data.Released);
              $('#Runtime').text('Runtime: ' + data.Runtime);
              $('#poster').html('<a href="http://www.imdb.com/find?ref_=nv_sr_fn&q='+poster+'&s=all"><img id="thePoster" src=' + movie + ' alt = "Poster Not Found" /></a>');
              $('#Plot').text('Plot: ' + data.Plot);
              $('#Metascore').text('MetaScore: ' + data.Metascore);
              $('#imdb').html('<a href="http://www.imdb.com/title/' + data.imdbID + '/">IMDBRating: ' + data.imdbRating + '</a>') 
            }
            else {
              $('#ERROR').text('Error: ' + data.Error);
              $('#Rating').empty();
              $('#Release').empty();
              $('#Runtime').empty();
              $('#Plot').empty();
              $('#Metascore').empty();
              $('#imdb').empty();
              $('#poster').html('<img id="thePoster" src="https://vignette2.wikia.nocookie.net/assassinscreed/images/3/39/Not-found.jpg/revision/latest?cb=20110517171552" alt = "No Photo found" />');
            }
          })
          
    });
});
   
})(jQuery);