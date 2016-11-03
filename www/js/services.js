angular.module('movionic.services', [])

.factory('Movies', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var movies = [
  	{id: 1, name: 'Avengers: Age of Ultron', 	year: 2015, 	mpaa: 'PG-13', 	runningTime: 141, 	releaseDate: '13 Apr 2015', 	rating: 7.9, 	director: 'Joss Whedon', 	star1: 'Robert Downey Jr.', 	star2: 'Chris Evans', 	star3: 'Mark Ruffalo', 	storyline: 'When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it\'s up to Earth\'s Mightiest Heroes to stop the villainous Ultron from enacting his terrible plans.', 	tagline: 'A new age begins', 	mtime: 'http://movie.mtime.com/173060/', 	douban: 'http://movie.douban.com/subject/10741834/'},
    {id: 2, name: 'Fast & Furious 7', 	year: 2015, 	mpaa: 'PG-13', 	runningTime: 137, 	releaseDate: '16 Mar 2015', 	rating: 7.6, 	director: 'James Wan', 	star1: 'Vin Diesel', 	star2: 'Paul Walker', 	star3: 'Dwayne Johnson', 	storyline: 'Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.', 	tagline: 'Vengeance hits home', 	mtime: 'http://movie.mtime.com/196613/', 	douban: 'http://movie.douban.com/subject/23761370/'},
    {id: 3, name: 'Jurassic World', 	year: 2015, 	mpaa: 'PG-13', 	runningTime: 124, 	releaseDate: '12 Jun 2015', 	rating: 7.3, 	director: 'Colin Trevorrow', 	star1: 'Chris Pratt', 	star2: 'Bryce Dallas Howard', 	star3: 'Vincent D\'Onofrio', 	storyline: 'A new theme park is built on the original site of Jurassic Park. Everything is going well until the park\'s newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.', 	tagline: 'The park is open', 	mtime: 'http://movie.mtime.com/191813/', 	douban: 'http://movie.douban.com/subject/10440138/'}
  ];

  return {
    all: function() {
      return movies;
    },
    get: function(movieId) {
      for (var i = 0; i < movies.length; i++) {
        if (movies[i].id === parseInt(movieId)) {
          return movies[i];
        }
      }
      return null;
    }
  };
});