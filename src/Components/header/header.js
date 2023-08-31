import './header.css'

const Header = () => {
    return ( 
        <div className="header-container">
            <h1 className="title">MovieBase</h1>
            <img alt="movie icon" src="movie-database-icon.png" 
            className="header-icon"/>
            <div className="buttons">
                <button className="log-button">Register</button>
                <button className="log-button">Sign in</button>
            </div>
        </div>
    )
}

export default Header