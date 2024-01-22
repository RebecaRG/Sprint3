// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(film => film.director);
  
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(film => film.director === director);

  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let fromDirector = array.filter(film => film.director === director);
  let sumScore = fromDirector.reduce((total, film) => total + film.score, 0);
  let result = (sumScore/fromDirector.length).toFixed(2);
  
  console.log("EXERCICE 3 ->", result);
  return Number(result);
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array.map(film => film.title)
        .sort((a, b) =>  a > b ? 1 : a < b ? -1 : 0)
        .filter((film, index) => index < 20); 
  
    console.log("EXERCICE 4 ->",result);
    return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  let result = array.sort((a, b) => {
    if(a.year != b.year){
      return a.year - b.year;
    } else {
      return  a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
    }
  })
  .map(object => ({ title: object.title, year: object.year }));

  return result;

    console.log("EXERCICE 5 ->",result, "titleYear ->",titleYear);
    return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let arrayGenre = array.filter(film => film.genre.includes(genre));
  console.log(arrayGenre);
  let sumScore = arrayGenre.reduce((total, film) => total + film.score, 0);
  let result = (sumScore/arrayGenre.length).toFixed(2);
  console.log(result);
  return Number(result);
  }

//NIVEL2
// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

//NIVEL3
// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
