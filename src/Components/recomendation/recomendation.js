import './recomendation.css'

const Recomendation = ({data, onClickUpdate}) => {

    const handleOnClick = (data) => {
        onClickUpdate(data);
    };
  
    return (
        <div>
            <h1 className="rec-header">Movies you may also like:</h1>
            <div className='rec-container'>
            {data.results.slice(0, 6).map((movie, idx) => (
                <div className="rec-plate" key={idx} onClick={() => handleOnClick(movie.id)}>
                    <img className="rec-poster" src={movie.poster_path? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `poster_plh.png`}/>
                    <p className="rec-title">{`${movie.title} (${movie.release_date.slice(0, 4)})`}</p>
                </div>
            ))
            }
            </div>
        </div>
    )
}

export default Recomendation