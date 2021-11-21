console.group("AXIOS API");
//> API With Axios
// API Key ==> c66eb9e2b42b5d1d179fff7ac34ce71f
// Request API ==>  https://api.themoviedb.org/3/movie/550?api_key=c66eb9e2b42b5d1d179fff7ac34ce71f
let movies = ` `;

// (A) > Request / petición

const getAllMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      {
        params: {
          //api_key: `c66eb9e2b42b5d1d179fff7ac34ce71f`, //> Token <
          language: `es-MX`,
        },
        headers: {
          // Token:
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjZlYjllMmI0MmI1ZDFkMTc5ZmZmN2FjMzRjZTcxZiIsInN1YiI6IjYxODZlNGYyYTMxM2I4MDA4ZjQ1Y2NkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._SyV7z_TCNXZRmYDiihDspxJTkXT8LFU5MueX4MHDsg`,
        },
      }
    );

    console.log(response);

    //>
    if (response.status === 200) {
      response.data.results.forEach((movie) => {
        movies += ` <div>
            <img class="poster" src= "https://image.tmdb.org/t/p/w500/${movie.poster_path}">
            <h3 class="title">${movie.title}</h3>
            </div> `;
      });
    }

    document.getElementById(`container`).innerHTML = movies;
  } catch (error) {
    console.log(error);
  }
};

getAllMovies();

// (B) >
//> Intersection Observer <
let observer = new IntersectionObserver((entries, observer) => {}, {
  rootMargin: `0px 0px 200px 0px`,
  threshold: 1.0,
});

console.groupEnd();
