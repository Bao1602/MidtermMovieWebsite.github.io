let data = []
const trendingMovieContainer = document.getElementById("TRENDING")
const popularMovieContainer = document.getElementById("Top_rated")
const UpcomingMovieContainer = document.getElementById("Upcoming")

async function getMovie() {
    const movieData = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=87a5d77dbd572926d38e95e54d2d748d")
    const movieDatawithJson = await movieData.json();
    data = movieDatawithJson.results
    generateCardDataUI();
}

function createTrendingPoster(movie){

    const cardUI = `<div class="card" style="width: 18rem; display: inline-block;">
    <img class="card-img-top" src=${"https://image.tmdb.org/t/p/w500" + movie["poster_path"]}"} alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${movie.original_title}</h5>   
      <p class="card-text">${movie.release_date}</p>
      <p class="text">${movie.overview}</p>
      <p class="card-text">${movie.genre_ids}</p>
      <a href="#" class="btn btn-primary">Buy Ticket</a>
    </div>
  </div>`

    trendingMovieContainer.innerHTML += cardUI;
    popularMovieContainer.innerHTML += cardUI;
    UpcomingMovieContainer.innerHTML += cardUI;
}



function generateCardDataUI(){
    for(let movie of data){
        createTrendingPoster(movie);
    }
}

getMovie();

