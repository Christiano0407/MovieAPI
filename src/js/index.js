// API Javascript>
//> Pagination
let pages = 1;
let movies = " ";
let endMovie;
// << Intersection Observer / Scroll Infinito >>>
let observer = new IntersectionObserver(
  (entries, observer) => {
    console.log(entries);
    entries.forEach((entries) => {
      if (entries.isIntersecting) {
        pages++;
        loadMovies();
      }
    });
  },
  {
    rootMargin: `0px 0px 200px 0px`,
    threshold: 1.0,
  }
);
// ==================================================================
//const btnBefore = document.getElementById(`btnBefore`);
//const btnAfter = document.getElementById(`btnAfter`);

/* btnBefore.addEventListener(`click`, () => { */
/*   if (pages > 1) { */
/*     pages -= 1; */
/*     loadMovies(); */
/*   } */
/* }); */

/* btnAfter.addEventListener(`click`, () => { */
/*   if (pages < 1000) { */
/*     pages += 1; */
/*     loadMovies(); */
/*   } */
/* }); */

// (A)> Cargar películas>>>>>>>>> =================================== >>>>>
const loadMovies = async () => {
  try {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=c66eb9e2b42b5d1d179fff7ac34ce71f&language=es-MX&page=${pages}`
    );
    //console.log(request);
    //> Comprobar => Estado
    if (request.status === 200) {
      //> Data
      const data = await request.json();
      //> arriba =>
      //let movies = " ";
      //>
      data.results.forEach((movie) => {
        movies += ` 
         <div class="movie">
          <img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
          <h2 class="title">${movie.title}</h2>;
         </div>
         `;
      });

      document.getElementById(`container`).innerHTML = movies;
      //> Lllega al máximo==>
      if (pages < 1000) {
        if (endMovie) {
          observer.unobserve(endMovie);
        }

        //> Comprobar todas las pelis, que van a aparecer (Observer) >
        const moviesInScreen = document.querySelectorAll(`.movie`);
        //console.log(moviesInScreen);
        //let endMovie = moviesInScreen[moviesInScreen.length - 1];
        endMovie = moviesInScreen[moviesInScreen.length - 1];
        console.log(endMovie);
        //> Observer
        observer.observe(endMovie);
      }

      //console.log(data.title); // properties>
    } else if (request.status === 401) {
      console.log("Key is wrong");
    } else if (request.status === 404) {
      console.log("Status not exist");
    } else {
      console.log("Error");
    }
  } catch (error) {
    console.log(error);
  }
};

loadMovies();
