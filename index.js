// let str = "Omar";
// let num = 451.14 + 6;
// let con = 5 > 1;
// let arr = [1, 5, 5.2, "Omar"];

// let movieName = "Harry Potter";
// let movieCast = ["Dan.R", "Emma", "ian"];
// let movieRating = 7.3;

// let movie2Name = "The greatest Show man";
// let movie2Cast = ["Hughjackman", "Mrs.Jackman", "Zack Afron"];
// let movie2Rating = 9.9;

// let harryPotterMovie = {
//   title: "Harry Potter and the phillosiphy stone",
//   cast: ["Hugejackman", "Mrs.Jackman", "Zack Afron"],
//   rating: 9.9,
// };
// console.log(harryPotterMovie.title);
// console.log(harryPotterMovie.cast);
// console.log(harryPotterMovie.rating);

// const fatima = {
//   name: "Fatima K",
//   job: "RM",
//   age: 31,
//   favoriteMovie: "Harry Potter",
// };

// const bashayer = {
//   name: "Bashayer B",
//   job: "Officer",
//   age: 29,
//   favoriteMovie: "Remember Movie",
// };

// const students = [fatima, bashayer];
// console.log(fatima, bashayer);

const movies = require("./movies.json");

// console.log(
//   movies.filter(
//     (movie) => movie.rank <= 10 && movie.title.toLowerCase().includes("omar")
//   )
// );
// console.log(movies);

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

const peopleWhoOnlyHaveCats = gbkSection.filter((person) =>
  person.pets.some((pet) => pet.type == "cat")
);
const namesOfPeopleWhoHaveCats = peopleWhoOnlyHaveCats.map(
  (person) => person.name
);
console.log(namesOfPeopleWhoHaveCats);
