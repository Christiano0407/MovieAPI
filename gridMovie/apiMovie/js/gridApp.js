console.group("Nav");
/* const toggleButton = document.getElementsByClassName(`toggle-buttton`)[0] */
/*  */
console.groupEnd();
console.group("API Documents");
// API Documentation
let pages = 1;
let movies = " ";
let endMovies;

// = Intersection Observer =
let observer = new IntersectionObserver(
  (entries, observer) => {
    console.log(entries);
    entries.forEach((entries) => {
      if (entries.isIntersecting) {
        pages++;
        addMovies();
      }
    });
  },
  {
    rootMargin: `0px 0px 200px 0px`,
    threshold: 1.0,
  }
);

// (A)> Cargar películas>>>>>>>>> =================================== >>>>>
//Async and Await
const addMovies = async () => {
  // Llamar y sincronizar>
  try {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=c66eb9e2b42b5d1d179fff7ac34ce71f&language=es-MX&page=${pages}`
    );

    // Status  conditional =>
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
      // Llamar a y agregar a HTML
      document.getElementById(`container`).innerHTML = movies;
      //> Lllega al máximo==>
      if (pages < 1000) {
        if (endMovies) {
          observer.unobserve(endMovies);
        }

        //> Comprobar todas las pelis, que van a aparecer (Observer) >
        const moviesInScreen = document.querySelectorAll(`.movie`);
        endMovies = moviesInScreen[moviesInScreen.length - 1];
        console.log(endMovies);

        observer.observe(endMovies);
      }
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

console.groupEnd();
