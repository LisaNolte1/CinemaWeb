const {
  cinemas
} = require('./modules/Cinemas/cinemas');
const {
  movies
} = require('./modules/movies/movies');
const {
  shows
} = require('./modules/shows/shows');
const {
  movieSeat
} = require('./modules/movieSeat/movieSeat');
const {
  cinemaMovieView
} = require('./modules/cinemaMovieView/cinemaMovieView');
const {
  booking
} = require('./modules/booking/booking');
const {
  extras
} = require('./modules/extras/extras');
const {
  bookingExtras
} = require('./modules/bookingExtras/bookingExtras');
const {
  seats
} = require('./modules/seats/seats');
const {
  tickets
} = require('./modules/tickets/tickets')

module.exports = {
  cinemas,
  movies,
  shows,
  movieSeat,
  cinemaMovieView,
  booking,
  extras,
  bookingExtras,
  seats,
  tickets
};