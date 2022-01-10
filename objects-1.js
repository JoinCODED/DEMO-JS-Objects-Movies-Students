/**
 * TODO: TASK 1: Creating a movie
 *
 * Create variables the can represent couple of movies
 * Movie 1:
 * Movie Name: "The Pursuit of Happyness"
 * Movie Cast: "Will Smith", "Jaden Smith", "Thandiwe Newton"
 * Movie IMDB Rating: 8
 *
 * Movie 2:
 * Movie Name: "The greatest showman"
 * Movie Cast: "Hugh Jackman", "Zac Efron", "Zendaya"
 * Movie IMDB Rating: 7.6
 *
 */

// ### SOLUTION
// Movie 1
let movieName = "The Pursuit of Happyness";
let movieCast = ["Will Smith", "Jaden Smith", "Thandiwe Newton"];
let movieRating = 8.0;

// Movie 2
let movie2Name = "The greatest Show man";
let movie2Cast = ["Hugh Jackman", "Zac Efron", "Zendaya"];
let movie2Rating = 7.6;

/**
 * TODO: TASK 2: Making an object for movie
 * So you have seen that making 3 variables for one movie doesn't make sense
 * Making it an array, doesn't make sense either
 */

let movie1 = {
  title: "The Pursuit of Happyness",
  cast: ["Will Smith", "Jaden Smith", "Thandiwe Newton"],
  rating: 8.0,
};
console.log(harryPotterMovie.title);
console.log(harryPotterMovie.cast);
console.log(harryPotterMovie.rating);

// creating an object for movie 2

/**
 * TODO: Task 3: Create objects for students in class
 * take 3 students
 * - name
 * - age
 * - job
 */
const fatima = {
  name: "Fatima K",
  job: "RM",
  age: 31,
  favoriteMovie: "Harry Potter",
};

const bashayer = {
  name: "Bashayer B",
  job: "Officer",
  age: 29,
  favoriteMovie: "Remember Movie",
};

/**
 * TODO: Task 4: Put the students in an array
 * Console log it
 */

const students = [fatima, bashayer];
console.log(students);

/**
 * TODO: Task 5: make a complex version of the array
 * Include for example pets, or anything that has the heirarchy of (object -> array -> object -> array )
 */
const gbkSection = [
  {
    name: "Zainab",
    age: 25,
    pets: [
      {
        name: "smokey",
        type: "Parrot",
        age: 6,
      },
      {
        name: "Bobo",
        age: 1,
        type: "cat",
      },
    ],
  },
  {
    name: "Taher",
    age: 27,
    pets: [],
  },
  {
    name: "Fahad",
    age: 25,
    pets: [
      {
        name: "Shwaski",
        age: 1,
        type: "cat",
      },
    ],
  },
];
/**
 * TODO: Task 6: Filter (some is important, because it's there in the task)
 * Filter out who has cats for example
 * - Explain filter, find, some
 */
const peopleWhoOnlyHaveCats = gbkSection.filter((person) =>
  person.pets.some((pet) => pet.type == "cat")
);
const namesOfPeopleWhoHaveCats = peopleWhoOnlyHaveCats.map(
  (person) => person.name
);
console.log(namesOfPeopleWhoHaveCats);
