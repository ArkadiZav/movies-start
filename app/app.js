var app = angular.module('movieLibrary', []);

app.directive("movieDirective", function() {
  return {
    templateUrl: 'app/movies/movie.html',
    scope: {
      movie: '=myMovies',
      delete: '&'
    },
    link: function(scope, elem, attrs) {
      scope.clickingFunc = function() {
        //  alert('clicked!')
        console.log("clicked!");
        console.log(elem[0]);
        //console.log(attrs);
        // console.log("i is: " + i);
        scope.delete();
      };
      // NOTE: This type of binding is not an angular one.
      // all of these "onclick" and "bind"
      // elem.bind('click', scope.clickingFunc);
      //   elem[0].innerHTML = "Just write this!";
      // }
    }
  }
});

// app.component('movieComponent', {
//   templateUrl: 'app/movies/movie.html',
//   controller: 'movieCtrl',
//   bindings: {
//     movie: '=myMovies'
//   }
// });
