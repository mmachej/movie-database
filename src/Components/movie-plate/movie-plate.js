import './movie-plate.css'

const MovieDetails = ({data}) => {

    return (
        <div className="movie-plate">
            <img alt="movie-poster" className="movie-poster" src={data.poster_path? `https://image.tmdb.org/t/p/w500${data.poster_path}` : `poster_plh.png`}/>
            <div className='movie-data'>
                <h1 className="movie-title">{data.title}<span className='movie-year'>{`(${data.release_date.slice(0, 4)})`}</span></h1>
                <p className='movie_genres'>{`Genres: ${data.genres.map((genre) => " " + genre.name)}`}</p>
                <p className="movie-description">{data.overview}</p>
            </div>
        </div>
    )
}

export default MovieDetails;