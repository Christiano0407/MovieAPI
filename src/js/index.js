// API Javascript>
//> Pagination
let page = 1;
const btnBefore = document.getElementById(`btnBefore`);
const btnAfter = document.getElementById(`btnAfter`);

btnBefore.addEventListener(`click`, () => {});

btnAfter.addEventListener(`click`, () => {});

// (A)> Cargar películas>>
const loadMovies = async () => {
  try {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=c66eb9e2b42b5d1d179fff7ac34ce71f&language=es-MX`
    );
    console.log(request);
    //> Comprobar => Estado
    if (request.status === 200) {
      //> Data
      const data = await request.json();
      //>
      let movies = " ";
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
