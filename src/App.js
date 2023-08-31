import './App.css';
import SearchBar from './Components/search-bar/search-bar'
import Header from './Components/header/header'
import MoviePlate from './Components/movie-plate/movie-plate';
import Recomendation from './Components/recomendation/recomendation';
import { API_BASE_URL, getApiOptions } from "./services/api";
import { useState } from 'react';


function App() {

  const [movieDetails, setMovieDetais] = useState(null);
  const [recomendation, setRecomendations] = useState(null);


  const handleChange = (movieId) => {

    const movieDetails = fetch(`${API_BASE_URL}movie/${movieId}?language=en-US`, getApiOptions)
    const movieRecomendations = fetch(`${API_BASE_URL}movie/${movieId}/recommendations?language=en-US&page=1`, getApiOptions)
  
    Promise.all([movieDetails, movieRecomendations])
    .then(async (response) => {
    const detailsResponce = await response[0].json();
    const recomendationResponce = await response[1].json();
  
    setMovieDetais(detailsResponce);
    setRecomendations(recomendationResponce);
    })
    .catch((err) => console.log(err));
  }

  return (
    <div>
      <Header />
      <div className="container">
        <SearchBar onSearchChange={handleChange}/>
        {movieDetails && <MoviePlate data={movieDetails}/>}
        {recomendation && <Recomendation data={recomendation} onClickUpdate={handleChange}/>}
      </div>
    </div>
  );
}

export default App;
