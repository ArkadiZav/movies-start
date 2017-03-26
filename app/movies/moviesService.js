app.factory('movies', [function() {
  var movies = [{
    id: 0,
    name: "inglorious basterds",
    year: 2009,
    supportedResolution: [720,1080],
    posterImage: "https://upload.wikimedia.org/wikipedia/en/c/c3/Inglourious_Basterds_poster.jpg",
    shortDescription: "The film tells the fictional alternate history story of two plots to assassinate Nazi Germany's political leadership.",
    isBlockbuster: true
  }, {
    id: 1,
    name: "braveheart",
    year: 1995,
    supportedResolution: [720,1080],
    posterImage: "https://upload.wikimedia.org/wikipedia/en/5/55/Braveheart_imp.jpg",
    shortDescription: "William Wallace, a 13th-century Scottish warrior who led the Scots in the First War of Scottish Independence against King Edward I of England.",
    isBlockbuster: true
  }, {
    id: 2,
    name: "when harry met sally",
    year: 1989,
    supportedResolution: [480, 720,1080],
    posterImage: "https://upload.wikimedia.org/wikipedia/en/1/1c/WhenHarryMetSallyPoster.jpg",
    shortDescription: "The story follows the title characters from the time they meet just before sharing a cross-country drive, through twelve years or so of chance encounters in New York City.",
    isBlockbuster: false
  }];

  var getMovies = function(){
    return movies;
  }

  var removeMovie = function (index) {
    movies.splice(index, 1);
  };

  return {
    getMovies: getMovies,
    removeMovie: removeMovie
  }
}]);
