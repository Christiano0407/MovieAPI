console.group("API Documents");
// API Documentation
let pages = 1;
let movies = " ";
let endMovies;

// = Intersection Observer =

// (A)> Cargar películas>>>>>>>>> =================================== >>>>>
const addMovies = async () => {
  try {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=c66eb9e2b42b5d1d179fff7ac34ce71f&language=es-MX&page=${pages}`
    );

    if (request.status === 200) {
      const data = await request.json();

      data.results.forEach((movie) => {
        movies += `
        <div class= "movie">
        <img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" >
        <h2 class= "title">${movie.title}</h2>
        </div>
        `;
      });

      document.getElementById(`container`).innerHTML = movies;
    } else if (request.status === 401) {
      console.log("Key is Wrong");
    } else if (request.status === 404) {
      console.log("Status not exist");
    } else {
      console.log("Error");
    }
  } catch (error) {
    console.log(error);
  }
};
addMovies();
