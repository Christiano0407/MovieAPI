// API Javascript>
// (A)> Cargar películas>>
const loadMovies = async () => {
  try {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/550?api_key=c66eb9e2b42b5d1d179fff7ac34ce71f&language=es-MX`
    );
    console.log(request);
    //> Comprobar => Estado
    if (request.status === 200) {
      //> Data
      const data = await request.json();
      console.log(data);
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
