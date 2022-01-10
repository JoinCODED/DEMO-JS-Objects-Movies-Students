/** JSON
 * In this task, you are just going to do the same thing, but with using json
 * Use one of the following
 * - movies.json
 * - moviesDetails.json
 */
const movies = require("./movies.json");
// const movies = require("./moviesDetails.json");

/** TODO: Tasks:
 * 1. print the first 10 movies
 * 2. get an array of the top 10 ranked movies (rank < 10) and their titles include the word "the" (lower case it when you compare)
 *
 *
 */
console.log(
  movies.filter(
    (movie) => movie.rank <= 10 && movie.title.toLowerCase().includes("the")
  )
);
console.log(movies);
